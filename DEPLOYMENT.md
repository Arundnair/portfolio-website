# GitHub Pages Deployment Setup

This repository is now configured to automatically deploy to GitHub Pages.

## What was changed:

1. **vite.config.ts**: Added `base: '/portfolio-website/'` to ensure assets load correctly from the GitHub Pages subdirectory.

2. **index.html**: Added `<script type="module" src="/index.tsx"></script>` to load the React application entry point.

3. **.github/workflows/deploy.yml**: Created a GitHub Actions workflow that:
   - Triggers on pushes to the `main` branch
   - Can be manually triggered via workflow_dispatch
   - Builds the application using `npm run build`
   - Deploys the `dist` folder to GitHub Pages

## Next Steps:

### 1. Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub: https://github.com/Arundnair/portfolio-website
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Build and deployment", set:
   - **Source**: GitHub Actions
5. Save the settings

### 2. Set up the GEMINI_API_KEY Secret (if needed)

If your application uses the Gemini API:

1. Go to repository Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Name: `GEMINI_API_KEY`
4. Value: Your Gemini API key
5. Click "Add secret"

**Note**: API keys in client-side code are visible to users. For production applications, consider using a backend API to protect sensitive credentials.

### 3. Merge this PR to the main branch

Once this PR is merged to the `main` branch, the workflow will automatically:
- Build your portfolio website
- Deploy it to GitHub Pages
- Make it available at: https://arundnair.github.io/portfolio-website/

### 4. Monitor the Deployment

After merging:
1. Go to the "Actions" tab in your repository
2. Watch the "Deploy to GitHub Pages" workflow run
3. Once complete, your site will be live!

## Manual Deployment

You can also trigger a deployment manually:
1. Go to Actions tab
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"
4. Select the branch and click "Run workflow"

## Local Development

The configuration still supports local development:
```bash
npm install
npm run dev
```

The site will be available at http://localhost:3000

## Troubleshooting

- **404 errors on assets**: Verify the `base` path in `vite.config.ts` matches your repository name
- **Workflow fails**: Check that GitHub Pages is enabled in repository settings with source set to "GitHub Actions"
- **API errors**: Ensure `GEMINI_API_KEY` is set as a repository secret if your app uses it
