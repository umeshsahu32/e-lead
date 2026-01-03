import styles from "./CaseStudyHero.module.css";
import { CASE_STUDY_CONSTANTS } from "../constants";

const CaseStudyHero = () => {
  const { HERO } = CASE_STUDY_CONSTANTS;
  return (
    <section className={styles.heroSection}>
      <div className={styles.bannerImage}>
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
          alt="Case Studies Banner"
          className={styles.image}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{HERO.TITLE}</h1>
          <p className={styles.subtitle}>{HERO.DESCRIPTION}</p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;
