# Valmik Nahata - Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing data science projects, research work, and professional experience.

## 🚀 Live Demo

The portfolio is deployed and live at: [https://valpip123emy.github.io/portfolio.github.io/](https://valpip123emy.github.io/portfolio.github.io/)

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Google Fonts (Inter, Inter Tight, JetBrains Mono)
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
portfolio.github.io/
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

### GitHub Pages Deployment (Recommended)

This repository is configured for automatic deployment to GitHub Pages:

1. **Fork this repository** to your GitHub account
2. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Source: "GitHub Actions"
3. **Push changes** to the main branch - deployment will happen automatically
4. **Access your site** at `https://yourusername.github.io/portfolio.github.io/`

The GitHub Actions workflow will automatically:
- Build the Next.js project
- Generate static files
- Deploy to GitHub Pages
- Update your live site

### Manual Deployment

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Valpip123EMY/portfolio.github.io.git
   cd portfolio.github.io
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build the project**:
   ```bash
   npm run build
   ```

4. **Deploy the `out` folder** to any static hosting service (GitHub Pages, Netlify, AWS S3, etc.)

## 🛠 Development

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Valpip123EMY/portfolio.github.io.git
   cd portfolio.github.io
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

### GitHub Pages Setup

The project includes:
- `.github/workflows/nextjs.yml` - GitHub Actions workflow for automatic deployment
- `next.config.js` - Next.js configuration for static export

The deployment is automatically configured and requires no additional setup. Just push to the main branch and GitHub Pages will build and deploy your site.

### Environment Variables

For production deployment, you may want to add environment variables in your GitHub repository settings:
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

Built with ❤️ using Next.js and deployed on GitHub Pages