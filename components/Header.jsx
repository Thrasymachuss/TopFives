import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import logo from "../assets/TopFivesLogo.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles["logo-wrap"]}>
        <Link href="/">
          <a className={styles["logo-link"]}>
            <img src={logo.src} className={styles.logo} alt="" />
          </a>
        </Link>
      </div>
    </header>
  );
}
