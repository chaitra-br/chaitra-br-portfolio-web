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
      <div className={styles.container}>
        {/* HEADING */}
        <h2 className={`${styles.heading} ${inView ? styles.show : ""}`}>
          About <span className={styles.highlight}>Me</span>
        </h2>

        {/* IMAGE */}
        <div className={`${styles.right} ${inView ? styles.showImage : ""}`}>
          <div className={styles.imageWrapper}>
            <img src="/ProfilePicViolet.png" alt="Chaitra" />
          </div>
        </div>

        {/* TEXT */}
        <div className={styles.textContent}>
          <p className={`${styles.text} ${inView ? styles.show : ""}`} style={{ transitionDelay: "0.2s" }}>
            I’m a frontend developer who enjoys building clean, intuitive, and scalable user interfaces 
            with a strong focus on usability and thoughtful design. I aim to create experiences that feel 
            simple, responsive, and purposeful rather than visually overwhelming.
          </p>

          <p className={`${styles.text} ${inView ? styles.show : ""}`} style={{ transitionDelay: "0.35s" }}>
            Through hands-on projects, I’ve built complete frontend applications, dashboards, and 
            data-driven interfaces with emphasis on component reusability, clear state management, 
            and performance. I enjoy turning complex requirements into structured, maintainable UI systems.
          </p>

          <p className={`${styles.text} ${inView ? styles.show : ""}`} style={{ transitionDelay: "0.5s" }}>
            I’m particularly interested in modern frontend development where clean design meets real-world 
            functionality. I continuously refine my skills and focus on building user-centric interfaces 
            with clarity and consistency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;