import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "../styles/Intro.module.css";

export default function Intro({ description, h2 }) {
  return (
    <section className={styles.outer}>
      {description ? (
        <div className={styles.markdown}>
          <p>
            <i>
              This post contains affiliate links. This means that if you click
              on a link and then make a purchase, there is a high probability
              that I will recieve a commission. As an Amazon Associate I earn
              from qualifying purchases.
            </i>
          </p>
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
      ) : (
        <h2 className={styles.h2}>{h2}</h2>
      )}
      <div
        className={`${styles.line} ${h2 ? styles["line-header"] : ""}`}
      ></div>
    </section>
  );
}
