import styles from "../styles/GeneralCard.module.css";

export default function GeneralCard({ bgColour, height, width, children }) {
  return (
    <div
      className={styles.card}
      style={{ backgroundColor: bgColour, height: height, width: width }}
    >
      {children}
    </div>
  );
}
