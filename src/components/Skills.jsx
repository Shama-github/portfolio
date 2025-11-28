import React from 'react';
import styles from './Skills.module.css';

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'React Query', 'Framer Motion']
  },
  {
    category: 'Design & UX',
    items: ['Design systems', 'Figma', 'Accessibility (WCAG)', 'Prototyping']
  },
  {
    category: 'Tooling',
    items: ['Vite', 'Webpack', 'Storybook', 'ESLint & Prettier', 'Playwright']
  },
  {
    category: 'Backend & Infra',
    items: ['Node.js', 'REST APIs', 'GraphQL', 'PostgreSQL', 'Docker']
  }
];

const Skills = () => {
  return (
    <div className={styles.root}>
      <div className="sectionHeader">
        <div>
          <p className="sectionTitle">Skills</p>
          <h2 className="sectionSubtitle">What I&apos;m comfortable with</h2>
        </div>
        <p className="sectionDescription">
          I&apos;m most at home in modern React stacks — collaborating on design
          systems, UI architecture, and the tooling that makes product teams
          fast and confident.
        </p>
      </div>

      <div className="cardsGrid">
        {skills.map((group) => (
          <article key={group.category} className="card">
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{group.category}</h3>
            </div>
            <div className="chipRow">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Skills;


