"use client";

import styles from "./Skills.module.css";
import { useInView } from "@/hooks/useInView";
import { FaPenNib } from "react-icons/fa";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaLayerGroup,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiCssmodules,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, className: "tileWide" },
  { name: "CSS", icon: <FaCss3Alt />, className: "tileSmall" },
  { name: "JavaScript", icon: <FaJs />, className: "tileSmall" },
  { name: "React", icon: <FaReact />, className: "tileTall" },
  { name: "Next.js", icon: <SiNextdotjs />, className: "tileSmall" },
  { name: "CSS Modules", icon: <SiCssmodules />, className: "tileSmall" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, className: "tileSmall" },
  { name: "Responsive Design", icon: <FaCss3Alt />, className: "tileSmall" },
  { name: "GitHub", icon: <FaGithub />, className: "tileTall" },
  { name: "Git", icon: <FaGitAlt />, className: "tileSmall" },
  { name: "Framer", icon: <SiFramer />, className: "tileSmall" },
  { name: "Figma", icon: <FaFigma />, className: "tileWide" },
  { name: "Vercel", icon: <SiVercel />, className: "tileSmall" },
  { name: "Netlify", icon: <SiNetlify />, className: "tileSmall" },
  { name: "UI/UX Design", icon: <FaPenNib />, className: "tileSmall" },
  { name: "Reusable UI Components", icon: <FaLayerGroup />, className: "tileSmall" },

];

const Skills = () => {
  const { ref, inView } = useInView(0.25);

  return (
    <section
      ref={ref}
      id="skills"
      className={`${styles.skillsSection} ${inView ? styles.inView : ""}`}
    >
      
      <h2 className={styles.heading}>Skills</h2>

      <div className={styles.grid}>
        {skills.map((skill, i) => (
          <div
            key={skill.name}
            className={`${styles.tile} ${styles[skill.className]}`}
            style={{ transitionDelay: `${i * 0.06}s` }}
          >
            <div className={styles.icon}>{skill.icon}</div>
            <span className={styles.label}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
