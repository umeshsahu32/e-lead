import { useState } from "react";
import styles from "./CaseStudyGrid.module.css";
import { caseStudies, categories } from "../constants/data";
import { CASE_STUDY_CONSTANTS } from "../constants";

const CaseStudyGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { CASE_STUDY_GRID } = CASE_STUDY_CONSTANTS;

  const filteredCaseStudies = selectedCategory
    ? caseStudies.filter((study) => study.category_id === selectedCategory)
    : caseStudies;

  const getCategoryName = (category) => {
    return category || "All";
  };
 
  return (
    <section className={styles.caseStudySection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>{CASE_STUDY_GRID.BADGE}</span>
          <h2 className={styles.title}>{CASE_STUDY_GRID.TITLE}</h2>
          <p className={styles.subtitle}>{CASE_STUDY_GRID.DESCRIPTION}</p>
        </div>

        <div className={styles.filterSection}>
          <button
            className={`${styles.filterButton} ${
              selectedCategory === null ? styles.active : ""
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${styles.filterButton} ${
                selectedCategory === category.id ? styles.active : ""
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className={styles.caseStudyGrid}>
          {filteredCaseStudies.map((study, index) => {
            // Create dynamic card sizes - alternating patterns
            const cardSize = index % 6;
            let cardClass = styles.caseStudyCard;
            
            if (cardSize === 0) {
              cardClass += ` ${styles.cardLarge}`;
            } else if (cardSize === 1 || cardSize === 2) {
              cardClass += ` ${styles.cardMedium}`;
            } else {
              cardClass += ` ${styles.cardSmall}`;
            }

            // Alternate card styles for visual interest
            const cardStyle = index % 3 === 0 ? styles.cardAccent : '';
            const finalCardClass = `${cardClass} ${cardStyle}`;

            return (
              <div
                key={study.id}
                className={finalCardClass}
                style={{ animationDelay: `${(index % 6) * 0.1}s` }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.categoryBadge}>
                    {getCategoryName(study.category)}
                  </div>
                  <div className={styles.cardNumber}>#{study.id}</div>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>
                      <span className={styles.sectionIcon}>🎯</span>
                      Problem
                    </h4>
                    <p className={styles.sectionText}>{study.problem}</p>
                  </div>

                  <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>
                      <span className={styles.sectionIcon}>💡</span>
                      Solution
                    </h4>
                    <p className={styles.sectionText}>{study.solution}</p>
                  </div>

                  <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>
                      <span className={styles.sectionIcon}>✨</span>
                      Outcome
                    </h4>
                    <p className={styles.sectionText}>{study.outcome}</p>
                  </div>
                </div>

                <div className={styles.cardFooter}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyGrid;
