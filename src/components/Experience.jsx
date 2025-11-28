import React from 'react';
import styles from './Experience.module.css';

const roles = [
  {
    company: 'Acme Cloud',
    title: 'Senior Frontend Engineer',
    period: '2022 — Present',
    location: 'Remote',
    highlights: [
      'Led the design system initiative used across 4 product teams.',
      'Improved perceived performance of core flows by 35%.',
      'Mentored 3 engineers on UI architecture and accessibility.'
    ]
  },
  {
    company: 'Studio Labs',
    title: 'Frontend Engineer',
    period: '2019 — 2022',
    location: 'Berlin',
    highlights: [
      'Built internal tooling to speed up handoff from design to dev.',
      'Introduced Storybook and visual regression testing.',
      'Collaborated closely with design on UX for complex flows.'
    ]
  },
  {
    company: 'Freelance',
    title: 'Product Engineer',
    period: '2017 — 2019',
    location: 'Remote',
    highlights: [
      'Shipped small products end-to-end with founders.',
      'Worked on landing pages, dashboards, and prototypes.'
    ]
  }
];

const education = {
  school: 'Technical University of Somewhere',
  degree: 'B.Sc. Computer Science',
  period: '2013 — 2017'
};

const Experience = () => {
  return (
    <div className={styles.root}>
      <div className="sectionHeader">
        <div>
          <p className="sectionTitle">Experience</p>
          <h2 className="sectionSubtitle">Where I&apos;ve been lately</h2>
        </div>
        <p className="sectionDescription">
          I&apos;ve worked across product companies and agencies, usually as the
          person responsible for getting complex interfaces into production
          without sacrificing UX or maintainability.
        </p>
      </div>

      <div className={styles.columns}>
        <ol className={styles.timeline}>
          {roles.map((role) => (
            <li key={role.company} className={styles.timelineItem}>
              <div className={styles.bullet} />
              <div className={styles.body}>
                <div className={styles.header}>
                  <h3 className={styles.title}>{role.title}</h3>
                  <span className={styles.meta}>
                    {role.company} · {role.location}
                  </span>
                </div>
                <p className={styles.period}>{role.period}</p>
                <ul className={styles.list}>
                  {role.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <aside className={styles.sidebar}>
          <p className={styles.sidebarLabel}>Education</p>
          <div className={styles.educationCard}>
            <p className={styles.school}>{education.school}</p>
            <p className={styles.degree}>{education.degree}</p>
            <p className={styles.period}>{education.period}</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Experience;


