import { useState } from "react";
import styles from "../styles/Accordion.module.css";

export default function Accordion({ accordionHeader, children }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);
  return (
    <div className={styles.accordionContainer}>
      <button
        onClick={() => {
          setIsAccordionOpen(!isAccordionOpen);
        }}
        className={styles.accordion}
      >
        <h2> {accordionHeader}</h2>
        {isAccordionOpen ? (
          <div className={styles.accordionBtn}>-</div>
        ) : (
          <div className={styles.accordionBtn}>+</div>
        )}
      </button>
      <div
        className={styles.panel}
        style={isAccordionOpen ? { display: "block" } : { display: "none" }}
      >
        {children}
      </div>
    </div>
  );
}
