// The contact page's form (content 5.9). A page sends the reader here as /contact/?enquiry=programme
// or ?condition=sickle-cell-anaemia (a test's page): the choice of who they are is set, and the
// condition ticked. On sending, the form goes to Web3Forms when the site has a key (data-mode
// "web3forms"), with the answer shown in place; otherwise (data-mode "email") the visitor's email app
// opens with the enquiry written out, to the company's address. Without script the form is a mailto
// form. The address bar is never written into the page: a known slug or choice is looked up here.

// The conditions by the slug a test's page sends; askAbout (eleventy.config.mjs) names them the same way.
export const CONDITIONS = new Map([
  ['sickle-cell-anaemia', 'Sickle cell anaemia'],
  ['thalassaemia', 'Thalassaemia, HbD or HbE'],
  ['spinal-muscular-atrophy', 'Spinal muscular atrophy'],
  ['duchenne-muscular-dystrophy', 'Duchenne muscular dystrophy'],
  ['limb-girdle-muscular-dystrophy', 'Limb-girdle muscular dystrophy'],
]);

// The enquiry kinds the form offers, and the subject each sends.
export const ENQUIRIES = new Map([
  ['scientific', 'Hospital or laboratory'],
  ['programme', 'Public health programme'],
  ['funder', 'CSR or NGO'],
  ['develop', 'New test, research or media'],
]);

// A mailto: href with the condition the search names as its body, in place of any body it had; any
// other href, or a search without a known condition, comes back unchanged. The query is joined by
// hand, not through URLSearchParams, which would write spaces as "+", and mail programs read "+" as a plus.
export function withCondition(href, search) {
  const name = CONDITIONS.get(new URLSearchParams(search).get('condition') ?? '');
  if (!name || !href.startsWith('mailto:')) return href;
  const [address, query = ''] = href.split('?');
  const params = query.split('&').filter((param) => param && !param.startsWith('body='));
  params.push(`body=${encodeURIComponent(`Condition: ${name}`)}`);
  return `${address}?${params.join('&')}`;
}

// The enquiry as an email: its subject and its body, one field to a line.
export function enquiryEmail(fields) {
  const kind = ENQUIRIES.get(fields.enquiry) ?? 'Enquiry';
  const lines = [
    ['Who', kind], ['Name', fields.name], ['Organisation', fields.organisation], ['Role', fields.role],
    ['State', fields.state], ['Email', fields.email], ['Phone', fields.phone],
    ['Conditions', (fields.conditions || []).join(', ')],
  ].filter(([, v]) => v && String(v).trim()).map(([k, v]) => `${k}: ${String(v).trim()}`);
  const body = `${lines.join('\n')}\n\n${(fields.message || '').trim()}`;
  return { subject: `Enquiry: ${kind}`, body };
}

function read(form) {
  const data = new FormData(form);
  return {
    enquiry: data.get('enquiry'), name: data.get('name'), organisation: data.get('organisation'), role: data.get('role'),
    state: data.get('state'), email: data.get('email'), phone: data.get('phone'), message: data.get('message'),
    conditions: data.getAll('conditions[]'),
  };
}

export function initContact(doc = document, search = window.location.search) {
  const form = doc.querySelector('[data-enquiry]');
  if (!form) return;
  const params = new URLSearchParams(search);
  const enquiry = params.get('enquiry');
  if (ENQUIRIES.has(enquiry)) {
    const radio = form.querySelector(`input[name="enquiry"][value="${enquiry}"]`);
    if (radio) radio.checked = true;
  }
  const slug = params.get('condition');
  if (CONDITIONS.has(slug)) {
    const box = form.querySelector(`input[name="conditions[]"][data-slug="${slug}"]`);
    if (box) box.checked = true;
  }
  const status = form.querySelector('[data-enquiry-status]');
  const say = (text, ok) => { status.hidden = false; status.textContent = text; status.classList.toggle('is-error', !ok); };

  form.addEventListener('submit', async (event) => {
    if (!form.reportValidity()) { event.preventDefault(); return; }
    if (form.querySelector('[name="botcheck"]').checked) { event.preventDefault(); return; }
    const fields = read(form);
    const { subject, body } = enquiryEmail(fields);
    if (form.dataset.mode !== 'web3forms') {
      event.preventDefault();
      window.location.href = `mailto:${form.dataset.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      say('Your email app should open with your enquiry written out. Send it from there.', true);
      return;
    }
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    const subjectField = form.querySelector('[data-subject]');
    if (subjectField) subjectField.value = subject;
    try {
      const data = new FormData(form);
      data.delete('conditions[]');
      data.set('conditions', fields.conditions.join(', '));
      const response = await fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === false) throw new Error(result.message || response.statusText);
      form.reset();
      say('Thank you. Your enquiry has reached our scientific team, and we will reply by email.', true);
    } catch {
      say(`It did not send. Please write to us at ${form.dataset.email}.`, false);
    } finally {
      button.disabled = false;
    }
  });
}
