import styles from './AboutHeroSection.module.css'
import { ABOUT_US_CONSTANTS } from "../constants";
import aboutUsVideo from "../../../assets/new-images/about_us_1.mp4";

const AboutHeroSection = () => {
  const { HERO } = ABOUT_US_CONSTANTS;
  return (
    <section className={styles.heroSection}>
      <div className={styles.bannerImage}>
      <video
            src={aboutUsVideo}
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
          <p className={styles.subtitle}>
            {HERO.SUBTITLE}
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutHeroSection

