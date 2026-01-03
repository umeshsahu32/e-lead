import styles from "./AboutELead.module.css";
import { ABOUT_US_CONSTANTS } from "../constants";
import {
  FaBuilding,
  FaGraduationCap,
  FaBriefcase,
  FaHospital,
  FaStore,
  FaGlobe,
} from "react-icons/fa";

const AboutELead = () => {
  const {
    INTRO,
    WHY_BUILT,
    PHILOSOPHY,
    WHAT_MAKES_DIFFERENT,
    TECHNOLOGY,
    INDUSTRY,
    TRANSPARENCY,
    MISSION,
    VISION,
    CLOSING,
  } = ABOUT_US_CONSTANTS;

  // Map industries to icons
  const industryIcons = [
    FaBuilding, // Real Estate & Property
    FaGraduationCap, // EdTech & Professional Training
    FaBriefcase, // B2B & Enterprise Services
    FaHospital, // Healthcare & Clinics
    FaStore, // Local & Regional Services
    FaGlobe, // Overseas B2B markets
  ];

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Introduction Section */}
        <div className={styles.introSection}>
          <p className={styles.introText}>{INTRO.DESCRIPTION}</p>
        </div>

        {/* Why Built Section */}
        <div className={styles.contentBlock}>
          <div className={styles.blockHeader}>
            <span className={styles.badge}>{WHY_BUILT.BADGE}</span>
            <h2 className={styles.blockTitle}>{WHY_BUILT.TITLE}</h2>
            <p className={styles.blockDescription}>{WHY_BUILT.DESCRIPTION}</p>
          </div>
          <ul className={styles.bulletList}>
            {WHY_BUILT.PROBLEMS.map((problem, index) => (
              <li key={index} className={styles.bulletItem}>
                {/* <span className={styles.bulletIcon}>•</span> */}
                <span>{problem}</span>
              </li>
            ))}
          </ul>
          <p className={styles.blockConclusion}>{WHY_BUILT.CONCLUSION}</p>
        </div>

        {/* Philosophy Section */}
        <div className={styles.contentBlock}>
          <div className={styles.blockHeader}>
            <span className={styles.badge}>{PHILOSOPHY.BADGE}</span>
            <h2 className={styles.blockTitle}>{PHILOSOPHY.TITLE}</h2>
            <p className={styles.blockDescription}>{PHILOSOPHY.DESCRIPTION}</p>
          </div>
          <div className={styles.beliefsContainer}>
            {PHILOSOPHY.BELIEFS.map((belief, index) => (
              <div key={index} className={styles.beliefCard}>
                <span className={styles.checkIcon}>✓</span>
                <span>{belief}</span>
              </div>
            ))}
          </div>
          <p className={styles.blockConclusion}>{PHILOSOPHY.CONCLUSION}</p>
        </div>

        {/* What Makes Different Section */}
        <div className={styles.contentBlock}>
          <div className={styles.blockHeader}>
            <span className={styles.badge}>{WHAT_MAKES_DIFFERENT.BADGE}</span>
            <h2 className={styles.blockTitle}>{WHAT_MAKES_DIFFERENT.TITLE}</h2>
            <p className={styles.blockDescription}>
              {WHAT_MAKES_DIFFERENT.DESCRIPTION}
            </p>
          </div>
          <ul className={styles.featureList}>
            {WHAT_MAKES_DIFFERENT.FEATURES.map((feature, index) => (
              <li key={index} className={styles.featureItem}>
                <span className={styles.featureIcon}>→</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <p className={styles.tagline}>{WHAT_MAKES_DIFFERENT.TAGLINE}</p>
        </div>

        {/* Technology Section */}
        <div className={styles.contentBlock}>
          <div className={styles.blockHeader}>
            <span className={styles.badge}>{TECHNOLOGY.BADGE}</span>
            <h2 className={styles.blockTitle}>{TECHNOLOGY.TITLE}</h2>
            <p className={styles.blockDescription}>{TECHNOLOGY.DESCRIPTION}</p>
          </div>
          <ul className={styles.trainingList}>
            {TECHNOLOGY.TRAINING_AREAS.map((area, index) => (
              <li key={index} className={styles.trainingItem}>
                <span className={styles.trainingIcon}>▸</span>
                <span>{area}</span>
              </li>
            ))}
          </ul>
          <p className={styles.blockConclusion}>{TECHNOLOGY.CONCLUSION}</p>
        </div>

        {/* Industry Section */}
        <div className={styles.contentBlock}>
          <div className={styles.blockHeader}>
            <span className={styles.badge}>{INDUSTRY.BADGE}</span>
            <h2 className={styles.blockTitle}>{INDUSTRY.TITLE}</h2>
            <p className={styles.blockDescription}>{INDUSTRY.DESCRIPTION}</p>
          </div>
          <div className={styles.industriesGrid}>
            {INDUSTRY.INDUSTRIES.map((industry, index) => {
              const IconComponent = industryIcons[index];
              return (
                <div key={index} className={styles.industryCard}>
                  <IconComponent className={styles.industryIcon} />
                  <span>{industry}</span>
                </div>
              );
            })}
          </div>
          <p className={styles.blockConclusion}>{INDUSTRY.CONCLUSION}</p>
        </div>

        {/* Transparency Section */}
        <div className={styles.contentBlock}>
          <div className={styles.blockHeader}>
            <span className={styles.badge}>{TRANSPARENCY.BADGE}</span>
            <h2 className={styles.blockTitle}>{TRANSPARENCY.TITLE}</h2>
            <p className={styles.blockDescription}>
              {TRANSPARENCY.DESCRIPTION}
            </p>
          </div>
          <ul className={styles.featureList}>
            {TRANSPARENCY.FEATURES.map((feature, index) => (
              <li key={index} className={styles.featureItem}>
                <span className={styles.featureIcon}>✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <p className={styles.blockConclusion}>{TRANSPARENCY.CONCLUSION}</p>
        </div>

        {/* Mission and Vision Grid */}
        <div className={styles.missionVisionGrid}>
          <div className={styles.missionCard}>
            <span className={styles.badge}>{MISSION.BADGE}</span>
            <h3 className={styles.cardTitle}>{MISSION.TITLE}</h3>
            <p className={styles.cardDescription}>{MISSION.DESCRIPTION}</p>
            <ul className={styles.cardList}>
              {MISSION.GOALS.map((goal, index) => (
                <li key={index} className={styles.cardListItem}>
                  <span className={styles.cardIcon}>•</span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
            <p className={styles.cardConclusion}>{MISSION.CONCLUSION}</p>
          </div>

          <div className={styles.visionCard}>
            <span className={styles.badge}>{VISION.BADGE}</span>
            <h3 className={styles.cardTitle}>{VISION.TITLE}</h3>
            <p className={styles.cardDescription}>{VISION.DESCRIPTION}</p>
            <ul className={styles.cardList}>
              {VISION.ASPIRATIONS.map((aspiration, index) => (
                <li key={index} className={styles.cardListItem}>
                  <span className={styles.cardIcon}>•</span>
                  <span>{aspiration}</span>
                </li>
              ))}
            </ul>
            <p className={styles.cardConclusion}>{VISION.CONCLUSION}</p>
          </div>
        </div>

        {/* Closing Section */}
        <div className={styles.closingSection}>
          <h2 className={styles.closingTitle}>{CLOSING.TITLE}</h2>
          <p className={styles.closingDescription}>{CLOSING.DESCRIPTION}</p>
          <div className={styles.closingBeliefs}>
            {CLOSING.BELIEFS.map((belief, index) => (
              <div key={index} className={styles.closingBeliefCard}>
                <span className={styles.closingIcon}>✓</span>
                <span>{belief}</span>
              </div>
            ))}
          </div>
          <p className={styles.closingConclusion}>{CLOSING.CONCLUSION}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutELead;
