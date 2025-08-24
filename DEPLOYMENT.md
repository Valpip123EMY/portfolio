# 🚀 Deployment Guide for Portfolio.io

This guide provides step-by-step instructions for deploying your portfolio to various platforms.

## Prerequisites

Before deploying, ensure you have:
- ✅ Node.js 18+ installed
- ✅ npm or yarn package manager
- ✅ Git repository set up
- ✅ All code committed and pushed to GitHub

## Platform-Specific Deployment

### 1. 🟢 Vercel (Recommended - Zero Config)

Vercel is the optimal choice for Next.js applications with zero configuration needed.

#### Option A: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project root
vercel

# For production deployment
vercel --prod
```

#### Option B: Deploy via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Sign up/in with your GitHub account
3. Click "New Project"
4. Import your `portfolio.io` repository
5. Vercel auto-detects Next.js configuration
6. Click "Deploy"
7. Your site will be live at `https://your-project-name.vercel.app`

#### Custom Domain Setup
1. In Vercel dashboard → Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate is automatically provisioned

### 2. 🟡 Netlify

#### Option A: Git Integration
1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Deploy

#### Option B: Manual Deploy
1. Run `npm run build` locally
2. Drag and drop the `.next` folder to Netlify

### 3. 🔵 Railway

Railway provides simple deployment for Node.js applications.

1. Go to [railway.app](https://railway.app)
2. Connect your GitHub repository
3. Railway auto-detects Next.js
4. Configure environment variables if needed
5. Deploy

### 4. 🟠 Render

1. Go to [render.com](https://render.com)
2. Connect your GitHub repository
3. Configure:
   - Build command: `npm run build`
   - Start command: `npm start`
4. Deploy

### 5. 🐳 Docker Deployment

For containerized deployment on any platform supporting Docker:

#### Build Docker Image
```bash
# Build the image
docker build -t portfolio-app .

# Run locally
docker run -p 3000:3000 portfolio-app
```

#### Docker Compose
```bash
# Run with docker-compose
docker-compose up

# For development
docker-compose --profile dev up
```

### 6. 🖥️ VPS/Dedicated Server

For deployment on your own server:

#### Prerequisites
- Ubuntu/Debian server with sudo access
- Node.js 18+ installed
- PM2 for process management

#### Steps
```bash
# Clone repository
git clone https://github.com/Valpip123EMY/portfolio.io.git
cd portfolio.io

# Install dependencies
npm install

# Build the application
npm run build

# Install PM2 globally
npm install -g pm2

# Start with PM2
pm2 start npm --name "portfolio" -- start

# Save PM2 configuration
pm2 save
pm2 startup

# Set up Nginx reverse proxy (optional)
sudo apt install nginx
```

#### Nginx Configuration (optional)
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Environment Variables

Create `.env.local` for environment-specific configurations:

```env
# Analytics (optional)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_ga_id

# Contact form (if using external service)
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=your_endpoint

# Any other environment variables
```

## Performance Optimization

### Recommended Settings

1. **Enable Static Export** (for static hosting):
   ```javascript
   // next.config.js
   module.exports = {
     output: 'export',
     trailingSlash: true,
     images: { unoptimized: true }
   }
   ```

2. **Enable CDN** for static assets
3. **Configure caching headers** in your hosting platform
4. **Use image optimization** services

## Monitoring and Analytics

### Add Google Analytics
1. Get your GA4 tracking ID
2. Add to environment variables
3. Update `src/components/Analytics.tsx`

### Error Monitoring
Consider adding:
- Sentry for error tracking
- LogRocket for session replay
- Hotjar for user behavior analytics

## Troubleshooting

### Common Issues

1. **Build Fails**:
   ```bash
   # Clear Next.js cache
   rm -rf .next
   npm run build
   ```

2. **Font Loading Issues**:
   - Fonts are set to system fallbacks for this build
   - For production, restore Google Fonts in `layout.tsx`

3. **Image Optimization**:
   - Ensure images are in `public/` directory
   - Configure `next.config.js` for external images

4. **Environment Variables**:
   - Prefix client-side variables with `NEXT_PUBLIC_`
   - Don't commit `.env.local` to git

### Getting Help

- Check [Next.js documentation](https://nextjs.org/docs)
- Review platform-specific deployment guides
- Check the repository's issues page

## Deployment Checklist

Before going live:

- [ ] All content is updated and reviewed
- [ ] Links are working correctly
- [ ] Forms are functional
- [ ] Images are optimized and loading
- [ ] SEO metadata is configured
- [ ] Analytics is set up
- [ ] Custom domain is configured (if applicable)
- [ ] SSL certificate is active
- [ ] Site is tested on multiple devices
- [ ] Performance is optimized (Lighthouse score)

## Continuous Deployment

The repository includes GitHub Actions workflow for automatic deployment:

1. Push to `main` branch triggers deployment
2. Runs tests and builds automatically
3. Deploys to production if tests pass

Configure secrets in GitHub repository settings:
- `VERCEL_TOKEN`
- `ORG_ID`
- `PROJECT_ID`

---

🎉 **Congratulations!** Your portfolio is now deployed and accessible to the world!