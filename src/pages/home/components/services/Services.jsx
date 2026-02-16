import { useState, useEffect } from "react";
import styles from "./Services.module.css";
import { services_2 as services } from "../../constants/data";
import { HOME_CONSTANTS } from "../../constants";

const Services = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const { SERVICE_TITLE, TITLE, DESCRIPTION, SHOW_MORE, SHOW_LESS } =
    HOME_CONSTANTS.SERVICES;

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileOrTablet(window.innerWidth <= 968);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <span className={styles.badge}>{SERVICE_TITLE}</span>
            <h2 className={styles.title}>{TITLE}</h2>
            <p className={styles.subtitle}>{DESCRIPTION}</p>
          </div>
        </div>

        <div
          className={styles.servicesGrid}
          style={
            isMobileOrTablet
              ? {}
              : {
                  gridTemplateColumns: expandedId
                    ? services
                        .map((s) => (expandedId === s.id ? "2fr" : "0.5fr"))
                        .join(" ")
                    : "repeat(3, 1fr)",
                }
          }
        >
          {services.map((service) => {
            const isExpanded = expandedId === service.id;
            const isCollapsed = expandedId && !isExpanded;
            return (
              <div
                key={service.id}
                className={`${styles.serviceCard} ${
                  isExpanded ? styles.expanded : ""
                } ${isCollapsed ? styles.collapsed : ""}`}
              >
                <div className={styles.cardFront}>
                  <div className={styles.imageContainer}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className={styles.image}
                    />
                    <div className={styles.imageOverlay} />
                    <div className={styles.serviceBadge}>
                      <span className={styles.badgeNumber}>0{service.id}</span>
                    </div>
                  </div>

                  <div className={styles.cardInfo}>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <p className={styles.cardDescription}>
                      {service.shortDescription}
                    </p>

                    <div
                      className={`${styles.expandedContent} ${
                        isExpanded ? styles.show : ""
                      }`}
                    >
                      {/* Qbot Service - What it is and Why it matters */}
                      {service.whyItMatters && (
                        <>
                          <div className={styles.whatItIsSection}>
                            {/* Trained on list (for Qbot) */}
                            {service.whatItIs.trainedOn && (
                              <div className={styles.trainedOnSection}>
                                <p className={styles.trainedOnLabel}>
                                  Qbot is trained on:
                                </p>
                                <ul className={styles.trainedOnList}>
                                  {service.whatItIs.trainedOn.map(
                                    (item, index) => (
                                      <li
                                        key={index}
                                        className={styles.trainedOnItem}
                                      >
                                        <span className={styles.bullet}>•</span>
                                        <span>{item}</span>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            )}

                            {/* Principles (for Qbot) */}
                            {service.whatItIs.principles && (
                              <div className={styles.principlesSection}>
                                {service.whatItIs.principles.map(
                                  (principle, index) => (
                                    <p key={index} className={styles.principle}>
                                      {principle}
                                    </p>
                                  )
                                )}
                              </div>
                            )}
                          </div>

                          {/* Why it matters section (for Qbot) */}
                          <div className={styles.whyItMattersSection}>
                            <h4 className={styles.sectionTitle}>
                              Why it matters
                            </h4>
                            <ul className={styles.whyItMattersList}>
                              {service.whyItMatters.map((item, index) => (
                                <li
                                  key={index}
                                  className={styles.whyItMattersItem}
                                >
                                  <span className={styles.checkIcon}>✓</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      )}

                      {/* Dashboard Service */}
                      {service.dashboardMetrics && !service.whyItMatters && (
                        <div className={styles.dashboardSection}>
                          
                          <h4 className={styles.sectionTitle}>
                            What You See Inside Your eLead Dashboard
                          </h4>
                          <p className={styles.sectionDescription}>
                            Your dashboard includes key campaign metrics, such
                            as:
                          </p>
                          <ul className={styles.dashboardList}>
                            {service.dashboardMetrics.map((metric, index) => (
                              <li key={index} className={styles.dashboardItem}>
                                <span className={styles.bullet}>•</span>
                                <span>{metric}</span>
                              </li>
                            ))}
                          </ul>
                          {service.note && (
                            <p className={styles.note}>{service.note}</p>
                          )}
                        </div>
                      )}

                      {/* Industry Campaigns Service */}
                      {service.supportedIndustries && !service.whyItMatters && (
                        <div className={styles.industriesSection}>
                          
                          <p className={styles.industriesLabel}>
                            We currently support:
                          </p>
                          <ul className={styles.industriesList}>
                            {service.supportedIndustries.map(
                              (industry, index) => (
                                <li key={index} className={styles.industryItem}>
                                  <span className={styles.bullet}>•</span>
                                  <span>{industry}</span>
                                </li>
                              )
                            )}
                          </ul>
                          <p className={styles.industriesLabel}>
                            Each industry has:
                          </p>
                          <ul className={styles.industryFeaturesList}>
                            {service.industryFeatures.map((feature, index) => (
                              <li
                                key={index}
                                className={styles.industryFeatureItem}
                              >
                                <span className={styles.checkIcon}>✓</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <button
                      className={styles.knowMoreBtn}
                      onClick={() => toggleExpand(service.id)}
                    >
                      <span>{isExpanded ? SHOW_LESS : SHOW_MORE}</span>
                      <span
                        className={`${styles.arrow} ${
                          isExpanded ? styles.rotated : ""
                        }`}
                      >
                        ↓
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
