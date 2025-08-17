"use client";
import { useState } from "react";
import styles from "../styles/navbar.module.scss";

export default function Navbar(): JSX.Element {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        {/* Left side: Logo */}
        <div className={styles.logo}>JobFit AI</div>

        {/* Right side: Login & Sign Up */}
        <div className={styles.authButtons}>
          <button
            onClick={() => setShowLogin(true)}
            className={styles.loginBtn}
          >
            Login
          </button>
          <button className={styles.signupBtn}>Sign Up</button>
        </div>
      </nav>

      {/* Login Modal */}
      {showLogin && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button
              onClick={() => setShowLogin(false)}
              className={styles.closeBtn}
            >
              ✕
            </button>
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
      )}
    </>
  );
}
