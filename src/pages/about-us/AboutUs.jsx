import AboutHeroSection from './components/AboutHeroSection'
import AboutELead from './components/AboutELead'
import AboutTeam from './components/AboutTeam'
import styles from './AboutUs.module.css'

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <AboutHeroSection />
      <AboutELead />
      <AboutTeam />
    </div>
  )
}

export default AboutUs