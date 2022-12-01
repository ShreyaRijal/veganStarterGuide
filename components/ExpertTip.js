import GeneralCard from "./GeneralCard";
import Image from "next/image";
import styles from "../styles/ExpertTip.module.css";

export default function ExpertTip({ tip }) {
  return (
    <div className={styles.expertTipContent}>
      <div className={styles.sparkles}>
        <Image
          src="/lightbulb.png"
          alt="lightbulb icon"
          width={40}
          height={48}
        />
      </div>
      <>Tip: {tip}</>
    </div>
  );
}
