import { useState, useEffect } from "react";
import styles from "./Carousel.module.css";
import { banners } from "../../constants/data";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [banners.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className={styles.carousel}>
      <div className={styles.carouselContainer}>
        <div
          className={styles.slidesWrapper}
          style={{
            transform: `translateX(-${currentIndex * 33.333333}%)`,
            transition: "transform 300ms ease-in-out",
          }}
        >
          {banners.map((banner, index) => (
            <div key={index} className={styles.slide}>
              <div className={styles.imageContainer}>
                <img
                  src={banner.image}
                  alt={banner.title}
                  className={styles.image}
                />
                <div className={styles.overlay} />
              </div>
              <div className={styles.content}>
                <h2 className={styles.title}>{banner.title}</h2>
                <p className={styles.subtitle}>{banner.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className={styles.dotsContainer}>
        {banners.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
