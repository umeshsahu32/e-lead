import { Link } from "react-router-dom";
import styles from "./HeroSection.module.css";
import { HOME_CONSTANTS } from "../../constants";
import heroVideo from "../../../../assets/new-images/home.mp4";

const HeroSection = () => {
  const { TITLE_1, TITLE_2, DESCRIPTION, CTA } = HOME_CONSTANTS.HERO;
  return (
    <section className={styles.heroSection}>
      <div className={styles.bannerImage}>
        <video
          src={heroVideo}
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
          <h1 className={styles.primaryText}>
            {TITLE_1}
            <br />
            {TITLE_2}
          </h1>
          <p className={styles.secondaryText}>{DESCRIPTION}</p>
          <Link to="/contact-us" className={styles.ctaButton}>
            {CTA}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
