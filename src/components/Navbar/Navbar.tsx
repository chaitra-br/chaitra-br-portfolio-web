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
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={styles.navbar}>     
      <div className={styles.navContainer}>
        <div className={styles.logo}>CBR</div>

        {/* DESKTOP MENU */}
        <div className={styles.desktopMenu}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.rightSection} ref={menuRef}>
          {/* THEME TOGGLE */}
          <label className={`${styles.themeToggle} ${styles.sunMoonToggle}`}>
            <input
              type="checkbox"
              checked={isDark}
              onChange={toggleTheme}
              className={styles.themeToggleInput}
            />

            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <mask id="moon-mask">
                <rect x="0" y="0" width="20" height="20" fill="white" />
                <circle cx="11" cy="3" r="8" fill="black" />
              </mask>

              <circle
                className={styles.sunMoon}
                cx="10"
                cy="10"
                r="8"
                mask="url(#moon-mask)"
              />

              <g>
                <circle className={`${styles.sunRay} ${styles.sunRay1}`} cx="18" cy="10" r="1.5" />
                <circle className={`${styles.sunRay} ${styles.sunRay2}`} cx="14" cy="16.928" r="1.5" />
                <circle className={`${styles.sunRay} ${styles.sunRay3}`} cx="6" cy="16.928" r="1.5" />
                <circle className={`${styles.sunRay} ${styles.sunRay4}`} cx="2" cy="10" r="1.5" />
                <circle className={`${styles.sunRay} ${styles.sunRay5}`} cx="6" cy="3.1718" r="1.5" />
                <circle className={`${styles.sunRay} ${styles.sunRay6}`} cx="14" cy="3.1718" r="1.5" />
              </g>
            </svg>
          </label>

          {/* HAMBURGER (Mobile Only) */}
          <div
            className={`${styles.hamburger} ${open ? styles.open : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </div>

          {/* MOBILE DROPDOWN */}
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