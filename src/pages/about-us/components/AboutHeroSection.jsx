import styles from './AboutHeroSection.module.css'
import { ABOUT_US_CONSTANTS } from "../constants";

const AboutHeroSection = () => {
  const { HERO } = ABOUT_US_CONSTANTS;
  return (
    <section className={styles.heroSection}>
      <div className={styles.bannerImage}>
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80" 
          alt="About elead Banner" 
          className={styles.image}
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

