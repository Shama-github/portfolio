import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('submitted');
    window.setTimeout(() => setStatus('idle'), 3500);
  };

  return (
    <div className={styles.root}>
      <div className="sectionHeader">
        <div>
          <p className="sectionTitle">Contact</p>
          <h2 className="sectionSubtitle">Let&apos;s discuss your next project</h2>
        </div>
        <p className="sectionDescription">
          Have a project, role, or idea you&apos;d like to explore? Share a few
          details and I&apos;ll follow up with thoughtful questions and next
          steps. This form is intentionally simple and non-functional.
        </p>
      </div>

      <div className={styles.layout}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fieldGroup}>
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Jane Smith" />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div className={styles.field}>
            <label htmlFor="topic">What are you working on?</label>
            <select id="topic" name="topic" defaultValue="product">
              <option value="product">Product / SaaS UI</option>
              <option value="design-system">Design system</option>
              <option value="frontend">Frontend engineering</option>
              <option value="other">Something else</option>
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="message">Project details</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Timelines, goals, existing stack — whatever is top of mind."
            />
          </div>
          <button type="submit" className="btnPrimary">
            Send message
            <span aria-hidden="true">→</span>
          </button>
          {status === 'submitted' && (
            <p className={styles.formHint}>
              Thanks — this demo form doesn&apos;t actually send anything, but this
              is where a success message would appear.
            </p>
          )}
        </form>

        <aside className={styles.sidebar}>
          <p className={styles.sidebarLabel}>Prefer email or links?</p>
          <div className={styles.sidebarCard}>
            <p className={styles.sidebarText}>
              You can also reach out directly or view more of my work:
            </p>
            <ul className={styles.links}>
              <li>
                <a href="mailto:jane.doe@portfolio.dev">jane.doe@portfolio.dev</a>
              </li>
              <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Contact;


