import React from 'react';
import styles from './Hero.module.css';

const Hero = ({ onViewProjects }) => {
  return (
    <div className={styles.heroRoot}>
      <div className={styles.heroContent}>
        <div className={styles.badgeRow}>
          <span className="pill">
            <span className="pillDot" />
            Open to opportunities
          </span>
          <span className={styles.location}>Based in Berlin · Remote friendly</span>
        </div>

        <h1 className={styles.title}>
          Building calm, reliable{` `}
          <span className={styles.titleAccent}>product experiences</span>
          {` `}
          for modern teams.
        </h1>

        <p className={styles.lead}>
          I’m a software engineer focused on frontend architecture, design systems,
          and thoughtful developer experience. I help product teams ship polished
          interfaces that scale.
        </p>

        <div className={styles.actions}>
          <button
            type="button"
            className="btnPrimary"
            onClick={onViewProjects}
          >
            View projects
            <span aria-hidden="true">↗</span>
          </button>
          <a href="#contact" className={styles.secondaryAction}>
            Let&apos;s collaborate
          </a>
        </div>

        <dl className={styles.meta}>
          <div>
            <dt>Years of experience</dt>
            <dd>6+ years</dd>
          </div>
          <div>
            <dt>Shipped products</dt>
            <dd>12+ launches</dd>
          </div>
          <div>
            <dt>Specialty</dt>
            <dd>UI engineering</dd>
          </div>
        </dl>
      </div>

      <aside className={styles.heroCard} aria-label="Profile highlight">
        <div className={styles.avatar} aria-hidden="true">
          <span className={styles.avatarInitials}>JD</span>
        </div>
        <div className={styles.heroCardBody}>
          <div className={styles.heroCardHeader}>
            <div>
              <p className={styles.heroName}>Jane Doe</p>
              <p className={styles.heroRole}>Senior Frontend Engineer</p>
            </div>
            <span className={styles.heroAvailability}>Available · Q2 2026</span>
          </div>

          <ul className={styles.heroHighlights}>
            <li>Design systems and component libraries</li>
            <li>High-performing product engineering teams</li>
            <li>Accessible, enterprise-grade interfaces</li>
          </ul>

          <div className={styles.heroFooter}>
            <span className={styles.heroTag}>Currently at Acme Cloud</span>
            <span className={styles.heroTagSoft}>Previously at Studio Labs</span>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Hero;


