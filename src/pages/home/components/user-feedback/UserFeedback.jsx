import { useState, useEffect } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import styles from "./UserFeedback.module.css";
import { testimonials } from "../../constants/data";
import { HOME_CONSTANTS } from "../../constants";

const UserFeedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const { BADGE, TITLE, DESCRIPTION } = HOME_CONSTANTS.USER_FEEDBACK;

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileOrTablet(window.innerWidth <= 968);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  // On mobile/tablet show 1 card, on desktop show 2 cards
  const cardsToShow = isMobileOrTablet ? 1 : 2;
  const maxIndex = Math.max(0, testimonials.length - cardsToShow);
  const translatePercentage = isMobileOrTablet ? 100 : 50;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToTestimonial = (index) => {
    const validIndex = Math.min(index, maxIndex);
    setCurrentIndex(validIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000); // Auto slide every 3 seconds

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className={styles.userFeedback}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <span className={styles.badge}>{BADGE}</span>
            <h2 className={styles.title}>{TITLE}</h2>
            <p className={styles.subtitle}>{DESCRIPTION}</p>
          </div>
        </div>

        <div className={styles.testimonialsWrapper}>
          <div className={styles.testimonialsContainer}>
            <div
              className={styles.testimonialsSlider}
              style={{
                transform: `translateX(-${currentIndex * translatePercentage}%)`,
                transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className={styles.testimonialCard}>
                  <div className={styles.quoteIcon}>
                    <FaQuoteLeft />
                  </div>

                  <div className={styles.rating}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className={styles.star} />
                    ))}
                  </div>

                  <p className={styles.feedback}>{testimonial.feedback}</p>

                  <div className={styles.author}>
                    <div className={styles.authorImage}>
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className={styles.authorImg}
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex";
                          }}
                        />
                      ) : null}
                      <div
                        className={styles.initials}
                        style={{ display: testimonial.image ? "none" : "flex" }}
                      >
                        {getInitials(testimonial.name)}
                      </div>
                    </div>
                    <div className={styles.authorInfo}>
                      <div className={styles.authorName}>
                        {testimonial.name}
                      </div>
                      <div className={styles.authorRole}>
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.controls}>
            <button
              className={styles.navButton}
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M12.5 15L7.5 10L12.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className={styles.dots}>
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${
                    index === currentIndex ? styles.active : ""
                  }`}
                  onClick={() => goToTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              className={styles.navButton}
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserFeedback;
