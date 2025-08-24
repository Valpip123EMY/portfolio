# Portfolio.io - Valmik Nahata

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Showcasing Valmik Nahata's work as a Data Science Student & ML Researcher at UC San Diego.

## 🚀 Features

- **Modern Stack**: Built with Next.js 14 App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Theme**: Automatic theme switching with system preference support
- **Performance Optimized**: Static generation with optimized images and fonts
- **Interactive Animations**: Smooth animations with Framer Motion
- **Accessibility**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Valpip123EMY/portfolio.io.git
   cd portfolio.io
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## 🔧 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub** (if not already done)

2. **Deploy with Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/in with your GitHub account
   - Click "New Project"
   - Import your `portfolio.io` repository
   - Vercel will automatically detect the Next.js configuration
   - Click "Deploy"

3. **Custom Domain** (Optional):
   - In your Vercel dashboard, go to your project settings
   - Add your custom domain under "Domains"
   - Update your DNS records as instructed

### Deploy to Other Platforms

#### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy

#### Railway/Render
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set start command: `npm start`
4. Deploy

## 🌐 Environment Variables

Create a `.env.local` file in the root directory for any environment-specific configurations:

```env
# Add any environment variables here
# Example:
# NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

## 📁 Project Structure

```
portfolio.io/
├── src/
│   ├── app/                  # Next.js app router pages
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # React components
│   │   ├── layout/         # Layout components
│   │   ├── pages/          # Page components
│   │   └── sections/       # Section components
│   ├── lib/                # Utility functions
│   └── types/              # TypeScript type definitions
├── public/                 # Static assets
├── package.json           # Dependencies and scripts
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── vercel.json            # Vercel deployment configuration
```

## 🎨 Customization

### Updating Content
- Edit `src/components/sections/Hero.tsx` for the hero section
- Update `src/components/pages/ProjectsPage.tsx` for projects
- Modify `src/components/pages/AboutPage.tsx` for about information
- Change `src/components/pages/ContactPage.tsx` for contact details

### Styling
- Global styles: `src/app/globals.css`
- Tailwind configuration: `tailwind.config.js`
- Component-specific styles are inline using Tailwind classes

### Themes
- Theme provider: `src/components/theme-provider.tsx`
- Default theme set to "dark" in `src/app/layout.tsx`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Valmik Nahata**
- UC San Diego Data Science Student
- Machine Learning Researcher
- Portfolio: [valmiknahata.com](https://valmiknahata.com)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Valpip123EMY/portfolio.io/issues).

## ⭐ Show your support

Give a ⭐️ if this project helped you!