import styles from "./WhatWeDo.module.css";
import { services } from "../../constants/data";
import { HOME_CONSTANTS } from "../../constants";

const WhatWeDo = () => {
  const { TITLE, DESCRIPTION } = HOME_CONSTANTS.WHAT_WE_DO;
  return (
    <section className={styles.whatWeDo}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>{TITLE}</h2>
            <p className={styles.subtitle}>{DESCRIPTION}</p>
          </div>
        </div>

        <div className={styles.servicesContainer}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles.serviceCard} ${
                index % 2 === 0 ? styles.leftAlign : styles.rightAlign
              }`}
            >
              <div className={styles.imageWrapper}>
                <div className={styles.imageContainer}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className={styles.image}
                  />
                  <div className={styles.imageOverlay} />
                </div>
                <div className={styles.numberBadge}>
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <div className={styles.contentWrapper}>
                <div className={styles.content}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <ul className={styles.pointsList}>
                    {service.points.map((point, pointIndex) => (
                      <li key={pointIndex} className={styles.pointItem}>
                        <span className={styles.checkIcon}>✓</span>
                        <span className={styles.pointText}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
