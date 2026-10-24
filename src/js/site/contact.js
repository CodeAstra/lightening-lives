// The contact page's one piece of behaviour (content 5.15; plan, Task 4.6). A test's page sends the
// reader here as /contact/?about=tests&condition=sickle-cell-anaemia; each of the four contact
// actions then opens an email whose body already names the condition ("Condition: Sickle cell
// anaemia"), so the company can route it. Without script, or with no condition or one it does not
// know, the actions stay as the page was built: an email with its subject filled in (Review Focus 5).
// The address bar is never written into the page: a known slug is looked up here, and only these
// names, encoded, reach an href.

// The conditions by the slug a test's page sends, named as 5.15's "Which condition, if any?" names them.
export const CONDITIONS = new Map([
  ['sickle-cell-anaemia', 'Sickle cell anaemia'],
  ['thalassaemia', 'Thalassaemia, HbD or HbE'],
  ['spinal-muscular-atrophy', 'Spinal muscular atrophy'],
  ['duchenne-muscular-dystrophy', 'Duchenne muscular dystrophy'],
  ['limb-girdle-muscular-dystrophy', 'Limb-girdle muscular dystrophy'],
]);

// A mailto: href with the condition the search names as its body, in place of any body it had; any
// other href, or a search without a known condition, comes back unchanged. The query is joined by
// hand, not through URLSearchParams, which would write the subject's spaces as "+", and mail
// programs read "+" as a plus.
export function withCondition(href, search) {
  const name = CONDITIONS.get(new URLSearchParams(search).get('condition') ?? '');
  if (!name || !href.startsWith('mailto:')) return href;
  const [address, query = ''] = href.split('?');
  const params = query.split('&').filter((param) => param && !param.startsWith('body='));
  params.push(`body=${encodeURIComponent(`Condition: ${name}`)}`);
  return `${address}?${params.join('&')}`;
}

// On the contact page (its actions carry data-contact), add the condition to each action's email.
export function initContact(doc = document, search = window.location.search) {
  if (!doc.querySelector('[data-contact]')) return;
  for (const action of doc.querySelectorAll('[data-contact] a.action[href^="mailto:"]')) {
    const href = action.getAttribute('href');
    const next = withCondition(href, search);
    if (next !== href) action.setAttribute('href', next);
  }
}
