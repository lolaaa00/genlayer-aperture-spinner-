# Start Here

This folder is ready to become a clean GitHub repository from your own device.

## Important

This package contains:

- no `.git` directory;
- no commit history;
- no Git author metadata;
- no GitHub account connection;
- no repository remote.

Your own device creates the Git history only after you run `git init`.

## Recommended repository name

`genlayer-aperture-spinner`

Create a new **public** GitHub repository with that name. Keep it empty when creating it. Do not add a GitHub-generated README, license, or `.gitignore` because those files are already present here.

## Push from your computer

Open a terminal inside the unzipped project folder and run:

```bash
git init
git branch -M main
git add .
git commit -m "feat: ship Aperture GenLayer spinner"
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/genlayer-aperture-spinner.git
git push -u origin main
```

If your computer does not already have your Git identity configured, set it **locally for this repository** before committing:

```bash
git config --local user.name "YOUR NAME"
git config --local user.email "YOUR GITHUB EMAIL"
```

This writes the identity only inside the repository you create on your own device.

## Enable the live deployment

GitHub Pages can serve the included static demo directly.

1. Open the repository on GitHub.
2. Go to **Settings**.
3. Open **Pages**.
4. Under **Build and deployment**, choose `Deploy from a branch`.
5. Select branch `main`.
6. Select folder `/docs`.
7. Save.

Your URLs should then be:

```text
https://YOUR_GITHUB_USERNAME.github.io/genlayer-aperture-spinner/
https://YOUR_GITHUB_USERNAME.github.io/genlayer-aperture-spinner/loading.html
```

The first URL is the design playground. The second URL is the required live loading-state deployment.

## Before submitting to the GenLayer Portal

Run:

```bash
npm test
```

Then open both GitHub Pages URLs on desktop and mobile.

Use the ready-made Portal copy in `SUBMISSION.md`.
