import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ sections, activeSection, onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id) => {
    onNavClick(id);
    setIsOpen(false);
  };

  return (
    <header className={styles.navRoot}>
      <div className={styles.navShell}>
        <button
          className={styles.brand}
          type="button"
          onClick={() => handleNavClick('hero')}
        >
          <span className={styles.brandMark}>JD</span>
          <span className={styles.brandText}>
            <span className={styles.brandName}>Jane Doe</span>
            <span className={styles.brandRole}>Software Engineer</span>
          </span>
        </button>

        <nav className={styles.navDesktop} aria-label="Main">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              className={`${styles.navItem} ${
                activeSection === section.id ? styles.navItemActive : ''
              }`}
              onClick={() => handleNavClick(section.id)}
            >
              {section.label}
            </button>
          ))}
        </nav>

        <div className={styles.navActions}>
          <a
            href="/resume.pdf"
            className={styles.resumeLink}
            download
          >
            Resume
          </a>

          <button
            className={styles.menuToggle}
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className={styles.menuBar} />
            <span className={styles.menuBar} />
          </button>
        </div>
      </div>

      <nav
        className={`${styles.navMobile} ${isOpen ? styles.navMobileOpen : ''}`}
        aria-label="Mobile navigation"
      >
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            className={styles.navMobileItem}
            onClick={() => handleNavClick(section.id)}
          >
            {section.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;


