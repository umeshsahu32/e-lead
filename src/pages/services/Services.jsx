import ServicesHero from './components/ServicesHero'
import ServicesContent from './components/ServicesContent'
import styles from './Services.module.css'

const Services = () => {
  return (
    <div className={styles.servicesPage}>
      <ServicesHero />
      <ServicesContent />
    </div>
  )
}

export default Services    