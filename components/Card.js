import Image from "next/image";

import styles from "../styles/Card.module.css";
import GeneralCard from "./GeneralCard";

export default function Card({ imageUrl, cardText, sourceUrl }) {
  return (
    <GeneralCard bgColour={"rgba(var(--white), 0.8)"}>
      <Image
        src={imageUrl}
        alt={"cardImageFor" + imageUrl}
        width="420px"
        height="250px"
      />
      <div className={styles.cardText}>
        {cardText} Read more <a href={sourceUrl}>here</a>
      </div>
    </GeneralCard>
  );
}
