"use client";

import styles from "./About.module.css";
import { useInView } from "../../hooks/useInView";

const About = () => {
  const { ref, inView } = useInView(0.3);

  return (
    <section
      ref={ref}
      id="about"
      className={`${styles.aboutSection} ${inView ? styles.inView : ""}`}
    >

      <div className={styles.content}>
        <h2 className={styles.heading}>About Me</h2>

        <p className={styles.text} style={{ transitionDelay: "0.1s" }}>
          I’m a frontend developer who enjoys building clean, intuitive, and scalable 
          user interfaces with a strong focus on usability and thoughtful design. I care 
          deeply about how users interact with applications and aim to create experiences 
          that feel simple, responsive, and purposeful rather than visually overwhelming.
        </p>

        <p className={styles.text} style={{ transitionDelay: "0.25s" }}>
          Through hands-on projects, I’ve worked on building complete frontend applications, 
          dashboards, and data-driven interfaces that emphasize component reusability, clear 
          state management, and performance. I enjoy translating complex requirements into 
          structured UI patterns and designing interfaces that remain maintainable as features grow.
        </p>

        <p className={styles.text} style={{ transitionDelay: "0.4s" }}>
          I’m particularly interested in modern frontend development, where clean design meets 
          real-world functionality. I focus on continuously improving my skills, refining my 
          approach through projects, and building user-centric interfaces with care and consistency.
        </p>
      </div>
    </section>
  );
};

export default About;
