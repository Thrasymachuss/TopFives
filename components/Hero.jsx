import React from "react";
import styles from "../styles/Hero.module.css";

export default function Hero({ title, subhead, img }) {
  const imgStyle = img ? { backgroundImage: `url(${img}` } : {};
  return (
    <section className={styles.hero}>
      <div className={styles.img} style={imgStyle}></div>
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>{title}</h1>
        <div className={styles.subhead}>{subhead}</div>
      </div>
    </section>
  );
}
