# Deployment Guide for ZE23 Landing Page

This guide covers the best ways to deploy your React/Vite website to a custom domain.

## 🚀 Option 1: Vercel (Recommended - Easiest)

### Why Vercel?
- ✅ Free tier with generous limits
- ✅ Automatic deployments from GitHub
- ✅ Built-in CDN for fast global performance
- ✅ Easy custom domain setup
- ✅ SSL certificates included
- ✅ Perfect for React/Vite apps

### Steps:

1. **Sign up/Login to Vercel**
   - Go to https://vercel.com
   - Sign up with your GitHub account

2. **Import Your Project**
   - Click "Add New Project"
   - Select your `Vandy232301/Ze23LandingPage` repository
   - Vercel will auto-detect Vite settings

3. **Configure Build Settings** (usually auto-detected):
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)

5. **Add Custom Domain**
   - Go to Project Settings → Domains
   - Add your domain (e.g., `ze23.com` or `www.ze23.com`)
   - Follow DNS configuration instructions:
     - Add a CNAME record pointing to Vercel's provided URL
     - Or add an A record with Vercel's IP addresses
   - SSL certificate is automatically provisioned

6. **Automatic Deployments**
   - Every push to `main` branch = automatic deployment
   - Preview deployments for pull requests

---

## 🌐 Option 2: Netlify

### Steps:

1. **Sign up at https://netlify.com** (use GitHub)

2. **Add New Site → Import from Git**
   - Select your repository

3. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Add Custom Domain**
   - Site Settings → Domain Management
   - Add your domain
   - Configure DNS as instructed

---

## 📦 Option 3: Cloudflare Pages

### Steps:

1. **Sign up at https://pages.cloudflare.com**

2. **Connect GitHub** and select repository

3. **Build Settings**:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`

4. **Add Custom Domain**
   - Custom domains → Add domain
   - Update DNS records as shown

---

## 🔧 Option 4: Traditional VPS/Hosting

### Requirements:
- Node.js 18+ installed
- Nginx or Apache web server

### Steps:

1. **Build the project locally**:
   ```bash
   npm install
   npm run build
   ```

2. **Upload `dist` folder** to your server

3. **Configure Nginx** (example):
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;
       root /var/www/ze23/dist;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

4. **Set up SSL** with Let's Encrypt:
   ```bash
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```

---

## 📝 Important Notes

### For React Router (SPA):
All hosting providers need to redirect all routes to `index.html` for client-side routing to work. This is already configured in `vercel.json`.

### Environment Variables:
If you need environment variables:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment Variables

### Custom Domain DNS Setup:

**For root domain (ze23.com):**
- Type: A record
- Value: Vercel/Netlify IP addresses (provided in dashboard)

**For www subdomain (www.ze23.com):**
- Type: CNAME
- Value: Provided URL (e.g., `cname.vercel-dns.com`)

---

## 🎯 Quick Start (Vercel - Recommended)

1. Go to https://vercel.com/new
2. Import `Vandy232301/Ze23LandingPage`
3. Click Deploy
4. Add your domain in Settings → Domains
5. Update DNS at your domain registrar
6. Done! 🎉

---

## 💰 Cost Comparison

| Platform | Free Tier | Custom Domain | SSL |
|----------|-----------|---------------|-----|
| Vercel | ✅ Generous | ✅ Free | ✅ Free |
| Netlify | ✅ Good | ✅ Free | ✅ Free |
| Cloudflare Pages | ✅ Unlimited | ✅ Free | ✅ Free |
| VPS | ❌ Paid | ✅ | Manual setup |

---

## 🚨 Troubleshooting

### 404 errors on routes:
- Ensure redirect rules are set (already in `vercel.json`)
- For other platforms, add redirect to `index.html`

### Build fails:
- Check Node.js version (should be 18+)
- Ensure all dependencies are in `package.json`

### Domain not working:
- Wait 24-48 hours for DNS propagation
- Check DNS records are correct
- Verify SSL certificate is issued
