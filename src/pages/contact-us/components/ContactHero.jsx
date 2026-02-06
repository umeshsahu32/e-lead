import styles from "./ContactHero.module.css";
import { CONTACT_US_CONSTANTS } from "../constant";
import contactUsVideo from "../../../assets/new-images/contact_us.mp4";

const ContactHero = () => {
  const { HERO } = CONTACT_US_CONSTANTS;
  return (
    <section className={styles.heroSection}>
      <div className={styles.bannerImage}>
      <video
            src={contactUsVideo}
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

export default ContactHero;
