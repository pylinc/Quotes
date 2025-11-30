# GitHub Pages Setup Guide

## Problem
GitHub Pages was showing your README.md instead of your website because the frontend files were in `Frontend/Public/` directory, and GitHub Pages looks for files in the root or `/docs` folder.

## Solution
I've created a `docs` folder with your frontend files. Now you need to:

### Step 1: Update the API URL
1. Open `docs/script.js`
2. Find this line:
   ```javascript
   const API_URL = "https://your-app-name.onrender.com/api/v1/getquote";
   ```
3. Replace `your-app-name` with your actual Render service name
   - For example, if your Render URL is `https://quotes-app.onrender.com`, change it to:
   ```javascript
   const API_URL = "https://quotes-app.onrender.com/api/v1/getquote";
   ```

### Step 2: Commit and Push Changes
```bash
git add docs/
git add GITHUB_PAGES_SETUP.md
git commit -m "Add docs folder for GitHub Pages"
git push origin main
```

### Step 3: Configure GitHub Pages
1. Go to your GitHub repository: `https://github.com/pylinc/Quotes`
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - **Branch**: `main` (or `master`)
   - **Folder**: `/docs`
5. Click **Save**

### Step 4: Wait for Deployment
- GitHub Pages will take 1-2 minutes to build and deploy
- Your site will be available at: `https://pylinc.github.io/Quotes/`
- You can check the deployment status in the **Actions** tab

## Important Notes

1. **CORS Issues**: If you get CORS errors when fetching from the API, make sure your Render backend has CORS enabled (it should already be enabled in your `server.js`).

2. **API URL**: Make sure the API URL in `docs/script.js` matches your Render deployment URL exactly.

3. **Custom Domain** (Optional): You can add a custom domain in GitHub Pages settings if you have one.

## Troubleshooting

### Still seeing README?
- Make sure you selected `/docs` as the source folder in GitHub Pages settings
- Wait a few minutes for GitHub to rebuild
- Clear your browser cache

### API not working?
- Check the browser console (F12) for errors
- Verify the API URL in `docs/script.js` is correct
- Test the API directly: `https://your-app.onrender.com/api/v1/getquote`
- Check Render logs to see if requests are reaching the backend

### Files not updating?
- Make sure you committed and pushed the changes
- GitHub Pages rebuilds on every push to the main branch
- Check the Actions tab to see if deployment succeeded

