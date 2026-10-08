// Design 06 · Helix: the 3D scene.
//
// A double helix as a model on a stand, of the kind a museum or a laboratory keeps: two brass
// rails, glass rungs between them, a brass rod up the middle, and a base. It carries no letters.
// The model turns slowly, and can be spun by hand.
//
// The page's story follows the company's own line, "Innovate, Diagnose, Transform Lives". The
// camera opens beside the model, closes on a few rungs, pulls back to take in the whole of it
// (where five rungs light up in amber, one for each group of conditions the company tests for),
// and finally rises to look straight down the axis. From there the base is a disc in a ring of
// rays, the rungs radiate across it and every one of them is lit: the model is the logo's sun.
//
// Every colour is read from the page's CSS custom properties, so the comparison toolbar's
// variations reach the scene too.

import {
  Color, ConeGeometry, Curve, CylinderGeometry, DepthTexture, DirectionalLight, ExtrudeGeometry, Group,
  InstancedMesh, Mesh, MeshPhysicalMaterial, MeshStandardMaterial, Object3D, OrthographicCamera, PCFShadowMap,
  PMREMGenerator, PerspectiveCamera, PlaneGeometry, SRGBColorSpace, Scene, ShaderMaterial, ShadowMaterial, Shape,
  SphereGeometry, TubeGeometry, Vector2, Vector3, WebGLRenderTarget, WebGLRenderer,
} from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const DEG = Math.PI / 180;

// The helix keeps the proportions of DNA: each rung a third of the radius above the last, and a
// little over ten rungs to a turn. The turn is set at exactly 32/3 rungs, so that seen from above
// the rungs' ends fall on 32 evenly spaced directions, twice the 16 rays of the sun in the base.
const RUNGS = 24;
const RISE = 0.33;
const TWIST = (360 / (32 / 3)) * DEG;
const RADIUS = 1;
const FOOT = 1.05; // height of the first rung above the floor
const TOP = FOOT + (RUNGS - 1) * RISE;
const RAIL = 0.06; // radius of the two brass rails
const GLASS = 0.062; // and of a glass rung
const HUB = 0.11; // the brass bead where a rung crosses the rod
const NODE = 0.115; // the brass bead where it meets a rail
const TIP = { reach: 0.23, radius: 0.052 }; // the pointed finial beyond each rail: a ray, seen from above
const ROD = 0.04;
const BASE = {
  star: { rays: 16, outer: 1.92, inner: 1.5, thick: 0.05 }, // the logo's ring of rays, as a brass plate
  plinth: { radius: 1.36, height: 0.2 },
  disc: { radius: 1.28, height: 0.045 }, // the sun: yellow enamel set into the plinth
};
// The rungs that light up at the third stop, one for each group of conditions, bottom to top.
const MARKS = [3, 7, 11, 15, 19];

// Light, as for an instrument in a display case: a key light from the front right and above, the
// room's own soft light, and a cool light from behind for the edges of the glass. At the last
// stop the key light moves overhead and dims a little, so the model's shadow gathers under it
// and the flat base, now facing both lamp and camera, does not glare.
const KEY = { side: new Vector3(0.5, 0.74, 0.46).normalize(), over: new Vector3(0, 1, 0.012).normalize(), intensity: 2.3, overhead: 1.5, colour: 0xfff4e4 };
const RIM = { from: new Vector3(-0.6, 0.25, -0.75).normalize(), intensity: 0.6, colour: 0xe6eeff };
const ROOM = 1;
// The lens. `aperture` sets how quickly things off the plane of focus soften, and `blur` is the
// softest they get, as a share of the view's height.
const LENS = { aperture: 9.5, blur: 0.012, taps: 28 };

