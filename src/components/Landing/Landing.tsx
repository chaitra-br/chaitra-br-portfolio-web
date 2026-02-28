"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./Landing.module.css";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Landing() {
  const fullText = "I’m Chaitra";
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 90);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className={styles.welcome}>WELCOME TO MY PORTFOLIO</p>

          <h1 className={styles.heading}>
            Hi, <span className={styles.name}>{text}</span>
            <span className={styles.cursor}>|</span>
          </h1>

          <h2 className={styles.role}>Frontend Developer</h2>

          <p className={styles.description}>
            Crafting clean, responsive and modern web experiences using React,
            JavaScript and UI best practices.
          </p>

          <div className={styles.buttons}>
            <a
              href="/B_R_Chaitra_Frontend_Development_Resume.pdf"
              download
              className={`${styles.btn} ${styles.primaryBtn}`}
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className={`${styles.btn} ${styles.secondaryBtn}`}
            >
              Contact Me
            </a>
          </div>

          <div className={styles.socials}>
            <a
              href="https://github.com/chaitra-br"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/br-chaitra/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <FaLinkedinIn />
            </a>

            <a
              href="mailto:chaitrabr03@gmail.com"
              className={styles.socialIcon}
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}