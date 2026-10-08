// Design 04 · One Letter: page behaviour.
// The 3D scene is a separate bundle (it carries three.js) and is only fetched when it will be used.

const scriptUrl = document.currentScript ? document.currentScript.src : '';
const root = document.documentElement;

function ready(fn) {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn, { once: true });
  else fn();
}

// Mobile menu: a <details> element, closed again after choosing a link or pressing Escape.
function initMenu() {
  const menu = document.querySelector('[data-menu]');
  if (!menu) return;
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) menu.open = false;
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.open) {
      menu.open = false;
      menu.querySelector('summary').focus();
    }
  });
}

// The readout beside the strand: the same five three-letter words of the gene, shown as they
// usually read or as they read in sickle cell disease. The 3D tile turns over with it.
const READS = {
  typical: { amino: 'Glu', says: 'GAG. The cell reads these three letters as glutamic acid.' },
  sickle: { amino: 'Val', says: 'GTG. The cell now reads valine where glutamic acid should be.' },
};
function initReadout() {
  const readout = document.querySelector('[data-readout]');
  if (!readout) return;
  const choices = [...readout.querySelectorAll('[data-variant-choice]')];
  const amino = readout.querySelector('[data-amino]');
  const says = readout.querySelector('[data-says]');
  const still = document.querySelector('[data-letter-still]');
  const live = root.classList.contains('story-live');
  let chosenByReader = false;

  const show = (variant) => {
    readout.dataset.variant = variant;
    choices.forEach((choice) => { choice.checked = choice.value === variant; });
    if (amino) amino.textContent = READS[variant].amino;
    if (says) says.textContent = READS[variant].says;
    // Without the live scene, the still image follows the switch instead.
    if (still && still.dataset[variant]) still.src = still.dataset[variant];
    document.dispatchEvent(new CustomEvent('ll:variant', { detail: variant }));
  };
  choices.forEach((choice) => choice.addEventListener('change', () => {
    chosenByReader = true;
    show(choice.value);
  }));

  // With the live scene the tile starts on its usual letter and turns over once, when the camera
  // arrives at it. Leaving and coming back does not replay it, and nor does a reader's own choice.
  if (!live || !('IntersectionObserver' in window)) return;
  show('typical');
  const arrival = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    arrival.disconnect();
    setTimeout(() => { if (!chosenByReader) show('sickle'); }, 900);
  }, { threshold: 0.7 });
  arrival.observe(readout);
}

// The head script has already decided whether the live scene can run (WebGL, no reduced-motion request).
function loadScene() {
  if (!root.classList.contains('story-live') || !scriptUrl) return;
  const script = document.createElement('script');
  script.src = scriptUrl.replace(/one-letter\.js(\?.*)?$/, 'one-letter-scene.js$1');
  script.async = true;
  script.onerror = () => root.classList.remove('story-live');
  document.head.appendChild(script);
}

ready(() => {
  initMenu();
  initReadout();
  loadScene();
});
