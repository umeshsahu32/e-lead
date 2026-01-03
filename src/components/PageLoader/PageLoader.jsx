import React from "react";
import styles from "./PageLoader.module.css";

const PageLoader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderWrapper}>
        <div className={styles.spinner}>
          <div className={styles.spinnerRing}></div>
          <div className={styles.spinnerRing}></div>
          <div className={styles.spinnerRing}></div>
        </div>
        <div className={styles.loaderText}>
          <span className={styles.text}>Loading</span>
          <span className={styles.dots}>
            <span className={styles.dot}>.</span>
            <span className={styles.dot}>.</span>
            <span className={styles.dot}>.</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
