# Quick Vercel Deployment Guide

## Option 1: Via Dashboard (Easiest)

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select `Vandy232301/Ze23LandingPage`
4. Click "Deploy" (settings auto-detected)
5. Done! 🎉

## Option 2: Via CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# For production deployment
vercel --prod
```

## After Deployment

Your site will be live at:
- `https://ze23-landing-page-xxxxx.vercel.app` (auto-generated)
- Or your custom domain (if configured)

## Adding Custom Domain

1. Go to Project Settings → Domains
2. Add your domain (e.g., `ze23.com`)
3. Follow DNS instructions:
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Or A record: `@` → Vercel IP addresses
4. SSL certificate is automatic!

## Automatic Deployments

- Every push to `main` branch = automatic deployment
- Preview deployments for pull requests
- Zero configuration needed!
