<p align="center">
  <img src="docs/aperture-spinner.svg" alt="Aperture GenLayer loading spinner" width="96" height="96" />
</p>

<h1 align="center">Aperture: GenLayer Spinner</h1>

<p align="center"><b>A compact GenLayer loading motion that closes, locks, and releases without breaking the mark apart.</b></p>

<p align="center">
  <img src="https://img.shields.io/badge/format-SVG-111111" alt="SVG" />
  <img src="https://img.shields.io/badge/animation-CSS-6366F1" alt="CSS animation" />
  <img src="https://img.shields.io/badge/loop-1.34s-8B5CF6" alt="1.34 second loop" />
  <img src="https://img.shields.io/badge/sizes-16--64px-06B6D4" alt="16 to 64 pixels" />
  <img src="https://img.shields.io/badge/license-MIT-111111" alt="MIT license" />
</p>

Aperture is an original animated loading spinner for the **Design the GenLayer Spinner** Builder mission. It uses the exact GenLayer mark as the motion system instead of adding a generic ring, orbit, or rotating loader around the brand.

The left and right wings close inward with exact mirrored values while the center compresses into a short lock state. The geometry then releases cleanly back to the untouched GenLayer mark before the loop repeats.

The production version uses a purple, indigo, and cyan gradient:

```text
Purple  #8B5CF6
Mid     #6366F1
Blue    #06B6D4
```

The same gradient remains distinct on both light and dark surfaces while the motion stays tight enough to preserve the GenLayer silhouette at compact Portal sizes.

## Live deployment structure

The `/docs` folder is ready for GitHub Pages and contains two browser-ready experiences:

| Page | Purpose |
| --- | --- |
| [`docs/index.html`](docs/index.html) | Design playground with light and dark surfaces, small-size checks, and motion explanation |
| [`docs/loading.html`](docs/loading.html) | Portal-style loading simulation with page, panel, and action states |

The loading page uses a full Portal-style shell with left navigation, top search and actions, Builder mission cards, contribution skeletons, and responsive mobile behavior. It is intentionally different from the design playground so reviewers can evaluate both the visual design and a realistic product context.

## What is included

| Deliverable | Purpose |
| --- | --- |
| [`src/aperture-spinner.svg`](src/aperture-spinner.svg) | Canonical zero-dependency animated SVG |
| [`src/aperture-spinner.css`](src/aperture-spinner.css) | Reusable CSS animation rules |
| [`src/ApertureSpinner.tsx`](src/ApertureSpinner.tsx) | Optional typed React component |
| [`docs/index.html`](docs/index.html) | Responsive design playground |
| [`docs/loading.html`](docs/loading.html) | Portal-style loading-state deployment |
| [`DESIGN.md`](DESIGN.md) | Motion, color, and geometry specification |
| [`tests/validate.mjs`](tests/validate.mjs) | Structural validation suite |
| [`SUBMISSION.md`](SUBMISSION.md) | Ready-to-use Portal submission copy |
| [`START_HERE.md`](START_HERE.md) | Clean GitHub push and Pages deployment instructions |

## Concept

A camera aperture closes toward a precise center without losing its overall structure. Aperture applies that behavior to the GenLayer mark using a deliberately small motion range.

1. The exact mark is visible immediately.
2. Both outer wings close inward symmetrically.
3. The center compresses as the wings approach their tightest point.
4. The composition reaches a short lock state.
5. The mark releases back to its exact neutral geometry.
6. The cycle repeats smoothly.

The logo never spins, scatters, or disappears.

## Mission requirement mapping

