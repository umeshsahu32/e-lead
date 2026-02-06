import styles from './ServicesHero.module.css'
import servicesVideo from "../../../assets/new-images/services.mp4";

const ServicesHero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.bannerImage}>
      <video
            src={servicesVideo}
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
          <h1 className={styles.title}>Our Services</h1>
          <p className={styles.subtitle}>
            Comprehensive digital solutions to transform your business and drive growth
          </p>
        </div>
      </div>
    </section>
  )
}

export default ServicesHero

