import styles from './ContactMap.module.css'

const ContactMap = () => {
  return (
    <section className={styles.mapSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Our Location</span>
          <h2 className={styles.title}>Find Us On The Map</h2>
          <p className={styles.subtitle}>
            Visit our office or get directions to our location
          </p>
        </div>

        <div className={styles.mapWrapper}>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841328018875!2d-73.98811768459377!3d40.75889597932699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="E-Lead Office Location"
              className={styles.map}
            ></iframe>
          </div>

          <div className={styles.mapInfo}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h4 className={styles.infoTitle}>Office Address</h4>
                <p className={styles.infoText}>123 Business Street<br />New York, NY 10001<br />United States</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h4 className={styles.infoTitle}>Opening Hours</h4>
                <p className={styles.infoText}>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h4 className={styles.infoTitle}>Contact</h4>
                <p className={styles.infoText}>Phone: +1 (555) 123-4567<br />Email: info@e-lead.com<br />Emergency: 24/7 Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMap

