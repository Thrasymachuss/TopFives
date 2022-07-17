import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import logo from "../assets/TopFivesLogo.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles["logo-wrap"]}>
        <Link href="/">
          <a className={styles["logo-link"]}>
            <div className={styles.logo}>
              <Image src={logo.src} alt="Logo" />
            </div>
          </a>
        </Link>
      </div>
    </header>
  );
}