// Camera stops. `at` is the height on the axis the camera looks at, `el` its elevation above the
// horizontal (90 is straight down the axis), `az` where it stands round the model, `fov` the lens
// and `focus` how much nearer than the axis the plane of focus lies. The last stop uses a long
// lens from far away, so the rungs stack up into rays instead of receding down a tunnel.
// On a narrow screen the model sits above the text, not beside it, so each stop has its own
// framing there: `across` and `lift` are where the point looked at sits, as shares of the view's
// width from the left and of its height above centre.
const STOPS = [
  { at: 5.3, dist: 9.6, el: 7, az: -20, fov: 30, focus: -0.3, narrow: { dist: 13.2, across: 0.5, lift: 0.21 } },
  { at: 5.55, dist: 5.6, el: 4, az: -34, fov: 30, focus: -0.85, narrow: { dist: 8.6, across: 0.5, lift: 0.25 } },
  { at: 4.6, dist: 21, el: 11, az: 22, fov: 30, focus: 0, narrow: { dist: 37, across: 0.5, lift: 0.215 } },
  { at: 4.6, dist: 74, el: 90, az: 0, fov: 5, focus: -3, narrow: { dist: 122, across: 0.5, lift: 0.2 } },
];
// Where the model sits beside the text: a share of the way across the page's own column, not the
// window's, so text and model stay together however wide the window is.
const WIDE = { across: 0.72 };
const NARROW = {};
// Page load: the model is assembled from the base up, over this many seconds.
const INTRO = { seconds: 1.7, wait: 0.45 };

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (t) => t * t * (3 - 2 * t);
const smoother = (t) => t * t * t * (t * (t * 6 - 15) + 10);
// Between two stops: a short rest at each end, an even glide in between.
const travel = (t) => smoother(clamp((t - 0.07) / 0.86, 0, 1));

// One rail: a helix through one end of every rung, running half a rung past the first and last.
class Rail extends Curve {
  constructor(phase) {
    super();
    this.phase = phase;
  }

  getPoint(t, target = new Vector3()) {
    const index = lerp(-0.5, RUNGS - 0.5, t);
    const angle = index * TWIST + this.phase;
    return target.set(Math.cos(angle) * RADIUS, FOOT + index * RISE, Math.sin(angle) * RADIUS);
  }
}

function starShape({ rays, outer, inner }) {
  const shape = new Shape();
  for (let i = 0; i < rays * 2; i += 1) {
    const angle = (i / (rays * 2)) * Math.PI * 2;
    const reach = i % 2 === 0 ? outer : inner;
    if (i === 0) shape.moveTo(Math.cos(angle) * reach, Math.sin(angle) * reach);
    else shape.lineTo(Math.cos(angle) * reach, Math.sin(angle) * reach);
  }
  shape.closePath();
  return shape;
}

// ---- Scene ----------------------------------------------------------------------------------

