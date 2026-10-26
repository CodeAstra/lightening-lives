// The enquiry form (26 October 2026; src/site/_data/enquire.json, enquire.njk). Every link marked
// data-enquire ("Partner with us", "Talk to our scientific team", a test page's "Ask about …") opens
// the company's Fillout form in a dialog where the reader is, instead of sending them through the
// Partners page to Contact: one click. The form opens filled in with what the link knew (who the
// reader is, the condition, the topic) and the page it came from, each sent as a URL parameter the
// form reads (Fillout passes every data- attribute of its element on to the form). Fillout's script is
// fetched only when the form is first opened (and warmed when a link is pointed at or focused), so no
// page carries another host's script before the reader asks. The dialog is the site's own: Escape, the
// close button or a click outside close it, and the focus goes back to the link. On Contact the form
// is in the page itself and the links there bring it into view. If Fillout cannot be reached, the
// dialog says so and gives the form's own address and the email; without script every link is a link
// to Contact, which links to the form.

const PARAMS = [['who', 'enquiry'], ['condition', 'condition'], ['topic', 'topic']];

// The parameters a link sends: each value it names, looked up in the labels (an unknown one is left
// out, so nothing the page did not write reaches the form), and the page it was opened from.
export function paramsFor(link, labels, path) {
  const out = [];
  for (const [key, param] of PARAMS) {
    const slug = key === 'who' ? link.dataset.enquire : link.dataset[key];
    const label = slug && labels[key] && Object.prototype.hasOwnProperty.call(labels[key], slug) ? labels[key][slug] : '';
    if (label) out.push([param, label]);
  }
  out.push(['source', path]);
  return out;
}

// The same, from Contact's own address (/contact/?enquiry=laboratory&condition=…), where a link sent
// the reader without script.
export function paramsFromSearch(search, labels, path) {
  const query = new URLSearchParams(search);
  const fake = { dataset: { enquire: query.get('enquiry') || '', condition: query.get('condition') || '', topic: query.get('topic') || '' } };
  return paramsFor(fake, labels, path);
}

const key = (params) => params.map(([k, v]) => `${k}=${v}`).join('&');

function readLabels(host) {
  try { return JSON.parse(host.dataset.labels || '{}'); } catch { return {}; }
}

// Fillout's script initialises every form element it finds that it has not met before, each time it
// runs; so a new form element is followed by the script once more (the browser has it cached).
function runFillout(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

// A fresh form element for these parameters, in place of whatever the container held.
function mountForm(container, formId, params) {
  const el = document.createElement('div');
  el.className = 'enquire-embed';
  el.dataset.filloutId = formId;
  el.dataset.filloutEmbedType = 'standard';
  el.setAttribute('data-fillout-dynamic-resize', '');
  for (const [name, value] of params) el.setAttribute(`data-${name}`, value);
  container.replaceChildren(el);
  return el;
}

// Shown and the form's frame named once it has loaded; if it has not within 12 s, the way round.
function watch(host, el) {
  const failed = host.querySelector('[data-enquire-failed]');
  if (failed) failed.hidden = true;
  host.classList.add('is-loading');
  let done = false;
  const finish = (ok) => {
    if (done) return;
    done = true;
    host.classList.remove('is-loading');
    if (!ok && failed) failed.hidden = false;
  };
  const timer = setTimeout(() => finish(false), 12000);
  const seen = new MutationObserver(() => {
    const frame = el.querySelector('iframe');
    if (!frame) return;
    seen.disconnect();
    frame.title = 'Enquiry form';
    frame.addEventListener('load', () => { clearTimeout(timer); finish(true); }, { once: true });
  });
  seen.observe(el, { childList: true, subtree: true });
  return (error) => { clearTimeout(timer); seen.disconnect(); if (error) finish(false); };
}

export function initEnquire(doc = document) {
  const links = [...doc.querySelectorAll('[data-enquire]')];
  const inline = doc.querySelector('[data-enquire-inline]');
  const dialog = doc.querySelector('[data-enquire-dialog]');
  const host = inline || dialog;
  if (!host) return;
  const formId = host.dataset.formId;
  const src = host.dataset.formScript;
  const labels = readLabels(host);
  const path = window.location.pathname;
  let warmed = null;
  const warm = () => { if (!warmed) warmed = runFillout(src).catch(() => {}); return warmed; };

  // Contact: the form in the page, filled in from the address that brought the reader here.
  if (inline) {
    const params = paramsFromSearch(window.location.search, labels, path);
    const el = mountForm(inline.querySelector('[data-enquire-form]'), formId, params);
    const stop = watch(inline, el);
    runFillout(src).catch(() => stop(true));
    links.forEach((link) => link.addEventListener('click', (event) => {
      event.preventDefault();
      inline.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    }));
    return;
  }

  // Everywhere else: the dialog.
  if (!dialog || typeof dialog.showModal !== 'function') return; // a very old browser: the links go to Contact
  const title = dialog.querySelector('[data-enquire-title]');
  const container = dialog.querySelector('[data-enquire-form]');
  const defaultTitle = title ? title.textContent : '';
  let current = '';
  let opener = null;
  const open = (link) => {
    const params = paramsFor(link, labels, path);
    // The link's own words title the dialog ("Plan a programme"), so the reader sees what they chose.
    const said = link.textContent.replace(/\s+/g, ' ').trim();
    if (title) title.textContent = said && said.length < 48 && !/^talk to us$/i.test(said) && !/^tell us$/i.test(said) ? said : defaultTitle;
    if (key(params) !== current) {
      current = key(params);
      const el = mountForm(container, formId, params);
      const stop = watch(dialog, el);
      runFillout(src).catch(() => stop(true));
    }
    opener = link;
    dialog.showModal();
    dialog.querySelector('[data-enquire-close]').focus({ preventScroll: true });
  };
  const close = () => { if (dialog.open) dialog.close(); };
  dialog.addEventListener('close', () => { if (opener && opener.isConnected) opener.focus({ preventScroll: true }); opener = null; });
  dialog.querySelector('[data-enquire-close]').addEventListener('click', close);
  // A click on the shade around the sheet closes it; one inside does not.
  dialog.addEventListener('click', (event) => { if (event.target === dialog) close(); });
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
      event.preventDefault();
      open(link);
    });
    link.addEventListener('pointerenter', warm, { once: true });
    link.addEventListener('focus', warm, { once: true });
  });
}
