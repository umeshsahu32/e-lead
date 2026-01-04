import { useEffect, useRef } from "react";
import styles from "./ContactForm.module.css";
import { CONTACT_US_CONSTANTS } from "../constant";

const ContactForm = () => {
  const { CONTACT_FORM } = CONTACT_US_CONSTANTS;
  const formRef = useRef(null);
  const sectionRef = useRef(null);

  // Handle scroll to contact form when hash is present
  useEffect(() => {
    if (window.location.hash === "#contact-form" && sectionRef.current) {
      // Small delay to ensure page is fully rendered
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, []);

  useEffect(() => {
    const applyStyles = () => {
      const wrappers = formRef.current?.querySelectorAll(
        ".b24-form-wrapper, .b24-form-container, .b24-form-content"
      );
      wrappers?.forEach((el) => {
        el.style.setProperty("background", "transparent", "important");
        el.style.setProperty("width", "100%", "important");
        el.style.setProperty("maxWidth", "900px", "important");
        el.style.setProperty("margin", "0 auto", "important");
      });
    };

    const existing = formRef.current?.querySelector(
      'script[src^="https://cdn.bitrix24.in/b30888757/crm/form/loader_395.js"]'
    );
    if (!existing) {
      const script = document.createElement("script");
      script.async = true;
      script.src =
        "https://cdn.bitrix24.in/b30888757/crm/form/loader_395.js" +
        "?" +
        ((Date.now() / 180000) | 0);
      script.setAttribute("data-b24-form", "inline/395/9pk2qz");
      script.setAttribute("data-skip-moving", "true");
      formRef.current?.appendChild(script);
    }

    const observer = new MutationObserver(applyStyles);
    if (formRef.current) {
      observer.observe(formRef.current, { childList: true, subtree: true });
    }
    const interval = setInterval(applyStyles, 200);
    const timeout = setTimeout(() => clearInterval(interval), 3000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section
      className={styles.contactFormSection}
      id="contact-form"
      ref={sectionRef}
    >
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <div className={styles.formHeader}>
            <span className={styles.badge}>{CONTACT_FORM.BADGE}</span>
            <h2 className={styles.title}>{CONTACT_FORM.TITLE}</h2>
            <p className={styles.subtitle}>{CONTACT_FORM.DESCRIPTION}</p>
          </div>

          <div ref={formRef} className={styles.bitrixFormContainer} />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
