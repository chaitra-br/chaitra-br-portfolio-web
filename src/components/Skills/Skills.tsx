"use client";

import styles from "./Skills.module.css";
import { useInView } from "@/hooks/useInView";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    title: "Styling",
    skills: ["Tailwind CSS", "CSS Modules", "Responsive Design"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Vercel"],
  },
  {
    title: "Design",
    skills: ["Figma", "Framer", "Reusable UI Components"],
  },
];

const Skills = () => {
  const { ref, inView } = useInView(0.25);

  return (
    <section
      ref={ref}
      id="skills"
      className={`${styles.skillsSection} ${inView ? styles.inView : ""}`}
    >
      <h2 className={`${styles.heading} ${inView ? styles.show : ""}`}>
          My <span className={styles.highlight}>Skills</span>
      </h2>

      <div className={styles.categories}>
        {skillCategories.map((category, index) => (
          <div
            key={category.title}
            className={styles.categoryCard}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <h3 className={styles.categoryTitle}>{category.title}</h3>

            <div className={styles.skillsWrapper}>
              {category.skills.map((skill) => (
                <span key={skill} className={styles.skillItem}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
