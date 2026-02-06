import styles from "./CaseStudyHero.module.css";
import { CASE_STUDY_CONSTANTS } from "../constants";
import caseStudyVideo from "../../../assets/new-images/case_study.mp4";

const CaseStudyHero = () => {
  const { HERO } = CASE_STUDY_CONSTANTS;
  return (
    <section className={styles.heroSection}>
      <div className={styles.bannerImage}>
      <video
            src={caseStudyVideo}
            className={styles.image}
            autoPlay
            muted
            loop
            playsInline
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
