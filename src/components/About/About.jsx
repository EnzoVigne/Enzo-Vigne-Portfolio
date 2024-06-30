// eslint-disable-next-line no-unused-vars
import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/test.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <div className={styles.aboutIntro}>
          <h3>Mon Parcours</h3>
          <p>
            La formation que j'ai suivie est le Bachelor Universitaire de Technologie en informatique de l'IUT2 de Grenoble,
            plus particulièrement dans le parcours de réalisation d'applications (conception, développement, validation).
            J'ai pu acquérir, au cours de différents projets auxquels j'ai participé, des compétences en développement logiciel, en développement web, en gestion de projet.
            Je suis en mesure de travailler en équipe, de m'adapter à de nouvelles technologies et de mener à bien des projets.
          </p>
        </div>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Développement logiciel</h3>
              <p>
                J'ai pu développer des applications en C, C++, Java, C#. J'ai également utilisé des frameworks comme JavaFX, .NET.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Développement web</h3>
              <p>
                J'ai pu développer des applications web en HTML, CSS, JavaScript, PHP. J'ai également utilisé des frameworks comme React (pour ce portfolio), Angular, Symfony, Flutter.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Autre</h3>
              <p>
                Je suis en mesure de travailler en équipe, de m'adapter à de nouvelles technologies et de mener à bien des projets. 
                Pour ce qui est de la gestion de projet, j'ai acquis de solides compétnece en matière de planification (UML), de suivi et de communication.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
