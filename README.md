# Mathlets (editable copies)

Readable, editable versions of [MIT Mathlets](https://mathlets.org/mathlets/),
rebuilt from the minified builds published on mathlets.org.
Each mathlet lives in its own folder:

| Mathlet | Folder |
| --- | --- |
| [Fourier Coefficients: Complex with Sound](https://mathlets.org/mathlets/fourier-coefficients-complex/) | [`fourier-coefficients-complex/`](fourier-coefficients-complex/) |

Inside each folder:

- `original/` — the files exactly as downloaded from mathlets.org (minified), for reference.
- `src/` — the readable, working version. Edit this one.
- `README.md` — how to run it, where things are, and what was changed.

## Credits

The mathlets are the work of their original authors at
[MIT Mathlets](https://mathlets.org/), a project led by H. Miller at MIT.
This repository only reorganizes, comments and lightly modifies their code;
all design, mathematics and original code are theirs.

| Mathlet | Original authors |
| --- | --- |
| Fourier Coefficients: Complex with Sound | © 2008 H. Miller and J.-M. Claus |

Site: Copyright © 2009–2015 H. Miller, [mathlets.org](https://mathlets.org/).

## License

mathlets.org states that, except where otherwise noted, its content is licensed under
[Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported](https://creativecommons.org/licenses/by-nc-sa/3.0/)
(CC BY-NC-SA 3.0). The changes in this repository are offered under the same license.
See [LICENSE.md](LICENSE.md).

Third-party libraries in each `src/js/vendor/` folder (RequireJS, Underscore,
KaTeX, PEP, a11y, JSChannel) keep their own licenses, noted in their file headers.
