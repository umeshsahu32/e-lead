import styles from "./ContactHero.module.css";
import { CONTACT_US_CONSTANTS } from "../constant";

const ContactHero = () => {
  const { HERO } = CONTACT_US_CONSTANTS;
  return (
    <section className={styles.heroSection}>
      <div className={styles.bannerImage}>
        <img
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
          alt="Contact Us Banner"
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

export default ContactHero;
