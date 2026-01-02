"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  /* ================= THEME INIT ================= */
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      setIsDark(true);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    setIsDark(!isDark);
  };

  /* ================= CLICK OUTSIDE ================= */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>CHAITRA</div>

        <div className={styles.rightSection} ref={menuRef}>
          {/* ===== THEME TOGGLE (NEW) ===== */}
          <label className={styles.theme}>
            <span className={styles.theme__toggleWrap}>
              <input
                type="checkbox"
                className={styles.theme__toggle}
                checked={isDark}
                onChange={toggleTheme}
                role="switch"
                aria-label="Toggle theme"
              />
              <span className={styles.theme__icon}>
                {Array.from({ length: 9 }).map((_, i) => (
                  <span key={i} className={styles.theme__iconPart} />
                ))}
              </span>
            </span>
          </label>

          {/* Hamburger */}
          <div
            className={`${styles.hamburger} ${open ? styles.open : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </div>

          {/* Dropdown */}
          {open && (
            <div className={styles.dropdown}>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
