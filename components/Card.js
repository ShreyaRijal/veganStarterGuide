import Image from "next/image";

import styles from "../styles/Card.module.css";

export default function Card({ imageUrl, cardText, sourceUrl }) {
  return (
    <div className={styles.card}>
      <Image
        src={imageUrl}
        alt={"cardImageFor" + imageUrl}
        width="400px"
        height="250px"
      />
      <div className={styles.cardText}>
        {cardText} Read more <a href={sourceUrl}>here</a>
      </div>
    </div>
  );
}
