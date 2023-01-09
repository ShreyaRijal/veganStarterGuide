import Image from "next/image";

import GeneralCard from "./GeneralCard";

import styles from "../styles/InformationCard.module.css";

export default function InformationCard({
  title,
  information,
  imageUrl,
  imageSize,
  width,
  imageAltText,
}) {
  return (
    <GeneralCard width={width} margin={0}>
      <div className={styles.informationContainer}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.infoGrid}>
          <p className={styles.information}>{information}</p>
          <Image
            src={imageUrl}
            alt={imageAltText}
            width={`${imageSize}px`}
            height={`${imageSize}px`}
            layout="fixed"
          />
        </div>
      </div>
    </GeneralCard>
  );
}
