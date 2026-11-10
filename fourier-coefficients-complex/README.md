# Fourier Coefficients: Complex with Sound

Editable copy of the MIT Mathlet at
https://mathlets.org/mathlets/fourier-coefficients-complex/
(the applet itself is `https://mathlets.org/javascript/build/fourierCoefficientsComplex.html`).

**Original authors: © 2008 H. Miller and J.-M. Claus, [MIT Mathlets](https://mathlets.org/).**
All design, mathematics and original code are theirs; this copy only makes the
code readable and changes how the sound is generated (see below).
Licensed under CC BY-NC-SA 3.0, like the original site content — see [../LICENSE.md](../LICENSE.md).

- `original/` – the files exactly as downloaded from mathlets.org (minified), for reference.
- `src/` – the readable, working version. Edit this one.

## Running it

It uses RequireJS, so it must be served over HTTP (not opened as a file):

```bash
cd fourier-coefficients-complex/src && python3 -m http.server 8777
```

Then open http://localhost:8777/fourierCoefficientsComplex.html

(Run the command from the root of the repo.)

## Where things are

| File | What it does |
| --- | --- |
| `src/fourierCoefficientsComplex.html` | Page shell + help text; loads `lib/common` then the app |
| `src/js/app/fourierCoefficientsComplex.js` | **The mathlet.** Hand-rewritten with real names and comments |
| `src/js/lib/fourieraudio.js` | Web Audio wrapper that plays a waveform from Fourier coefficients. Hand-rewritten |
| `src/js/lib/common.js` | RequireJS config mapping module names (`graph`, `vslider`, …) to files |
| `src/js/lib/*.js`, `src/js/lib/shapes/*.js` | Shared SVG widget library (graphs, sliders, text, shapes). Split out of the minified `common.js` and auto-formatted; local variable names are still the minifier's |
| `src/js/vendor/` | Third-party libraries (RequireJS, Underscore, KaTeX, …), unchanged |

## The sound fix

The tool plots `g(t) = Re(e^{-iφ} f(t)) = Σ |c_n| cos(2πnνt + Arg(c_n) − φ)`.

The original `updateSound` passed Web Audio only each harmonic's amplitude, with
every phase set to zero, so the sound ignored `Arg(c_n)` and `φ`. It also let Web
Audio normalize the wave by its peak. Now `updateSound` combines the `n` and `−n`
terms into exact cosine/sine coefficients, so the sound is exactly the plotted
`g(t)`. It also does its own normalization so that phase changes don't turn into
volume changes. See the comment above `updateSound` in the app file.
