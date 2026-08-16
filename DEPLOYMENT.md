# Deployment

The repository is ready for GitHub Pages with no build step.

1. Open the repository on GitHub.
2. Go to **Settings** then **Pages**.
3. Choose `Deploy from a branch`.
4. Select branch `main`.
5. Select folder `/docs`.
6. Save.

Expected URLs:

```text
https://YOUR_GITHUB_USERNAME.github.io/genlayer-aperture-spinner/
https://YOUR_GITHUB_USERNAME.github.io/genlayer-aperture-spinner/loading.html
```

The root page is the design playground. `loading.html` is the Portal-style loading-state proof.

Run `npm test` before publishing. The test suite verifies that `docs/aperture-spinner.svg` is identical to `src/aperture-spinner.svg` and that the live pages preserve the same gradient colors, geometry, and motion values.
