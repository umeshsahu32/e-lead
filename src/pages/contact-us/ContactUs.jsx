import ContactHero from './components/ContactHero'
import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'
import ContactMap from './components/ContactMap'
import styles from './ContactUs.module.css'

const ContactUs = () => {
  return (
    <div className={styles.contactUs}>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      {/* <ContactMap /> */}
    </div>
  )
}

export default ContactUs    