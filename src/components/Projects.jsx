import React, { useState } from 'react';
import styles from './Projects.module.css';
import ProjectCard from './ProjectCard';

const Projects = ({ projects }) => {
  const [highlightedId, setHighlightedId] = useState(projects[0]?.id);

  return (
    <div className={styles.root}>
      <div className="sectionHeader">
        <div>
          <p className="sectionTitle">Projects</p>
          <h2 className="sectionSubtitle">Recent work highlights</h2>
        </div>
        <p className="sectionDescription">
          A selection of product-focused work, ranging from design systems to
          data-heavy dashboards. Each project leans on clear UX, robust
          architecture, and maintainable code.
        </p>
      </div>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <p className={styles.sidebarLabel}>Focus</p>
          <div className={styles.sidebarList}>
            {projects.map((project) => (
              <button
                key={project.id}
                type="button"
                className={`${styles.sidebarItem} ${
                  highlightedId === project.id ? styles.sidebarItemActive : ''
                }`}
                onClick={() => setHighlightedId(project.id)}
              >
                <span>{project.title}</span>
                <span className={styles.sidebarRole}>{project.role}</span>
              </button>
            ))}
          </div>
        </aside>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;


