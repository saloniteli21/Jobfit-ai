import styles from "../styles/Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Smart Career Guidance</h1>
      <p>AI-powered role suggestions & resume builder to boost your career</p>
      <button>Get Started</button>
    </section>
  );
}
