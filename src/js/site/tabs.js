// Tabs (Partner With Us, client review of 27 October 2026; plan 2026-11-05 Task 6). Without script the
// panels are plain sections, one after another, and the tab bar stays hidden. With it, the bar drawn
// at build time ([data-tabbar]) becomes a WAI-ARIA tablist: one panel shows at a time, chosen by the
// address (#laboratories), else the first; arrows, Home and End move along the tabs (roving tabindex);
// the address follows the tab without a new history entry. A link on the page to a panel's id (the
// three doors) opens that tab and brings the bar into view (the band's top, under the header).
export function initTabs(root) {
  if (!root) return;
  const bar = root.querySelector('[data-tabbar]');
  const tabs = [...root.querySelectorAll('[data-tab-for]')];
  const panels = new Map(tabs.map((tab) => [tab.dataset.tabFor, document.getElementById(tab.dataset.tabFor)]));
  if (!bar || !tabs.length || [...panels.values()].some((p) => !p)) return;

  bar.setAttribute('role', 'tablist');
  bar.hidden = false;
  root.classList.add('is-tabbed');
  tabs.forEach((tab) => {
    const panel = panels.get(tab.dataset.tabFor);
    tab.id = `tab-${panel.id}`;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', panel.id);
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', tab.id);
    panel.tabIndex = 0;
  });

  const motion = () => (matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth');
  const select = (id, { focus = false, keepHash = false, settle = false } = {}) => {
    if (!panels.has(id)) return false;
    const switching = tabs.find((t) => t.dataset.tabFor === id).getAttribute('aria-selected') !== 'true';
    tabs.forEach((tab) => {
      const on = tab.dataset.tabFor === id;
      tab.setAttribute('aria-selected', String(on));
      tab.tabIndex = on ? 0 : -1;
      panels.get(tab.dataset.tabFor).hidden = !on;
      if (on && focus) tab.focus();
    });
    if (!keepHash && location.hash !== `#${id}`) history.replaceState(null, '', `#${id}`);
    // Chosen from the bar while it is held under the header (the reader is down in a panel): bring the
    // new panel's top back into view, rather than leaving them partway down it or past its end.
    if (!settle && switching && root.getBoundingClientRect().top < 0) root.scrollIntoView({ block: 'start', behavior: motion() });
    return true;
  };
  // An address that is not valid percent-encoding (#100%) reads as no tab, never as an error that
  // would stop the page's other scripts.
  const fromHash = () => { try { return decodeURIComponent(location.hash.slice(1)); } catch { return ''; } };

  tabs.forEach((tab, k) => {
    tab.addEventListener('click', () => select(tab.dataset.tabFor));
    tab.addEventListener('keydown', (e) => {
      const to = { ArrowRight: k + 1, ArrowDown: k + 1, ArrowLeft: k - 1, ArrowUp: k - 1, Home: 0, End: tabs.length - 1 }[e.key];
      if (to === undefined) return;
      e.preventDefault();
      select(tabs[(to + tabs.length) % tabs.length].dataset.tabFor, { focus: true });
    });
  });

  // A link to a panel (the doors, or one typed into the address) opens its tab, with the bar in view.
  document.addEventListener('click', (e) => {
    // Left alone: a click meant for a new tab or window (Ctrl, Cmd, Shift, a middle click) or one
    // another handler has taken.
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const link = e.target.closest('a[href^="#"]');
    if (!link || !panels.has(link.getAttribute('href').slice(1))) return;
    e.preventDefault();
    select(link.getAttribute('href').slice(1), { settle: true });
    root.scrollIntoView({ block: 'start', behavior: motion() });
  });
  window.addEventListener('hashchange', () => { if (select(fromHash(), { keepHash: true, settle: true })) root.scrollIntoView({ block: 'start' }); });

  // Arriving at a tab's address: the bar in view once the page has settled (fonts and pictures move it).
  if (!select(fromHash(), { keepHash: true, settle: true })) select(tabs[0].dataset.tabFor, { keepHash: true, settle: true });
  else {
    const land = () => root.scrollIntoView({ block: 'start' });
    requestAnimationFrame(land);
    if (document.readyState !== 'complete') window.addEventListener('load', () => requestAnimationFrame(land), { once: true });
  }
}
