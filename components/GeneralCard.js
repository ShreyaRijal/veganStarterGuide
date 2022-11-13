import styles from '../styles/GeneralCard.module.css';

export default function GeneralCard({
  bgColour,
  height,
  width,
  isClickable,
  children,
}) {
  return (
    <div
      style={{
        backgroundColor: bgColour,
        height: height,
        width: width,
      }}
      className={`${styles.card} ${isClickable ? styles.clickable : ''}`}
    >
      {children}
    </div>
  );
}
