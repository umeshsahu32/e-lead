import styles from "./ServicesContent.module.css";
import { services } from "../constants/data";
import { SERVICES_CONSTANTS } from "../constants";

const ServicesContent = () => {
  return (
    <section className={styles.servicesContent}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>{SERVICES_CONSTANTS.BADGE}</span>
          <h2 className={styles.title}>{SERVICES_CONSTANTS.TITLE}</h2>
          <p className={styles.subtitle}>{SERVICES_CONSTANTS.SUBTITLE}</p>
        </div>

        <div className={styles.servicesList}>
          {services.map((service, index) => (
            <div key={service.id} className={styles.serviceCard}>
              {/* Service 1: Title left, Image right */}
              {service.id === 1 && (
                <div
                  className={`${styles.headerSection} ${styles.service1Header}`}
                >
                  <div className={styles.titleSection}>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <p className={styles.serviceDescription}>
                      {service.description}
                    </p>
                  </div>
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
                </div>
              )}

              {/* Service 2 & 3: Image left, Title right */}
              {(service.id === 2 || service.id === 3) && (
                <div
                  className={`${styles.headerSection} ${styles.service2Header}`}
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
                  <div className={styles.titleSection}>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <p className={styles.serviceDescription}>
                      {service.description}
                    </p>
                  </div>
                </div>
              )}

              <div className={styles.contentWrapper}>
                <div className={styles.content}>
                  {service.id === 1 && (
                    <>
                      {/* 3-column grid for What it is, Best for, What you receive */}
                      <div className={styles.threeColumnGrid}>
                        {service.whatItIs && (
                          <div className={styles.section}>
                            <h4 className={styles.sectionTitle}>
                              {service.whatItIs.title}
                            </h4>
                            {/* <p className={styles.sectionDescription}>{service.whatItIs.description}</p> */}
                            <ul className={styles.pointsList}>
                              {service.whatItIs.points.map((point, idx) => (
                                <li key={idx} className={styles.pointItem}>
                                  <span className={styles.bullet}>•</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {service.bestFor && (
                          <div className={styles.section}>
                            <h4 className={styles.sectionTitle}>
                              {service.bestFor.title}
                            </h4>
                            <ul className={styles.pointsList}>
                              {service.bestFor.points.map((point, idx) => (
                                <li key={idx} className={styles.pointItem}>
                                  <span className={styles.bullet}>•</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {service.whatYouReceive && (
                          <div className={styles.section}>
                            <h4 className={styles.sectionTitle}>
                              {service.whatYouReceive.title}
                            </h4>
                            <ul className={styles.pointsList}>
                              {service.whatYouReceive.points.map(
                                (point, idx) => (
                                  <li key={idx} className={styles.pointItem}>
                                    <span className={styles.bullet}>•</span>
                                    <span>{point}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                      </div>
                      {service.tagline && (
                        <p className={styles.tagline}>{service.tagline}</p>
                      )}
                    </>
                  )}
                  {service.id === 2 && (
                    <>
                      {/* 2x2 grid for 4 sections */}
                      <div className={styles.twoColumnGrid}>
                        {/* Section 1: Qualified eLeads */}
                        {service.dashboardFeatures &&
                          service.dashboardFeatures.qualified && (
                            <div className={styles.section}>
                              <h4 className={styles.sectionTitle}>
                                {service.dashboardFeatures.qualified.title}
                              </h4>
                              <ul className={styles.pointsList}>
                                {service.dashboardFeatures.qualified.points.map(
                                  (point, idx) => (
                                    <li key={idx} className={styles.pointItem}>
                                      <span className={styles.checkIcon}>
                                        ✓
                                      </span>
                                      <span>{point}</span>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}

                        {/* Section 2: Unqualified Leads */}
                        {service.dashboardFeatures &&
                          service.dashboardFeatures.unqualified && (
                            <div className={styles.section}>
                              <h4 className={styles.sectionTitle}>
                                {service.dashboardFeatures.unqualified.title}
                              </h4>
                              <ul className={styles.pointsList}>
                                {service.dashboardFeatures.unqualified.points.map(
                                  (point, idx) => (
                                    <li key={idx} className={styles.pointItem}>
                                      <span className={styles.crossIcon}>
                                        ✖
                                      </span>
                                      <span>{point}</span>
                                    </li>
                                  )
                                )}
                              </ul>
                              {service.dashboardFeatures.note && (
                                <p className={styles.note}>
                                  {service.dashboardFeatures.note}
                                </p>
                              )}
                            </div>
                          )}

                        {/* Section 3: Evidence-Backed Lead Records */}
                        {service.evidenceBacked && (
                          <div className={styles.section}>
                            <h4 className={styles.sectionTitle}>
                              {service.evidenceBacked.title}
                            </h4>
                            <p className={styles.sectionDescription}>
                              {service.evidenceBacked.description}
                            </p>
                            <ul className={styles.pointsList}>
                              {service.evidenceBacked.points.map(
                                (point, idx) => (
                                  <li key={idx} className={styles.pointItem}>
                                    <span className={styles.bullet}>•</span>
                                    <span>{point}</span>
                                  </li>
                                )
                              )}
                            </ul>
                            {service.evidenceBacked.ensures && (
                              <>
                                <p className={styles.ensuresTitle}>
                                  This ensures:
                                </p>
                                <ul className={styles.pointsList}>
                                  {service.evidenceBacked.ensures.map(
                                    (point, idx) => (
                                      <li
                                        key={idx}
                                        className={styles.pointItem}
                                      >
                                        <span className={styles.bullet}>•</span>
                                        <span>{point}</span>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </>
                            )}
                          </div>
                        )}

                        {/* Section 4: Designed for Sales & Decision Makers */}
                        {service.designedFor && (
                          <div className={styles.section}>
                            <h4 className={styles.sectionTitle}>
                              {service.designedFor.title}
                            </h4>
                            <p className={styles.sectionDescription}>
                              {service.designedFor.description}
                            </p>
                            <ul className={styles.pointsList}>
                              {service.designedFor.points.map((point, idx) => (
                                <li key={idx} className={styles.pointItem}>
                                  <span className={styles.bullet}>•</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                            {service.designedFor.tagline && (
                              <p className={styles.note}>
                                {service.designedFor.tagline}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    </>
                  )}
                  {service.id === 3 && (
                    <>
                      {service.tagline && (
                        <p className={styles.tagline}>{service.tagline}</p>
                      )}

                      {/* 2x2 grid for 4 subsections */}
                      {service.subsections && (
                        <div className={styles.twoColumnGrid}>
                          {service.subsections.map((subsection, subIdx) => (
                            <div key={subIdx} className={styles.subsectionCard}>
                              <h4 className={styles.subsectionMainTitle}>
                                {subsection.title}
                              </h4>
                              {subsection.description && (
                                <p className={styles.subsectionDescription}>
                                  {subsection.description}
                                </p>
                              )}

                              {subsection.whatItMeans && (
                                <div className={styles.subsection}>
                                  <h5 className={styles.subsectionTitle}>
                                    {subsection.whatItMeans.title}
                                  </h5>
                                  <ul className={styles.pointsList}>
                                    {subsection.whatItMeans.points.map(
                                      (point, idx) => (
                                        <li
                                          key={idx}
                                          className={styles.pointItem}
                                        >
                                          <span className={styles.bullet}>
                                            •
                                          </span>
                                          <span>{point}</span>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )}

                              {subsection.advantages && (
                                <div className={styles.subsection}>
                                  <h5 className={styles.subsectionTitle}>
                                    {subsection.advantages.title}
                                  </h5>
                                  <ul className={styles.pointsList}>
                                    {subsection.advantages.points.map(
                                      (point, idx) => (
                                        <li
                                          key={idx}
                                          className={styles.pointItem}
                                        >
                                          <span className={styles.bullet}>
                                            •
                                          </span>
                                          <span>{point}</span>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )}

                              {subsection.customization && (
                                <div className={styles.subsection}>
                                  <h5 className={styles.subsectionTitle}>
                                    {subsection.customization.title}
                                  </h5>
                                  <ul className={styles.pointsList}>
                                    {subsection.customization.points.map(
                                      (point, idx) => (
                                        <li
                                          key={idx}
                                          className={styles.pointItem}
                                        >
                                          <span className={styles.bullet}>
                                            •
                                          </span>
                                          <span>{point}</span>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )}

                              {subsection.ensures && (
                                <div className={styles.subsection}>
                                  <h5 className={styles.subsectionTitle}>
                                    {subsection.ensures.title}
                                  </h5>
                                  <ul className={styles.pointsList}>
                                    {subsection.ensures.points.map(
                                      (point, idx) => (
                                        <li
                                          key={idx}
                                          className={styles.pointItem}
                                        >
                                          <span className={styles.bullet}>
                                            •
                                          </span>
                                          <span>{point}</span>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )}

                              {subsection.trafficSources && (
                                <div className={styles.subsection}>
                                  <h5 className={styles.subsectionTitle}>
                                    {subsection.trafficSources.title}
                                  </h5>
                                  <ul className={styles.pointsList}>
                                    {subsection.trafficSources.points.map(
                                      (point, idx) => (
                                        <li
                                          key={idx}
                                          className={styles.pointItem}
                                        >
                                          <span className={styles.bullet}>
                                            •
                                          </span>
                                          <span>{point}</span>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )}

                              {subsection.note && (
                                <p className={styles.note}>{subsection.note}</p>
                              )}

                              {subsection.tagline && (
                                <p className={styles.tagline}>
                                  {subsection.tagline}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesContent;
