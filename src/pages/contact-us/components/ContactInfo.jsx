import styles from "./ContactInfo.module.css";
import { contactMethods } from "../constant/data.jsx";
import { CONTACT_US_CONSTANTS } from "../constant";

const ContactInfo = () => {
  const { CONTACT_INFO } = CONTACT_US_CONSTANTS;
  return (
    <section className={styles.contactInfoSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>{CONTACT_INFO.BADGE}</span>
          <h2 className={styles.title}>{CONTACT_INFO.TITLE}</h2>
          <p className={styles.subtitle}>{CONTACT_INFO.DESCRIPTION}</p>
        </div>

        <div className={styles.infoGrid}>
          {contactMethods.map((method) => (
            <a
              key={method.id}
              href={method.link}
              className={styles.infoCard}
              onClick={
                method.link === "#" ? (e) => e.preventDefault() : undefined
              }
            >
              <div className={styles.iconWrapper}>{method.icon}</div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{method.title}</h3>
                <p className={styles.cardContentText}>{method.content}</p>
                <p className={styles.cardSubtitle}>{method.subtitle}</p>
              </div>
              <div className={styles.cardArrow}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
