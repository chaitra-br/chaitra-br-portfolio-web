"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../../components/MyProjects/Projects.module.css";
import { projectsData } from "../../Data/projectsData";
import ProjectCard from "./ProjectCard";
import { useInView } from "../../hooks/useInView";

export default function Projects() {
  const { ref, inView } = useInView(0.25);
  
  const [expanded, setExpanded] = useState(false);

  // Section fade-in
  const sectionRef = useRef<HTMLElement | null>(null);

  // Ref for 3rd (last featured) card
  const lastFeaturedRef = useRef<HTMLDivElement | null>(null);

  /* =========================
     FADE-IN ON SCROLL
  ========================= */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add(styles.inView);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const visibleProjects = expanded
    ? projectsData
    : projectsData.slice(0, 3);

  /* =========================
     TOGGLE HANDLER
  ========================= */
  const handleToggle = () => {
    if (expanded) {
      // COLLAPSE
      setExpanded(false);

      // Scroll AFTER collapse finishes rendering
      requestAnimationFrame(() => {
        setTimeout(() => {
          lastFeaturedRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 150);
      });
    } else {
      // EXPAND
      setExpanded(true);
    }

  };

  
  return (
    <section
      ref={sectionRef}
      className={styles.projects}
      id="projects"
    >
      <h2 className={`${styles.heading} ${inView ? styles.show : ""}`}>
          My <span className={styles.highlight}>Projects</span>
        </h2>

      <div className={styles.grid}>
        {visibleProjects.map((project, index) => (
          <div
            key={project.id}
            ref={index === 2 ? lastFeaturedRef : null}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <button className={styles.toggleBtn} onClick={handleToggle}>
        {expanded ? "Show Less Projects ↑" : "View More Projects ↓"}
      </button>
    </section>
  );
}
