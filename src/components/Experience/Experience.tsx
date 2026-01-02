"use client";

import { useEffect, useRef } from "react";
import styles from "./Experience.module.css";

const experiences = [
{
  id: 1,
  role: "Computer Vision Intern",
  company: "Kennametal India Ltd.",
  duration: "Jan 2025 – May 2025",
  skills: [
    "Python",
    "OpenCV",
    "Image Processing",
    "Computer Vision",
    "Automation"
  ],
  summary:
    "Developed a computer vision–based tool to automatically detect, visualize, and report differences between CAD model images, significantly reducing manual inspection effort.",
},
{
  id: 2,
  role: "Data Analytics Intern",
  company: "Innovate Intern",
  duration: "Jan 2025 – May 2025",
  skills: [
    "Python",
    "Pandas",
    "Machine Learning",
    "EDA",
    "Random Forest",
    "Streamlit"
  ],
  summary:
    "Built an end-to-end predictive analytics system to identify customer churn and generate actionable business insights using machine learning models and interactive dashboards.",
},

];

export default function Experience() {
  const sectionRef = useRef<HTMLElement | null>(null);

  /* Fade in on scroll */
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

  return (
    <section ref={sectionRef} className={styles.experience} id="experience">
      <h2 className={styles.heading}>Experience</h2>

      <div className={styles.timeline}>
        {experiences.map((exp, index) => {
          const side = index % 2 === 0 ? styles.right : styles.left;

          return (
            <div key={exp.id} className={`${styles.item} ${side}`}>
              <div className={styles.dot} />

              <div className={styles.card}>
                <h3>{exp.role}</h3>
                <p className={styles.company}>{exp.company}</p>
                <span className={styles.duration}>{exp.duration}</span>

                {/* NEW: short description */}
                <p className={styles.summary}>{exp.summary}</p>

                <div className={styles.tech}>
                  {exp.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
