"use client";
import styles from "../styles/login.module.scss"; // create this SCSS

export default function LoginPage() {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Login</h2>
        <form>
          <label>User ID</label>
          <input type="text" placeholder="Enter your user ID" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <button type="submit" className={styles.submitBtn}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
