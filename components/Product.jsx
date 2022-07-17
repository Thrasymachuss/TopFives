import ProCon from "./ProCon";
import styles from "../styles/Product.module.css";

export default function Product(props) {
  const { Title, Description, ImageLink, Good, Bad, index } = props;
  return (
    <article className={styles.product} id={`product-${index}`}>
      <div className={styles.box}>
        <div dangerouslySetInnerHTML={{ __html: ImageLink }}></div>
      </div>
      <div className={styles.box}>
        <h3 className={styles.text}>{Title}</h3>
        <p className={styles.text}>{Description}</p>
        <ProCon summary="Pros" content={Good} />
        <ProCon summary="Cons" content={Bad} />
      </div>
      <div className={styles.box}>
        <a
          className={styles.btn}
          href={props.Link}
          rel="nofollow noreferrer"
          target="_blank"
        >
          Check Amazon
        </a>
      </div>
    </article>
  );
}
