import { useState } from 'react';
import styles from '../styles/Accordian.module.css';

export default function Accordian({ accordianHeader, children }) {
  const [isAccordianOpen, setIsAccordianOpen] = useState(true);
  return (
    <div className={styles.accordionContainer}>
      <button
        onClick={() => {
          setIsAccordianOpen(!isAccordianOpen);
        }}
        className={styles.accordion}
      >
        {accordianHeader}
        {isAccordianOpen ? (
          <div className={styles.accordianBtn}>-</div>
        ) : (
          <div className={styles.accordianBtn}>+</div>
        )}
      </button>
      <div
        className={styles.panel}
        style={isAccordianOpen ? { display: 'block' } : { display: 'none' }}
      >
        {children}
      </div>
    </div>
  );
}
