import { Link } from "react-router-dom";
import styles from "./HeroSection.module.css";
import { HOME_CONSTANTS } from "../../constants";

const HeroSection = () => {
  const { TITLE_1, TITLE_2, DESCRIPTION, CTA } = HOME_CONSTANTS.HERO;
  return (
    <section className={styles.heroSection}>
      <div className={styles.bannerImage}>
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80"
          alt="Hero Banner"
          className={styles.image}
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
