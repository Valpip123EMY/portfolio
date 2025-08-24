# Valmik Nahata - Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing data science projects, research work, and professional experience.

## 🚀 Live Demo

The portfolio is deployed and live at: [Your Domain Here]

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Google Fonts (Inter, Inter Tight, JetBrains Mono)
- **Deployment**: Vercel (recommended) or any static hosting platform

## 📁 Project Structure

```
portfolio.io/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── resume/            # Resume page
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable UI components
│   │   ├── layout/           # Layout components (Header, Footer)
│   │   ├── pages/            # Page-specific components
│   │   ├── sections/         # Section components (Hero, Projects, etc.)
│   │   └── theme-provider.tsx # Dark/Light theme provider
│   └── lib/
│       └── utils.ts          # Utility functions
├── .github/workflows/         # GitHub Actions for deployment
├── out/                      # Build output (generated)
└── Configuration files...
```

## 🚀 Quick Deployment

### Option 1: Deploy to Vercel (Recommended)

1. **Fork this repository**
2. **Sign up for Vercel** at [vercel.com](https://vercel.com)
3. **Import your forked repository** in Vercel dashboard
4. **Deploy**: Vercel will automatically build and deploy your site
5. **Custom domain** (optional): Add your custom domain in Vercel settings

### Option 2: Deploy to Netlify

1. **Fork this repository**
2. **Sign up for Netlify** at [netlify.com](https://netlify.com)
3. **Connect your repository** in Netlify dashboard
4. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `out`
5. **Deploy**: Netlify will build and deploy your site

### Option 3: Manual Deployment

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Valpip123EMY/portfolio.io.git
   cd portfolio.io
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build the project**:
   ```bash
   npm run build
   ```

4. **Deploy the `out` folder** to any static hosting service (GitHub Pages, AWS S3, etc.)

## 🛠 Development

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Valpip123EMY/portfolio.io.git
   cd portfolio.io
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Personal Information

Update your personal information in:
- `src/app/layout.tsx` - Site metadata
- `src/components/sections/Hero.tsx` - Hero section content
- `src/components/pages/AboutPage.tsx` - About page content
- `src/components/pages/ContactPage.tsx` - Contact information

### Projects

Add or modify projects in:
- `src/components/pages/ProjectsPage.tsx` - Project data and components

### Styling

- `src/app/globals.css` - Global styles and CSS variables
- `tailwind.config.js` - Tailwind CSS configuration
- Individual component files for component-specific styles

## 🌐 Deployment Configuration

### Vercel Deployment

The project includes:
- `vercel.json` - Vercel configuration
- `.github/workflows/deploy.yml` - GitHub Actions for automatic deployment

To set up automatic deployment:
1. Get your Vercel token from [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Add these secrets to your GitHub repository:
   - `VERCEL_TOKEN` - Your Vercel token
   - `ORG_ID` - Your Vercel organization ID
   - `PROJECT_ID` - Your Vercel project ID

### Environment Variables

For production deployment, you may want to add:
- Google Analytics tracking ID
- Contact form backend URL
- Any API keys for external services

## 📱 Features

- ✅ Responsive design (mobile-first)
- ✅ Dark/Light theme toggle
- ✅ Smooth scrolling navigation
- ✅ Animated components with Framer Motion
- ✅ SEO optimized with Next.js metadata
- ✅ Fast loading with static generation
- ✅ Professional typography with Google Fonts
- ✅ Accessible design with semantic HTML

## 🔧 Performance

- Static site generation for optimal performance
- Image optimization (when images are added)
- Font optimization with display: swap
- Lazy loading for components
- Minimal JavaScript bundle size

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support or questions, please open an issue in the GitHub repository or contact [your email].

---

Built with ❤️ using Next.js and deployed on Vercel