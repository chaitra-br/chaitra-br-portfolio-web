"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./Landing.module.css";

export default function Landing() {
  const fullText = "I’m Chaitra";
  const [text, setText] = useState("");

  // Typewriter effect (runs once per refresh)
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
        {/* LEFT CONTENT */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.hi}>Hi</h1>

          <h2 className={styles.name}>
            {text}
            <span className={styles.cursor}>|</span>
          </h2>

          <p className={styles.subtitle}>
            Frontend Developer 
          </p>

          <div className={styles.buttons}>
            <a
              href="/B_R_Chaitra_Frontend_Development_Resume.pdf"
              download
              className={`${styles.btn} ${styles.primaryBtn}`}
            >
              Download Resume
            </a>

            <a href="#contact" 
            className={`${styles.btn} ${styles.secondaryBtn}`}>
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.imageWrapper}>
            <img
              src="/Profile.jpg"   /* <-- put your image in public folder */
              alt="B R Chaitra"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
