import Image from "next/image";

import GeneralCard from "./GeneralCard";

import styles from "../styles/InformationCard.module.css";

export default function InformationCard({
  title,
  information,
  imageUrl,
  imageAltText,
}) {
  return (
    <GeneralCard width="98%">
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.infoGrid}>
        <p className={styles.information}>{information}</p>
        <Image
          src={imageUrl}
          alt={imageAltText}
          width="110px"
          height="100px"
          layout="fixed"
        />
      </div>
    </GeneralCard>
  );
}
