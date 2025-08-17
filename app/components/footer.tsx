import styles from "../styles/footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} JobFit AI. All rights reserved.
    </footer>
  );
}
