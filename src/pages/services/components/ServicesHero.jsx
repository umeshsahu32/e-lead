import styles from './ServicesHero.module.css'

const ServicesHero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.bannerImage}>
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80" 
          alt="Services Banner" 
          className={styles.image}
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

