import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <hr className={styles.line} />
      Hello there, I&apos;m Shreya, a software developer who wants to do better
      for the planet. <br />
      If you have questions, suggestions, or feedback, email me! <br />
      <a href="mailto: contactforshreya@gmail.com">
        contactforshreya@gmail.com
      </a>
    </div>
  );
}
