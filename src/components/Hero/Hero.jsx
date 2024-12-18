import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Santino Gutierrez</h1>
        <p className={styles.description}>
          I'm a Community Manager & Software Developer with knowledge in
          Python, .NET, C#, ReactJS, JavaScript, HTML, CSS.
        </p>
      </div>
      <img
        src={getImageUrl("hero/profilepic.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
