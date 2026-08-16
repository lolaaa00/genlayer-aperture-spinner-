# Aperture Motion Specification

## Core idea

Aperture keeps the GenLayer mark assembled throughout the loading loop. The two outer wings close inward by a small mirrored angle while the center compresses. At peak closure the mark reaches a brief lock state, then releases to its untouched geometry.

## Choreography

### 0% to 35%: close

- left: `rotate(4.8deg) translate(1px,-1px)`
- right: `rotate(-4.8deg) translate(-1px,-1px)`
- core: `scale(.92) rotate(3deg)`

### 35% to 52%: lock

- left: `rotate(5.4deg) translate(1.5px,-1.5px)`
- right: `rotate(-5.4deg) translate(-1.5px,-1.5px)`
- core: `scale(.89)`

### 52% to 66%: release preparation

The wings return to the 4.8 degree state and the core expands to `.92` while counter-rotating by 3 degrees.

### 66% to 100%: neutral

All transforms return to zero.

## Production parameters

| Parameter | Value |
| --- | --- |
| ViewBox | `0 0 400 400` |
| Default duration | `1.34s` |
| Easing | `cubic-bezier(.65,0,.35,1)` |
| Purple | `#8B5CF6` |
| Mid | `#6366F1` |
| Blue | `#06B6D4` |
| Gradient | 135 degree purple to indigo to cyan |
| Runtime | CSS keyframes only |
| JavaScript required | No |
| External animation dependency | No |
| Reduced motion | Exact static GenLayer mark |
| Demonstrated sizes | 16, 20, 24, 32, 48, 64px |

## Exact GenLayer geometry

```text
left:  183,33 20,372 179,310 122,279 183,152
right: 218,33 218,151 280,281 222,310 382,373
core:  200,195 166,265 200,283 235,266
```

## Deployment parity

`docs/aperture-spinner.svg` is a byte-for-byte copy of the production SVG. The live pages inline the same logo points, gradient colors, and keyframe values so they remain reliable when opened directly on mobile browsers.
