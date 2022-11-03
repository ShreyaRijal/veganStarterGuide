import Image from "next/image";

import GeneralCard from "./GeneralCard";

import styles from "../styles/InformationCard.module.css";

export default function InformationCard({ title, information, imageUrl }) {
  return (
    <GeneralCard width="98%">
      <div className={styles.title}>{title}</div>
      <div className={styles.infoGrid}>
        <div className={styles.information}>{information}</div>
        <Image
          src={imageUrl}
          alt={"informationImageFor" + title}
          width="110px"
          height="100px"
          layout="fixed"
        />
      </div>
    </GeneralCard>
  );
}
