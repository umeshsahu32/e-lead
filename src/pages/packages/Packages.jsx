import { Link } from "react-router-dom";
import styles from "./Packages.module.css";
import { PACKAGES_CONSTANTS } from "./constants";
import { packages } from "./constants/data";
import packagesVideo from "../../assets/new-images/packages.mp4";

const Packages = () => {
  return (
    <div className={styles.packagesPage}>
      <section className={styles.heroSection}>
        <div className={styles.bannerImage}>
          <video
            src={packagesVideo}
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
            <h1 className={styles.title}>{PACKAGES_CONSTANTS.HERO_TITLE}</h1>
            <p className={styles.subtitle}>
              {PACKAGES_CONSTANTS.HERO_SUBTITLE}
            </p>
          </div>
        </div>
      </section>

      <section className={styles.packagesSection}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.badge}>{PACKAGES_CONSTANTS.BADGE}</span>
            <h2 className={styles.sectionTitle}>
              {PACKAGES_CONSTANTS.SECTION_TITLE}
            </h2>
            <p className={styles.sectionSubtitle}>
              {PACKAGES_CONSTANTS.SECTION_SUBTITLE}
            </p>
          </div>

          <div className={styles.packagesList}>
            {packages.map((pkg, index) => {
              const iconMap = {
                1: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                ),
                2: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                ),
                3: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
              };

              return (
                <div
                  key={pkg.id}
                  className={`${styles.packageCard} ${
                    pkg.recommended ? styles.recommended : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {pkg.recommended && (
                    <div className={styles.recommendedBadge}>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      {PACKAGES_CONSTANTS.RECOMMENDED}
                    </div>
                  )}

                  <div className={styles.packageInfo}>
                    <div className={styles.packageIcon}>{iconMap[pkg.id]}</div>
                    <h3 className={styles.packageName}>{pkg.name}</h3>
                    <div className={styles.priceContainer}>
                      <span className={styles.price}>{pkg.price}</span>
                      <span className={styles.period}>{pkg.period}</span>
                    </div>
                    <p className={styles.packageDescription}>
                      {pkg.description}
                    </p>
                  </div>

                  <div className={styles.packageFeatures}>
                  <div className={styles.infoSectionsContainer}>
                      {pkg.bestForTitle && pkg.bestForItems && (
                        <div className={styles.infoSection}>
                          <h4 className={styles.infoSectionTitle}>
                            {pkg.bestForTitle}
                          </h4>
                          <ul className={styles.infoList}>
                            {pkg.bestForItems.map((item, index) => (
                              <li key={index} className={styles.infoItem}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {(pkg.s1DoesBestTitle || pkg.s2DoesBestTitle || pkg.s3DoesBestTitle) && (
                        <div className={styles.infoSection}>
                          <h4 className={styles.infoSectionTitle}>
                            {pkg.s1DoesBestTitle || pkg.s2DoesBestTitle || pkg.s3DoesBestTitle}
                          </h4>
                          <ul className={styles.infoList}>
                            {(pkg.s1DoesBestItems || pkg.s2DoesBestItems || pkg.s3DoesBestItems)?.map((item, index) => (
                              <li key={index} className={styles.infoItem}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className={styles.featuresGrid}>
                      {pkg.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className={`${styles.featureItem} ${
                            feature.included ? styles.included : styles.excluded
                          }`}
                        >
                          <span className={styles.featureIcon}>
                            {feature.included ? (
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                              >
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            ) : (
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                              >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                            )}
                          </span>
                          <span className={styles.featureText}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>

                 
                    <Link to="/contact-us" className={styles.ctaButton}>
                      {PACKAGES_CONSTANTS.GET_STARTED}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
