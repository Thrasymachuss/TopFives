import styles from "../styles/ProCon.module.css";
import { useRef } from "react";

export default function ProCon({ summary, content }) {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.click();
  };
  return (
    <details className={styles.details}>
      <summary ref={ref}>{summary}</summary>
      <div className={styles.inner} onClick={handleClick}>
        <ul className={styles.ul}>
          {content.map((item, i) => (
            <li key={i}>{item.Content}</li>
          ))}
        </ul>
      </div>
    </details>
  );
}
