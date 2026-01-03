import styles from "./WhyLeadsFail.module.css";
import { HOME_CONSTANTS } from "../../constants";

const WhyLeadsFail = () => {
  const {
    TITLE,
    MAIN_TEXT,
    SUB_TEXT,
    TRADITIONAL_TITLE,
    PROBLEMS,
    CONSEQUENCES,
    SOLUTION,
  } = HOME_CONSTANTS.WHY_LEADS_FAIL;

  return (
    <section className={styles.whyLeadsFail}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{TITLE}</h2>
          
          <div className={styles.textContent}>
            <p className={styles.mainText}>{MAIN_TEXT}</p>
            <p className={styles.subText}>{SUB_TEXT}</p>
          </div>

          <div className={styles.combinedSection}>
            <div className={styles.traditionalSection}>
              <h3 className={styles.traditionalTitle}>{TRADITIONAL_TITLE}</h3>
              <ul className={styles.problemsList}>
                {PROBLEMS.map((problem, index) => (
                  <li key={index} className={styles.problemItem}>
                    <span className={styles.bullet}>•</span>
                    <span className={styles.problemText}>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.consequencesSection}>
              {CONSEQUENCES.map((consequence, index) => (
                <p key={index} className={styles.consequenceText}>
                  {consequence}
                </p>
              ))}
            </div>
          </div>

          <div className={styles.solutionSection}>
            <p className={styles.solutionText}>{SOLUTION}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLeadsFail;

