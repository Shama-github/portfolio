import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.root}>
      <div className="sectionHeader">
        <div>
          <p className="sectionTitle">About</p>
          <h2 className="sectionSubtitle">A bit about how I work</h2>
        </div>
        <p className="sectionDescription">
          I bridge product, design, and engineering to ship interfaces that feel
          fast, intentional, and dependable. I care about the craft, but I care
          even more about the outcomes.
        </p>
      </div>

      <div className={styles.grid}>
        <article className="card">
          <h3 className={styles.cardTitle}>Product-focused engineering</h3>
          <p className="muted">
            I work best in cross-functional teams, collaborating closely with
            product and design to understand trade-offs, simplify scope, and
            ensure we&apos;re always solving the right problem.
          </p>
        </article>

        <article className="card">
          <h3 className={styles.cardTitle}>Thoughtful frontends</h3>
          <p className="muted">
            From design systems to complex dashboards, I aim for interfaces that
            are predictable, accessible, and delightful — with just enough
            motion and personality.
          </p>
        </article>

        <article className="card">
          <h3 className={styles.cardTitle}>Pragmatic craft</h3>
          <p className="muted">
            I like modern tooling, but I prefer boring, reliable solutions to
            overly clever ones. Clear naming, small components, and good
            communication go a long way.
          </p>
        </article>
      </div>
    </div>
  );
};

export default About;


