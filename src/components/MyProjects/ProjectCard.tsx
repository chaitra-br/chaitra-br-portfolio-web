import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }: any) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={project.image} alt={project.title} />
      </div>

      <div className={styles.content}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className={styles.tools}>
          {project.tools.map((tool: string) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>

        <div className={styles.links}>
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            View Project →
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            View Code →
          </a>
        </div>
      </div>
    </article>
  );
}
