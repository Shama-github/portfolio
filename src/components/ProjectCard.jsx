import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ title, description, tags, role }) => {
  return (
    <article className={`card ${styles.root}`}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <span className="tag">{role}</span>
      </div>
      <p className={`muted ${styles.description}`}>{description}</p>
      <div className="chipRow">
        {tags.map((tag) => (
          <span key={tag} className="chip">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;


