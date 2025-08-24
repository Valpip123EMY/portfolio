import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { ProjectsPage } from '../components/pages/ProjectsPage';
import { AboutPage } from '../components/pages/AboutPage';
import { ContactPage } from '../components/pages/ContactPage';

export const metadata: Metadata = {
  title: 'Valmik Nahata | Data Science Student & ML Researcher',
  description: 'UC San Diego Data Science student passionate about machine learning, research, and building impactful solutions.',
  openGraph: {
    title: 'Valmik Nahata | Data Science Student & ML Researcher',
    description: 'UC San Diego Data Science student passionate about machine learning and research',
  },
};

export default function HomePage() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Hero Section */}
      <section id="hero" className="scroll-mt-4">
        <Hero />
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-4">
        <ProjectsPage />
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-4">
        <AboutPage />
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-4">
        <ContactPage />
      </section>
    </div>
  );
}
