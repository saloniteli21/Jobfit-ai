import styles from "../styles/features.module.scss";
import { ClipboardList, Brain, FileText } from "lucide-react"; 

export default function Features() {
  return (
    <section className={styles.features}>
      <h2>Our Features</h2>
      <div className={styles.featuresGrid}>
        
        <div className={styles.featureCard}>
          <ClipboardList size={40} color="#4dabf7" style={{ marginBottom: "12px" }} />
          <h3>Smart Tracking</h3>
          <p>Keep track of all your applications in one place with ease.</p>
        </div>

        <div className={styles.featureCard}>
          <Brain size={40} color="#4dabf7" style={{ marginBottom: "12px" }} />
          <h3>AI Insights</h3>
          <p>Get intelligent recommendations to improve your job search.</p>
        </div>

        <div className={styles.featureCard}>
          <FileText size={40} color="#4dabf7" style={{ marginBottom: "12px" }} />
          <h3>Resume Builder</h3>
          <p>Create professional resumes tailored for each job role.</p>
        </div>

      </div>
    </section>
  );
}
