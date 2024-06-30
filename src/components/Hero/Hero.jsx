import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Bienvenue dans mon Portfolio</h1>
        <p className={styles.description}>
          Je suis actuellement étudiant et bientôt diplomé d'un Bachelor Universitaire de Technologie (BUT) en Informatique.
          Être développeur a toujours été le métier vers lequel j'ai voulu me diriger. Avide d'apprentissage, je suis actuellement à la recherche d'un emploi dans le domaine du développement logiciel ou web.
        </p>
        <a href="mailto:vigne.enzo73@gmail.com" className={styles.contactBtn}>
          Me contacter
        </a>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