| Mission requirement | Aperture implementation |
| --- | --- |
| Original animated spinner | Original close, lock, release motion built from the GenLayer mark |
| Web-ready format | Self-contained animated SVG and reusable CSS, plus optional React wrapper |
| Smooth infinite loop | `1.34s` CSS keyframe loop with mirrored easing |
| Light background support | Gradient is demonstrated and readable on white and soft neutral surfaces |
| Dark background support | The same gradient is demonstrated on dark surfaces |
| Small-size readability | Playground renders 16, 20, 24, 32, 48 and 64px |
| GenLayer identity | Exact three-polygon GenLayer mark is the animation itself |
| Mobile and desktop | One scalable SVG is used across both |
| Reduced motion | Animation stops and the exact neutral mark remains |
| Live deployment ready | `/docs` is a static GitHub Pages site with no build step |
| Code and live parity | Hosted SVG is byte-identical to the source asset and validation checks the inline deployment values |

## Motion choreography

### Close at 35%

```text
left:  rotate(4.8deg)  translate(1px,-1px)
right: rotate(-4.8deg) translate(-1px,-1px)
core:  scale(.92) rotate(3deg)
```

### Lock at 52%

```text
left:  rotate(5.4deg)  translate(1.5px,-1.5px)
right: rotate(-5.4deg) translate(-1.5px,-1.5px)
core:  scale(.89)
```

### Release at 66% to 100%

The wings relax to the intermediate state, the core expands, and then every transform returns to zero before the next cycle.

## Exact GenLayer geometry

```text
left:  183,33 20,372 179,310 122,279 183,152
right: 218,33 218,151 280,281 222,310 382,373
core:  200,195 166,265 200,283 235,266
```

The source SVG, React component, and live deployment use this same `400 x 400` coordinate system.

## Production gradient

The standalone SVG is self-contained and includes:

```svg
<linearGradient id="aperture-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
  <stop offset="0%" stop-color="#8B5CF6" />
  <stop offset="50%" stop-color="#6366F1" />
  <stop offset="100%" stop-color="#06B6D4" />
</linearGradient>
```

## Standalone SVG integration

Use [`src/aperture-spinner.svg`](src/aperture-spinner.svg) directly:

```html
<img src="aperture-spinner.svg" width="24" height="24" alt="Loading" />
```

The animation and gradient are contained in the SVG, so no JavaScript animation library is required.

## React integration

The optional wrapper defaults to the branded gradient:

```tsx
import { ApertureSpinner } from "./src/ApertureSpinner";

<ApertureSpinner size={24} />
```

A larger state:

```tsx
<ApertureSpinner size={48} duration="1.5s" label="Loading mission details" />
```

A `currentColor` fallback is also available when a consuming product requires monochrome inheritance:

```tsx
<ApertureSpinner variant="currentColor" color="currentColor" />
```

## Portal loading simulation

`docs/loading.html` uses a Portal-style shell rather than a generic floating mockup. It includes:

- Portal-style top navigation;
- left contribution navigation on desktop;
- Builder mission cards and contribution skeletons;
- responsive mobile collapse;
- light and dark modes;
- page loading mode;
- panel loading mode;
- action loading mode.

The page-level mode is the default and provides the clearest mission evidence. The same Aperture geometry and motion values are also shown in the panel and compact action states.

## Accessibility and performance

Aperture supports `prefers-reduced-motion`. In reduced-motion mode, the exact GenLayer mark remains visible without motion.

The production spinner uses three polygons, one SVG gradient, three transform animations, and CSS keyframes only. It has no canvas, WebGL, Lottie runtime, image sequence, or JavaScript animation loop.

## Validation

Run:

```bash
npm test
```

The validation suite checks exact logo geometry, mirrored transforms, core compression, gradient colors, light and dark demos, small-size coverage, live Portal states, deployment parity, reduced motion, React parity, and package cleanliness.

## Repository structure

```text
.
├── README.md
├── START_HERE.md
├── DESIGN.md
├── DEPLOYMENT.md
├── SUBMISSION.md
├── LICENSE
├── package.json
├── index.html
├── src/
│   ├── aperture-spinner.svg
│   ├── aperture-spinner.css
│   └── ApertureSpinner.tsx
├── docs/
│   ├── index.html
│   ├── loading.html
│   └── aperture-spinner.svg
└── tests/
    └── validate.mjs
```

## License

MIT. See [LICENSE](LICENSE).
