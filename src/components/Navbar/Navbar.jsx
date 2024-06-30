/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio - Enzo Vigne
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">À propos</a>
          </li>
          <li>
            <a href="#experience">Expérience</a>
          </li>
          <li>
            <a href="#projects">Projets</a>
          </li>
          <li>
            <a href="#contact">Me contacter</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
