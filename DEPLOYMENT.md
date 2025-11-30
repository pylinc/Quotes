# Render Deployment Guide

This guide will help you deploy your Quotes application to Render.

## Prerequisites

1. A GitHub repository with your code (already done ✅)
2. A Render account (sign up at https://render.com)
3. A MongoDB database (MongoDB Atlas or any MongoDB instance)

## Step-by-Step Deployment

### 1. Prepare Your Repository

Make sure all your changes are committed and pushed to GitHub:
```bash
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

### 2. Create a MongoDB Database

If you don't have a MongoDB database yet:
- Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a free cluster
- Get your connection string (MONGO_URL)
- It should look like: `mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority`

### 3. Deploy on Render

#### ⚠️ Important: Use Manual Deployment for Free Tier

**Render Blueprint may require a paid plan. Use Manual Deployment (Option B) to use the free tier.**

#### Option A: Using Render Blueprint (May require paid plan)

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Blueprint"
3. Connect your GitHub repository
4. Render will automatically detect the `render.yaml` file
5. **Make sure to select "Free" plan** in the plan selection
6. Review the settings and click "Apply"

#### Option B: Manual Deployment (Recommended for Free Tier) ✅

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository (authorize Render to access your repos)
4. Select your repository and click "Connect"
5. Configure the service:
   - **Name**: quotes-app (or any name you prefer)
   - **Region**: Choose closest to you (e.g., Oregon, Frankfurt)
   - **Branch**: `main` (or `master`)
   - **Root Directory**: Leave empty (this means root of repo)
   - **Environment**: `Node`
   - **Build Command**: `cd Backend && npm install`
   - **Start Command**: `cd Backend && npm start`
   - **Plan**: **Select "Free"** ⚠️ (This is important - don't select Starter or Pro)
   - **Instance Type**: Free tier will be automatically selected

### 4. Set Environment Variables

In your Render service dashboard, go to "Environment" and add:

- **MONGO_URL**: Your MongoDB connection string
- **NODE_ENV**: `production`
- **PORT**: Render sets this automatically, but you can leave it or set to `10000`

If you're using email functionality, also add:
- **EMAIL_USER**: Your email address
- **EMAIL_PASS**: Your email app password

### 5. Deploy

1. **Before clicking "Create Web Service"**, make sure:
   - Plan is set to **"Free"** (not Starter or Pro)
   - All environment variables are added
   
2. Click **"Create Web Service"** and wait for the deployment to complete (5-10 minutes)

3. If you see a payment prompt:
   - Go back and check that you selected the **"Free"** plan
   - Blueprint deployments sometimes default to paid plans - use Manual Deployment instead

## Important Notes

- Render will automatically assign a URL like: `https://your-app-name.onrender.com`
- The first deployment may take a few minutes
- Free tier services on Render spin down after 15 minutes of inactivity and take ~30 seconds to wake up
- Make sure your MongoDB database allows connections from anywhere (0.0.0.0/0) or add Render's IP addresses

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure the build command is correct: `cd Backend && npm install`

### Application Crashes
- Check the logs in Render dashboard
- Verify all environment variables are set correctly
- Ensure MongoDB connection string is valid

### Static Files Not Loading
- The server is configured to serve files from `Frontend/Public`
- Check that the paths in `index.html` are relative (they should be now)

## After Deployment

1. Test your API: `https://your-app.onrender.com/api/v1/getquote`
2. Test your frontend: `https://your-app.onrender.com`
3. Update any hardcoded URLs in your code if needed

## Environment Variables Reference

Create a `.env` file locally (not committed to git) with:
```
MONGO_URL=your_mongodb_connection_string
PORT=2000
NODE_ENV=development
```

**Note**: Never commit `.env` files to git. They are already in `.gitignore`.

