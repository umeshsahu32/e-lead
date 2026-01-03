import { useState } from "react";
import styles from "./ContactForm.module.css";
import { CONTACT_US_CONSTANTS } from "../constant";

const ContactForm = () => {
  const { CONTACT_FORM } = CONTACT_US_CONSTANTS;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section className={styles.contactFormSection}>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <div className={styles.formHeader}>
            <span className={styles.badge}>{CONTACT_FORM.BADGE}</span>
            <h2 className={styles.title}>{CONTACT_FORM.TITLE}</h2>
            <p className={styles.subtitle}>{CONTACT_FORM.DESCRIPTION}</p>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  {CONTACT_FORM.FULL_NAME_LABEL}{" "}
                  <span className={styles.required}>
                    {CONTACT_FORM.REQUIRED_FIELD}
                  </span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder={CONTACT_FORM.FULL_NAME_PLACEHOLDER}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  {CONTACT_FORM.EMAIL_LABEL}{" "}
                  <span className={styles.required}>
                    {CONTACT_FORM.REQUIRED_FIELD}
                  </span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder={CONTACT_FORM.EMAIL_PLACEHOLDER}
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  {CONTACT_FORM.PHONE_LABEL}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder={CONTACT_FORM.PHONE_PLACEHOLDER}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>
                  {CONTACT_FORM.SUBJECT_LABEL}{" "}
                  <span className={styles.required}>
                    {CONTACT_FORM.REQUIRED_FIELD}
                  </span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder={CONTACT_FORM.SUBJECT_PLACEHOLDER}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                {CONTACT_FORM.MESSAGE_LABEL}{" "}
                <span className={styles.required}>
                  {CONTACT_FORM.REQUIRED_FIELD}
                </span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                placeholder={CONTACT_FORM.MESSAGE_PLACEHOLDER}
                rows="6"
                required
              ></textarea>
            </div>

            {submitStatus === "success" && (
              <div className={styles.successMessage}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>{CONTACT_FORM.SUBMIT_SUCCESS_TEXT}</span>
              </div>
            )}

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className={styles.spinner}></span>
                  {CONTACT_FORM.BUTTON_LOADING_TEXT}
                </>
              ) : (
                <>
                  {CONTACT_FORM.BUTTON_TEXT}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