function init(root) {
  const story = root.querySelector('[data-story]');
  const stage = root.querySelector('[data-stage]');
  const steps = [...root.querySelectorAll('[data-step]')];
  const mount = root.querySelector('[data-scene]');
  const pageColumn = root.querySelector('[data-frame]');
  const pinList = root.querySelector('[data-pins]');
  const pins = [...root.querySelectorAll('[data-pin]')];
  const trail = root.querySelector('[data-trail]');
  const trailLinks = trail ? [...trail.querySelectorAll('a')] : [];

  const renderer = new WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFShadowMap;
  const canvas = renderer.domElement;
  canvas.setAttribute('aria-hidden', 'true');
  const scene = new Scene();
  const camera = new PerspectiveCamera(STOPS[0].fov, 1, 0.5, 200);
  scene.background = new Color();

  // --- Materials ---
  // Brass, polished enough to carry the room's lights. The base is brushed, not polished: seen
  // from straight above, a polished plate would only mirror the lamp over it.
  const brass = new MeshStandardMaterial({ metalness: 1, roughness: 0.27 });
  const gold = new MeshStandardMaterial({ metalness: 1, roughness: 0.62, envMapIntensity: 0.75 });
  const brushed = new MeshStandardMaterial({ metalness: 1, roughness: 0.56, envMapIntensity: 0.8 });
  const enamel = new MeshPhysicalMaterial({ metalness: 0, roughness: 0.42, clearcoat: 0.7, clearcoatRoughness: 0.25 });
  // Glass. Real refraction costs a second drawing of the scene each frame, so small screens get
  // a simpler glass that only reflects.
  const fine = Math.max(window.innerWidth, window.innerHeight) >= 900;
  const glass = new MeshPhysicalMaterial({ metalness: 0, roughness: 0.05, ior: 1.5, envMapIntensity: 1.2 });
  // A solid glass rod is darkest along its edges, where it bends the room round behind it. The
  // renderer's refraction has only a flat page to bend, so that edge is put back here.
  glass.onBeforeCompile = (shader) => {
    shader.fragmentShader = shader.fragmentShader.replace('#include <transmission_fragment>', `#include <transmission_fragment>
      float llEdge = pow( 1.0 - saturate( dot( normal, normalize( vViewPosition ) ) ), 2.2 );
      totalDiffuse *= mix( 1.0, 0.5, llEdge );`);
  };
  let refracts = fine;
  function setGlass(refracting) {
    refracts = refracting;
    glass.transmission = refracting ? 1 : 0;
    glass.thickness = refracting ? 0.55 : 0;
    glass.transparent = !refracting;
    glass.opacity = refracting ? 1 : 0.58;
    glass.depthWrite = true;
    glass.needsUpdate = true;
    lit.fill(-1); // the glass is tinted again on the next frame
  }

  // --- The model ---
  const model = new Group();
  scene.add(model);
  const casts = (mesh) => {
    mesh.castShadow = true;
    return mesh;
  };

  // The base: a brass plate cut as the logo's ring of rays, a plinth, and the sun set into it.
  const star = casts(new Mesh(new ExtrudeGeometry(starShape(BASE.star), { depth: BASE.star.thick, bevelEnabled: false }).rotateX(-Math.PI / 2), gold));
  const plinth = casts(new Mesh(new CylinderGeometry(BASE.plinth.radius, BASE.plinth.radius + 0.05, BASE.plinth.height, 96), brushed));
  plinth.position.y = BASE.star.thick + BASE.plinth.height / 2;
  const disc = new Mesh(new CylinderGeometry(BASE.disc.radius, BASE.disc.radius, BASE.disc.height, 96), enamel);
  disc.position.y = BASE.star.thick + BASE.plinth.height + BASE.disc.height / 2 - 0.02;
  [star, plinth, disc].forEach((mesh) => { mesh.receiveShadow = true; });
  const deck = BASE.star.thick + BASE.plinth.height + BASE.disc.height - 0.02; // the top of the base
  // The rod the rungs are threaded on, with a finial at its head.
  const rodTop = TOP + 0.55;
  const rod = casts(new Mesh(new CylinderGeometry(ROD, ROD, rodTop - deck, 16), brass));
  rod.position.y = (rodTop + deck) / 2;
  const finial = casts(new Mesh(new SphereGeometry(0.12, 28, 20), brass));
  finial.position.y = rodTop;
  const collar = casts(new Mesh(new CylinderGeometry(0.16, 0.2, 0.12, 32), brass));
  collar.position.y = deck + 0.06;
  model.add(star, plinth, disc, rod, finial, collar);

  // The two rails, each ending in a bead.
  const railSegments = RUNGS * 12;
  const railRing = 12 * 6; // indices in one ring of a rail
  const rails = [0, Math.PI].map((phase) => {
    const curve = new Rail(phase);
    const rail = casts(new Mesh(new TubeGeometry(curve, railSegments, RAIL, 12, false), brass));
    rail.frustumCulled = false;
    model.add(rail);
    const ends = [0, 1].map((t) => {
      const end = casts(new Mesh(new SphereGeometry(RAIL * 1.5, 20, 14), brass));
      end.position.copy(curve.getPoint(t));
      model.add(end);
      return end;
    });
    return { rail, ends };
  });

  // The rungs: two lengths of glass, a bead on the rod, a bead on each rail and a finial beyond it.
  const half = RADIUS - NODE * 0.7 - HUB * 0.7; // the length of one piece of glass
  const mid = HUB * 0.7 + half / 2; // and how far out its middle sits
  const glassPieces = new InstancedMesh(new CylinderGeometry(GLASS, GLASS, 1, 28).rotateZ(Math.PI / 2), glass, RUNGS * 2);
  const nodes = new InstancedMesh(new SphereGeometry(NODE, 24, 16), brass, RUNGS * 2);
  const tips = new InstancedMesh(new ConeGeometry(TIP.radius, TIP.reach, 20).rotateZ(-Math.PI / 2), brass, RUNGS * 2);
  const hubs = new InstancedMesh(new SphereGeometry(HUB, 24, 16), brass, RUNGS);
  [glassPieces, nodes, tips, hubs].forEach((mesh) => {
    mesh.castShadow = true;
    mesh.frustumCulled = false;
    model.add(mesh);
  });
  const dummy = new Object3D();
  const grown = new Float32Array(RUNGS).fill(-1); // how much of each rung has been set so far
  // Sets one rung in place at a share of its full size (it grows out from the rod).
  function setRung(index, size) {
    if (Math.abs(grown[index] - size) < 0.0005) return false;
    grown[index] = size;
    const y = FOOT + index * RISE;
    const scale = Math.max(size, 0.0001);
    [0, 1].forEach((side) => {
      const angle = index * TWIST + side * Math.PI;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      dummy.rotation.set(0, -angle, 0);
      dummy.position.set(cos * mid * scale, y, sin * mid * scale);
      dummy.scale.set(half * scale, scale, scale);
      dummy.updateMatrix();
      glassPieces.setMatrixAt(index * 2 + side, dummy.matrix);
      dummy.scale.setScalar(scale);
      dummy.position.set(cos * RADIUS * scale, y, sin * RADIUS * scale);
      dummy.updateMatrix();
      nodes.setMatrixAt(index * 2 + side, dummy.matrix);
      const out = RADIUS + NODE * 0.6 + TIP.reach / 2;
      dummy.position.set(cos * out * scale, y, sin * out * scale);
      dummy.updateMatrix();
      tips.setMatrixAt(index * 2 + side, dummy.matrix);
    });
    dummy.rotation.set(0, 0, 0);
    dummy.position.set(0, y, 0);
    dummy.scale.setScalar(scale);
    dummy.updateMatrix();
    hubs.setMatrixAt(index, dummy.matrix);
    return true;
  }
  // How much of the model has been assembled, 0..1: rungs from the base up, and the rails with them.
  function assemble(share) {
    let changed = false;
    for (let i = 0; i < RUNGS; i += 1) {
      changed = setRung(i, smooth(clamp(share * (RUNGS + 5) - i, 0, 1) ** 0.6)) || changed;
    }
    if (changed) [glassPieces, nodes, tips, hubs].forEach((mesh) => { mesh.instanceMatrix.needsUpdate = true; });
    const drawn = share >= 1 ? Infinity : Math.floor(clamp(share * 1.08, 0, 1) * railSegments) * railRing;
    rails.forEach(({ rail, ends }) => {
      rail.geometry.setDrawRange(0, drawn);
      ends[0].visible = share > 0.02;
      ends[1].visible = share >= 1;
    });
    finial.visible = share >= 1;
  }

  // --- The floor: it shows nothing but the shadow that falls on it ---
  const floor = new Mesh(new PlaneGeometry(90, 90).rotateX(-Math.PI / 2), new ShadowMaterial({ opacity: 0.16 }));
  floor.receiveShadow = true;
  scene.add(floor);

  // --- Light ---
  const studio = new PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  scene.environment = studio.fromScene(room, 0.04).texture;
  scene.environmentIntensity = ROOM;
  room.dispose();
  studio.dispose();
  const rim = new DirectionalLight(RIM.colour, RIM.intensity);
  rim.position.copy(RIM.from).multiplyScalar(40);
  const key = new DirectionalLight(KEY.colour, KEY.intensity);
  key.target.position.set(0, TOP / 2, 0);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  key.shadow.radius = 7;
  key.shadow.bias = -0.0004;
  key.shadow.normalBias = 0.02;
  Object.assign(key.shadow.camera, { left: -6.5, right: 6.5, top: 6.5, bottom: -6.5, near: 10, far: 70 });
  key.shadow.camera.updateProjectionMatrix();
  scene.add(rim, key, key.target);
  const toLight = new Vector3();

  // --- The lens: the scene is drawn to a picture with its depth, then that picture is drawn to the
  // screen with everything off the plane of focus softened. ---
  const film = new WebGLRenderTarget(1, 1, { samples: 4, depthTexture: new DepthTexture(1, 1), colorSpace: SRGBColorSpace });
  const lens = new ShaderMaterial({
    depthTest: false,
    depthWrite: false,
    uniforms: {
      tPicture: { value: film.texture },
      tDepth: { value: film.depthTexture },
      uNear: { value: 0.5 },
      uFar: { value: 200 },
      uFocus: { value: 10 },
      uAperture: { value: LENS.aperture },
      uBlur: { value: 0 }, // in pixels of the picture
      uPixel: { value: new Vector2(1, 1) },
    },
    vertexShader: 'varying vec2 vUv;\nvoid main() { vUv = uv; gl_Position = vec4( position.xy, 0.0, 1.0 ); }',
    fragmentShader: `
      #include <common>
      #include <packing>
      uniform sampler2D tPicture;
      uniform sampler2D tDepth;
      uniform float uNear;
      uniform float uFar;
      uniform float uFocus;
      uniform float uAperture;
      uniform float uBlur;
      uniform vec2 uPixel;
      varying vec2 vUv;
      float distanceAt( vec2 uv ) {
        return - perspectiveDepthToViewZ( texture2D( tDepth, uv ).x, uNear, uFar );
      }
      // How soft a point at this distance is: nothing at the plane of focus, more either side of it.
      float softness( float distance ) {
        return clamp( abs( 1.0 / uFocus - 1.0 / distance ) * uAperture - 0.06, 0.0, 1.0 );
      }
      void main() {
        float here = distanceAt( vUv );
        float soft = softness( here );
        vec4 sum = texture2D( tPicture, vUv );
        float count = 1.0;
        float turn = fract( 52.9829189 * fract( dot( gl_FragCoord.xy, vec2( 0.06711056, 0.00583715 ) ) ) ) * PI2;
        for ( int i = 0; i < ${LENS.taps}; i ++ ) {
          float reach = sqrt( ( float( i ) + 0.5 ) / ${LENS.taps}.0 );
          float angle = float( i ) * 2.39996323 + turn;
          vec2 uv = vUv + vec2( cos( angle ), sin( angle ) ) * reach * uBlur * uPixel;
          float there = distanceAt( uv );
          // A neighbour spreads over this point as far as its own softness reaches. One that lies
          // behind this point cannot spread over it, only show round it as far as this point is soft.
          float spread = softness( there );
          if ( there > here ) spread = min( spread, soft );
          float weight = smoothstep( reach - 0.08, reach + 0.08, spread );
          sum += texture2D( tPicture, uv ) * weight;
          count += weight;
        }
        gl_FragColor = sum / count;
        #include <colorspace_fragment>
      }`,
  });
  const print = new Scene();
  print.add(new Mesh(new PlaneGeometry(2, 2), lens));
  const printer = new OrthographicCamera(-1, 1, 1, -1, 0, 1);

  // --- Theme: every colour comes from the page's CSS custom properties ---
  const clear = new Color();
  const amber = new Color();
  function applyTheme() {
    const style = getComputedStyle(document.documentElement);
    const read = (name) => style.getPropertyValue(name).trim();
    scene.background.set(read('--ground'));
    brass.color.set(read('--metal'));
    brushed.color.set(read('--metal'));
    gold.color.set(read('--ray'));
    enamel.color.set(read('--sun')).multiplyScalar(0.62); // enamel in full light comes out at about the page's own yellow
    clear.set(read('--glass'));
    amber.set(read('--amber'));
    floor.material.color.set(read('--shadow'));
    lit.fill(-1); // the glass is tinted again on the next frame
  }

  // --- State ---
  const view = { width: 0, height: 0, aspect: 1, layout: WIDE, shiftX: 0, ratio: Math.min(window.devicePixelRatio || 1, 2), lens: true };
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  const drag = { on: false, id: 0, x: 0, speed: 0 };
  const lit = new Float32Array(RUNGS).fill(-1); // how far each rung's glass has turned amber, as last drawn
  const glow = new Float32Array(RUNGS); // and as it is now
  const tint = new Color();
  setGlass(fine);
  let live = false; // is the stage on screen
  let target = 0; // scroll position within the story, 0..3
  let progress = 0;
  let velocity = 0;
  let spin = 0; // the model's own slow turn, and whatever turn the reader has given it
  let introStart = 0;
  let introDone = false;
  let running = false;
  let lastTime = 0;
  let slowFrames = 0;
  let countedFrames = 0;
  let slowSpells = 0;
  const eye = new Vector3();
  const focus = new Vector3();
  const point = new Vector3();
  const side = new Vector3();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function frame() {
    const index = clamp(Math.floor(progress), 0, STOPS.length - 2);
    const t = travel(progress - index);
    const narrow = view.layout === NARROW;
    const from = narrow ? { ...STOPS[index], ...STOPS[index].narrow } : STOPS[index];
    const to = narrow ? { ...STOPS[index + 1], ...STOPS[index + 1].narrow } : STOPS[index + 1];

    // A window much wider than it is tall has room to spare beside the model, so the camera
    // comes a little closer there and the model fills more of it.
    const closer = narrow ? 1 : clamp(1.42 - view.aspect * 0.26, 0.82, 1);
    const distance = closer * Math.exp(lerp(Math.log(from.dist), Math.log(to.dist), t));
    const elevation = (lerp(from.el, to.el, t) + pointer.y * -1) * DEG;
    const azimuth = (lerp(from.az, to.az, t) + pointer.x * 2.4) * DEG;
    focus.set(0, lerp(from.at, to.at, t), 0);
    eye.set(Math.cos(elevation) * Math.sin(azimuth), Math.sin(elevation), Math.cos(elevation) * Math.cos(azimuth));
    camera.position.copy(focus).addScaledVector(eye, distance);
    // "Up" is the way the camera would move if it rose further, which stays defined straight overhead.
    camera.up.set(-Math.sin(elevation) * Math.sin(azimuth), Math.cos(elevation), -Math.sin(elevation) * Math.cos(azimuth));
    camera.lookAt(focus);
    camera.fov = Math.exp(lerp(Math.log(from.fov), Math.log(to.fov), t));
    camera.near = clamp(distance * 0.25, 0.5, 40);
    camera.far = distance + 40;
    const shiftX = narrow ? lerp(from.across, to.across, t) - 0.5 : view.shiftX;
    const lift = narrow ? lerp(from.lift, to.lift, t) : 0;
    camera.setViewOffset(view.width, view.height, -shiftX * view.width, lift * view.height, view.width, view.height);

    model.rotation.y = spin;

    // The key light swings overhead as the camera does.
    const overhead = smooth(clamp(progress - (STOPS.length - 2), 0, 1));
    toLight.copy(KEY.side).lerp(KEY.over, overhead).normalize();
    key.position.copy(key.target.position).addScaledVector(toLight, 40);
    key.intensity = lerp(KEY.intensity, KEY.overhead, overhead);

    // Glass turns amber: five rungs once the whole model is in view, then all of them, from the
    // base up, as the camera rises over it.
    let tinted = false;
    for (let i = 0; i < RUNGS; i += 1) {
      const order = MARKS.indexOf(i);
      const marked = order < 0 ? 0 : smooth(clamp((progress - 1.5 - order * 0.07) / 0.22, 0, 1));
      const all = smooth(clamp((progress - 2.3 - (i / RUNGS) * 0.42) / 0.2, 0, 1));
      glow[i] = Math.max(marked, all);
      if (Math.abs(glow[i] - lit[i]) < 0.002) continue;
      lit[i] = glow[i];
      // Without refraction a pale rod would only be a white veil, so unlit glass is drawn smoky
      // and takes its look from the room's reflections.
      tint.copy(clear).multiplyScalar(refracts ? 1 : 0.5).lerp(amber, glow[i]);
      glassPieces.setColorAt(i * 2, tint);
      glassPieces.setColorAt(i * 2 + 1, tint);
      tinted = true;
    }
    if (tinted) glassPieces.instanceColor.needsUpdate = true;

    if (view.lens) {
      lens.uniforms.uNear.value = camera.near;
      lens.uniforms.uFar.value = camera.far;
      lens.uniforms.uFocus.value = distance + lerp(from.focus, to.focus, t);
      renderer.setRenderTarget(film);
      renderer.render(scene, camera);
      renderer.setRenderTarget(null);
      renderer.render(print, printer);
    } else {
      renderer.render(scene, camera);
    }

    if (pinList) {
      // Each lit rung is named, on a leader long enough to clear the model, while the whole model is in view.
      camera.updateMatrixWorld();
      const shown = smooth(clamp((progress - 1.72) / 0.2, 0, 1)) * (1 - smooth(clamp((progress - 2.12) / 0.2, 0, 1)));
      pinList.style.opacity = String(shown);
      if (shown > 0.01) {
        side.setFromMatrixColumn(camera.matrixWorld, 0);
        const edge = point.set(0, focus.y, 0).addScaledVector(side, RADIUS + TIP.reach + NODE + 0.25).project(camera).x;
        const centre = point.set(0, focus.y, 0).project(camera).x;
        pinList.style.setProperty('--lead', `${(((edge - centre) * 0.5) * view.width).toFixed(1)}px`);
        pins.forEach((pin, k) => {
          point.set(0, FOOT + MARKS[k] * RISE, 0).project(camera);
          pin.style.transform = `translate(${((point.x * 0.5 + 0.5) * view.width).toFixed(1)}px, ${((-point.y * 0.5 + 0.5) * view.height).toFixed(1)}px)`;
          pin.style.opacity = String(glow[MARKS[k]]);
        });
      }
    }
    // How far through the story the camera is, for the styles that follow it.
    stage.style.setProperty('--p', (clamp(progress / (STOPS.length - 1), 0, 1)).toFixed(4));
    if (trail) {
      const active = clamp(Math.round(progress), 0, STOPS.length - 1);
      trailLinks.forEach((link, i) => {
        if (i === active) link.setAttribute('aria-current', 'step');
        else link.removeAttribute('aria-current');
      });
    }
  }

  function tick(now) {
    if (!live) { running = false; return; }
    // A frame's timestamp can predate the moment wake() was called, so never step backwards.
    const elapsedFrame = (now - lastTime) / 1000;
    const dt = clamp(elapsedFrame, 0.001, 0.05);
    lastTime = now;

    // The camera follows the scroll on a critically damped spring, so it gathers speed and comes
    // to rest without a jolt, however the wheel or trackpad delivers its steps.
    const stiffness = 38;
    velocity += (stiffness * (target - progress) - 2 * Math.sqrt(stiffness) * velocity) * dt;
    progress += velocity * dt;
    if (Math.abs(target - progress) < 0.0003 && Math.abs(velocity) < 0.002) {
      progress = target;
      velocity = 0;
    }
    pointer.x += (pointer.tx - pointer.x) * (1 - Math.exp(-dt * 3));
    pointer.y += (pointer.ty - pointer.y) * (1 - Math.exp(-dt * 3));

    // The model turns slowly on its stand. A push from the reader spins it, and the spin dies away.
    spin += dt * 0.14;
    if (!drag.on) {
      spin += drag.speed * dt;
      drag.speed *= Math.exp(-dt * 1.6);
    }

    // Page load: the model is assembled from the base up.
    if (!introDone) {
      const share = clamp((now - introStart) / 1000 / INTRO.seconds, 0, 1);
      assemble(share);
      introDone = share >= 1;
    }

    frame();

    // If this machine cannot keep up, give up the lens first, then refraction in the glass, and
    // after that draw fewer pixels rather than fewer frames. One slow spell (shaders compiling, a
    // busy moment) is not enough: it takes two in a row, and none are counted while the model is
    // still being assembled.
    if (introDone && (view.lens || refracts || view.ratio > 1)) {
      countedFrames += 1;
      if (elapsedFrame > 0.024) slowFrames += 1;
      if (countedFrames >= 45) {
        slowSpells = slowFrames > 22 ? slowSpells + 1 : 0;
        if (slowSpells >= 2) {
          if (view.lens) view.lens = false;
          else if (refracts) setGlass(false);
          else view.ratio = Math.max(1, view.ratio - 0.25);
          sizePicture();
          slowSpells = 0;
        }
        countedFrames = 0;
        slowFrames = 0;
      }
    }

    // The model is always turning, so the scene keeps drawing for as long as it is on screen.
    requestAnimationFrame(tick);
  }
  function wake() {
    if (running || !live || document.hidden) return;
    running = true;
    lastTime = performance.now();
    requestAnimationFrame(tick);
  }

  function resize() {
    const width = mount.clientWidth;
    const height = mount.clientHeight;
    if (!width || !height) return;
    view.width = width;
    view.height = height;
    view.aspect = width / height;
    view.layout = width >= 900 && view.aspect > 1.05 ? WIDE : NARROW;
    const column = pageColumn ? pageColumn.getBoundingClientRect() : null;
    const whole = mount.getBoundingClientRect();
    view.shiftX = column && column.width ? (column.left - whole.left + column.width * WIDE.across) / width - 0.5 : 0;
    sizePicture();
    camera.aspect = view.aspect;
    wake();
  }
  function sizePicture() {
    renderer.setPixelRatio(view.ratio);
    renderer.setSize(view.width, view.height, false);
    const wide = Math.round(view.width * view.ratio);
    const high = Math.round(view.height * view.ratio);
    film.setSize(wide, high);
    lens.uniforms.uPixel.value.set(1 / wide, 1 / high);
    lens.uniforms.uBlur.value = LENS.blur * high;
  }

  // Each step of the text has a camera stop. The camera reaches a stop when that step's block has
  // scrolled fully into the stage, and travels between stops in proportion to the scroll in between.
  function readScroll() {
    const stickyTop = parseFloat(getComputedStyle(stage).top) || 0;
    const scrolled = stickyTop - story.getBoundingClientRect().top;
    const tops = steps.map((step) => step.offsetTop);
    let value = 0;
    for (let k = 0; k < tops.length - 1; k += 1) {
      if (scrolled >= tops[k]) value = k + clamp((scrolled - tops[k]) / Math.max(1, tops[k + 1] - tops[k]), 0, 1);
    }
    target = clamp(value, 0, STOPS.length - 1);
    wake();
  }

  const observer = new IntersectionObserver((entries) => {
    live = entries[0].isIntersecting;
    if (live && !introStart) introStart = performance.now() + INTRO.wait * 1000;
    if (live) { resize(); wake(); }
  }, { rootMargin: '10% 0px' });
  observer.observe(stage);

  window.addEventListener('scroll', readScroll, { passive: true });
  window.addEventListener('resize', () => { resize(); readScroll(); });
  if ('ResizeObserver' in window) new ResizeObserver(resize).observe(mount);

  window.addEventListener('pointermove', (event) => {
    if (!live || reducedMotion.matches) return;
    if (drag.on && event.pointerId === drag.id) {
      const moved = (event.clientX - drag.x) * 0.0085;
      spin += moved;
      drag.speed = lerp(drag.speed, moved * 60, 0.4);
      drag.x = event.clientX;
      return;
    }
    if (event.pointerType === 'touch') return;
    const rect = canvas.getBoundingClientRect();
    pointer.tx = clamp(((event.clientX - rect.left) / rect.width) * 2 - 1, -1, 1);
    pointer.ty = clamp(((event.clientY - rect.top) / rect.height) * 2 - 1, -1, 1);
  }, { passive: true });
  // Drag sideways to spin the model on its stand. Vertical drags stay with the page (touch-action).
  stage.addEventListener('pointerdown', (event) => {
    if (event.button !== 0 && event.pointerType === 'mouse') return;
    drag.on = true;
    drag.id = event.pointerId;
    drag.x = event.clientX;
    drag.speed = 0;
    stage.classList.add('is-turning');
  });
  const release = (event) => {
    if (!drag.on || event.pointerId !== drag.id) return;
    drag.on = false;
    stage.classList.remove('is-turning');
  };
  window.addEventListener('pointerup', release);
  window.addEventListener('pointercancel', release);

  document.addEventListener('ll:theme', applyTheme);
  document.addEventListener('visibilitychange', wake);
  canvas.addEventListener('webglcontextlost', (event) => {
    event.preventDefault();
    document.documentElement.classList.remove('story-live');
  });

  mount.appendChild(canvas);
  applyTheme();
  readScroll();
  progress = target;
  live = true;
  introStart = performance.now() + INTRO.wait * 1000;
  // Arriving part-way down the story (a reload, a shared link): the model is already assembled.
  introDone = progress > 0.35;
  assemble(introDone ? 1 : 0);
  resize();
  frame();
  // A late arrival (slow connection) still upgrades the page from its still images.
  document.documentElement.classList.add('story-live', 'scene-ready');
}

try {
  init(document);
} catch (error) {
  // No WebGL after all: the page falls back to its still images.
  document.documentElement.classList.remove('story-live');
  console.warn('Helix: 3D scene unavailable, showing still images instead.', error);
}
