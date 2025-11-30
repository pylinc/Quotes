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

#### Option A: Using Render Blueprint (Recommended)

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Blueprint"
3. Connect your GitHub repository
4. Render will automatically detect the `render.yaml` file
5. Review the settings and click "Apply"

#### Option B: Manual Deployment

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: quotes-app (or any name you prefer)
   - **Environment**: Node
   - **Build Command**: `cd Backend && npm install`
   - **Start Command**: `cd Backend && npm start`
   - **Root Directory**: Leave empty (or set to root)

### 4. Set Environment Variables

In your Render service dashboard, go to "Environment" and add:

- **MONGO_URL**: Your MongoDB connection string
- **NODE_ENV**: `production`
- **PORT**: Render sets this automatically, but you can leave it or set to `10000`

If you're using email functionality, also add:
- **EMAIL_USER**: Your email address
- **EMAIL_PASS**: Your email app password

### 5. Deploy

Click "Create Web Service" or "Apply" and wait for the deployment to complete.

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

