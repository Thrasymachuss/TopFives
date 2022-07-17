import React from "react";
import Link from "next/link";
import styles from "../styles/Article.module.css";

export default function Article({
  post: { Title, TitlePicture, Slug, Description },
}) {
  const url = TitlePicture.data.attributes.url;
  const shortDesc = Description.split(" ").slice(0, 25).join(" ");
  return (
    <article className={styles.article}>
      <Link href={`/posts/${Slug}`}>
        <a className={styles.outer}>
          <div
            className={styles.img}
            style={{ backgroundImage: `url(${url})` }}
          ></div>
          <div className={styles.inner}>
            <h3 className={styles.h3}>{Title}</h3>
            <p className={styles.p}>{shortDesc}... Read More</p>
          </div>
        </a>
      </Link>
    </article>
  );
}
