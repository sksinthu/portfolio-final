# Deployment Guide

Your portfolio is fully dynamic and uses a database (MongoDB). To deploy it successfully on Vercel, you need to configure your environment variables.

## Step 1: Get a Cloud Database (MongoDB Atlas)

Since you are deploying to the cloud (Vercel), you cannot use `localhost`. You need a cloud-hosted database.

1.  Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and sign up (it's free).
2.  Create a **New Cluster** (select the free tier).
3.  Go to **Database Access** -> create a new user (e.g., `admin`) and password.
4.  Go to **Network Access** -> click **Add IP Address** -> select **Allow Access from Anywhere** (`0.0.0.0/0`).
5.  Go to **Database** -> click **Connect** -> **Drivers**.
6.  Copy your connection string. It will look like this:
    `mongodb+srv://admin:<password>@cluster0.abcde.mongodb.net/?retryWrites=true&w=majority`
7.  Replace `<password>` with the password you created in step 3.

## Step 2: Configure Vercel

1.  Go to your [Vercel Dashboard](https://vercel.com/dashboard).
2.  Select your project (`portfolio-final` or similar).
3.  Go to **Settings** -> **Environment Variables**.
4.  Add the following variables:

| Key | Value |
| :--- | :--- |
| `MONGODB_URI` | Your MongoDB Atlas connection string (from Step 1) |
| `NEXTAUTH_SECRET` | A random strong string (e.g. `my-super-secret-key-123`) |
| `NEXTAUTH_URL` | Your Vercel domain (e.g., `https://my-portfolio.vercel.app`) |
| `ADMIN_USER` | Your desired admin username (e.g., `admin`) |
| `ADMIN_PASSWORD` | Your desired admin password |

5.  **Save** the variables.

## Step 3: Redeploy

1.  Go to the **Deployments** tab in Vercel.
2.  Click the three dots (`...`) next to your failed deployment -> **Redeploy**.
3.  It should now build successfully!
