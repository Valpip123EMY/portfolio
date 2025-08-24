import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Analytics } from '@/components/Analytics';

// Font imports are commented out for build compatibility
// Fonts will be loaded via CSS instead for better compatibility
// import { Inter, Inter_Tight, JetBrains_Mono } from 'next/font/google';

// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-inter',
//   display: 'swap',
// });

// const interTight = Inter_Tight({
//   subsets: ['latin'],
//   variable: '--font-inter-tight',
//   display: 'swap',
// });

// const jetbrainsMono = JetBrains_Mono({
//   subsets: ['latin'],
//   variable: '--font-jetbrains-mono',
//   display: 'swap',
// });

export const metadata: Metadata = {
  title: {
    default: 'Valmik Nahata | Data Science Student & ML Researcher',
    template: '%s | Valmik Nahata',
  },
  description: 'UC San Diego Data Science student passionate about machine learning, research, and building impactful solutions.',
  keywords: [
    'data science',
    'machine learning',
    'UC San Diego',
    'student portfolio',
    'research',
    'SLMs',
    'LLMs',
    'RAG',
    'Python',
    'academic projects',
  ],
  authors: [{ name: 'Valmik Nahata' }],
  creator: 'Valmik Nahata',
  publisher: 'Valmik Nahata',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://valmiknahata.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://valmiknahata.com',
    title: 'Valmik Nahata | CS × Fintech Engineer',
    description: 'Building reliable ML & data systems for finance',
    siteName: 'Valmik Nahata Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Valmik Nahata - CS × Fintech Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valmik Nahata | CS × Fintech Engineer',
    description: 'Building reliable ML & data systems for finance',
    images: ['/twitter-image.png'],
    creator: '@valmiknahata',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className="font-sans antialiased"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="relative min-h-screen overflow-x-hidden">
            {/* Hero background (gradient, grid, floating balls) for all sections */}
            <div className="fixed inset-0 z-0">
              {/* Main gradient background */}
              <div className="absolute inset-0 bg-white dark:bg-gradient-to-br dark:from-indigo-950 dark:via-slate-950 dark:to-indigo-900" />
              
              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] dark:bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:32px_32px]" />
              
              {/* Floating shimmer balls */}
              <div className="floating-balls">
                <span className="floating-ball" style={{left:'6%',top:'8%',width:'260px',height:'260px','--ball-color':'rgba(220,38,38,0.10)',animationDuration:'22s',animationDelay:'0s'} as any} />
                <span className="floating-ball" style={{left:'78%',top:'4%',width:'180px',height:'180px','--ball-color':'rgba(99,102,241,0.10)',animationDuration:'18s',animationDelay:'3s'} as any} />
                <span className="floating-ball" style={{left:'28%',top:'56%',width:'320px',height:'320px','--ball-color':'rgba(250,204,21,0.06)',animationDuration:'28s',animationDelay:'6s'} as any} />
                <span className="floating-ball" style={{left:'62%',top:'40%',width:'140px',height:'140px','--ball-color':'rgba(20,184,166,0.08)',animationDuration:'16s',animationDelay:'2s'} as any} />
                <span className="floating-ball" style={{left:'45%',top:'12%',width:'100px',height:'100px','--ball-color':'rgba(236,72,153,0.07)',animationDuration:'14s',animationDelay:'1s'} as any} />
                <span className="floating-ball" style={{left:'10%',top:'72%',width:'200px',height:'200px','--ball-color':'rgba(99,102,241,0.06)',animationDuration:'20s',animationDelay:'4s'} as any} />
                <span className="floating-ball" style={{left:'84%',top:'74%',width:'260px',height:'260px','--ball-color':'rgba(220,38,38,0.06)',animationDuration:'26s',animationDelay:'8s'} as any} />
              </div>
            </div>
            
            <div className="relative z-10">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
