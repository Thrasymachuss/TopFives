import React from "react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.p}>
        Thanks for visiting my site, and I hope I&apos;ve helped you find a
        product that suits your needs!
      </p>
      <p className={styles.p}>
        By the way, the links on this site are affiliate links. That means that
        if you click one and then purchase something, I will probably get paid a
        commission at no additional cost to you. As an Amazon Associate I earn
        from qualifying purchases.
      </p>
    </footer>
  );
}
