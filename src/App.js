import React, { useCallback, useMemo, useState } from 'react';
import styles from './App.module.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = useMemo(
    () => [
      { id: 'hero', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'experience', label: 'Experience' },
      { id: 'contact', label: 'Contact' }
    ],
    []
  );

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  }, []);

  const projectData = useMemo(
    () => [
      {
        id: 1,
        title: 'Realtime Collaboration Board',
        description:
          'A collaborative whiteboard for distributed teams with presence, comments, and optimistic updates.',
        tags: ['React', 'TypeScript', 'WebSockets'],
        role: 'Lead Frontend Engineer'
      },
      {
        id: 2,
        title: 'Design System & Component Library',
        description:
          'A reusable design system powering multiple products with themed React components and tokens.',
        tags: ['React', 'Storybook', 'Accessibility'],
        role: 'UI Engineer'
      },
      {
        id: 3,
        title: 'Developer Analytics Dashboard',
        description:
          'Interactive dashboards for engineering metrics with custom visualizations and saved views.',
        tags: ['React', 'D3.js', 'Node.js'],
        role: 'Full‑stack Engineer'
      }
    ],
    []
  );

  return (
    <div className="app-root">
      <Navbar
        sections={sections}
        activeSection={activeSection}
        onNavClick={scrollToSection}
      />
      <main className="app-shell">
        <section id="hero" className="section fadeInUp">
          <Hero onViewProjects={() => scrollToSection('projects')} />
        </section>

        <section id="about" className="section">
          <About />
        </section>

        <section id="skills" className="section">
          <Skills />
        </section>

        <section id="projects" className="section">
          <Projects
            projects={projectData}
            onProjectFocus={(id) => setActiveSection('projects')}
          />
        </section>

        <section id="experience" className="section">
          <Experience />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
      <footer className={styles.footer}>
        <span className="muted">
          © {new Date().getFullYear()} Jane Doe. Crafted with React.
        </span>
      </footer>
    </div>
  );
};

export default App;


