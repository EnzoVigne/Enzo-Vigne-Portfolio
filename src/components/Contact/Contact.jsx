import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>N'hésitez pas à me contacter</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:vigne.enzo73@gmail.com">vigne.enzo73@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/enzo-vigne-202846263/">https://www.linkedin.com/in/enzo-vigne/</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/EnzoVigne">github.com/EnzoVigne</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/phoneIcon.png")} alt="Phone icon" />
          <a href="tel:33612682827">06 12 68 28 27</a>
        </li>
      </ul>
    </footer>
  );
};
