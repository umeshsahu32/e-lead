import { Link } from "react-router-dom";
import styles from "./SuccessStories.module.css";
import { cases as successStories, stats } from "../../constants/data";
import { HOME_CONSTANTS } from "../../constants";

const SuccessStories = () => {
  const {
    SUCCESS_STORIES_BADGE,
    TITLE,
    DESCRIPTION,
    EXPLORE_BTN_TEXT,
    STATS_NUMBER,
    STATS_LABEL,
  } = HOME_CONSTANTS.SUCCESS_STORIES;
  return (
    <section className={styles.successStories}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <span className={styles.badge}>{SUCCESS_STORIES_BADGE}</span>
            <h2 className={styles.title}>{TITLE}</h2>
            <p className={styles.subtitle}>{DESCRIPTION}</p>
          </div>

          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.storiesGrid}>
          {successStories.slice(0, 3).map((story) => (
            <div key={story.id} className={styles.storyCard}>
              <div className={styles.cardHeader}>
                <div className={styles.categoryTag}>{story.category}</div>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.section}>
                  <h4 className={styles.sectionTitle}>
                    <span className={styles.sectionIcon}>🎯</span>
                    Problem
                  </h4>
                  <p className={styles.sectionText}>{story.problem}</p>
                </div>

                <div className={styles.section}>
                  <h4 className={styles.sectionTitle}>
                    <span className={styles.sectionIcon}>💡</span>
                    Solution
                  </h4>
                  <p className={styles.sectionText}>{story.solution}</p>
                </div>

                <div className={styles.section}>
                  <h4 className={styles.sectionTitle}>
                    <span className={styles.sectionIcon}>✨</span>
                    Outcome
                  </h4>
                  <p className={styles.sectionText}>{story.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.exploreSection}>
          <Link to="/case-study" className={styles.exploreBtn}>
            <span>{EXPLORE_BTN_TEXT}</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
