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

  const select = (id, { focus = false, keepHash = false } = {}) => {
    if (!panels.has(id)) return false;
    tabs.forEach((tab) => {
      const on = tab.dataset.tabFor === id;
      tab.setAttribute('aria-selected', String(on));
      tab.tabIndex = on ? 0 : -1;
      panels.get(tab.dataset.tabFor).hidden = !on;
      if (on && focus) tab.focus();
    });
    if (!keepHash && location.hash !== `#${id}`) history.replaceState(null, '', `#${id}`);
    return true;
  };
  const fromHash = () => decodeURIComponent(location.hash.slice(1));

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
    const link = e.target.closest('a[href^="#"]');
    if (!link || !panels.has(link.getAttribute('href').slice(1))) return;
    e.preventDefault();
    select(link.getAttribute('href').slice(1));
    root.scrollIntoView({ block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  });
  window.addEventListener('hashchange', () => { if (select(fromHash(), { keepHash: true })) root.scrollIntoView({ block: 'start' }); });

  // Arriving at a tab's address: the bar in view once the page has settled (fonts and pictures move it).
  if (!select(fromHash(), { keepHash: true })) select(tabs[0].dataset.tabFor, { keepHash: true });
  else {
    const land = () => root.scrollIntoView({ block: 'start' });
    requestAnimationFrame(land);
    if (document.readyState !== 'complete') window.addEventListener('load', () => requestAnimationFrame(land), { once: true });
  }
}
