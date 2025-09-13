# GitHub Pages Deployment Instructions

1. Make sure your project is committed and pushed to a GitHub repository.
2. Add the following to your `package.json` (replace with your actual username and repo name):

```
  "homepage": "https://<your-username>.github.io/<repo-name>",
```

3. Install the `gh-pages` package:

```
npm install --save-dev gh-pages
```

4. Add these scripts to your `package.json`:

```
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
```

5. Update your `vite.config.js` to set the correct base path:

```
  base: '/<repo-name>/',
```

6. Deploy your site:

```
npm run deploy
```

7. Go to your repository settings on GitHub, enable GitHub Pages, and set the branch to `gh-pages`.

Your site will be live at `https://<your-username>.github.io/<repo-name>/`.
