import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";
import styles from "./Footer.module.css";
import logo from "../../assets/logo/logo_color.png";

const Footer = () => {
  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/packages", label: "Packages" },
    { path: "/case-study", label: "Case Study" },
    { path: "/contact-us", label: "Contact Us" },
  ];

  const contactInfo = {
    address: {
      label:
        "Leadsync Technologies,\nFirst Floor, Flat No 101, RR Heights, East Srinivas Nagar, Ameerpet, Hyderabad, Telangana – 500038",
      icon: <FaMapMarkerAlt />,
    },
    phoneNumber: {
      label: "+91 73306 36644",
      icon: <FaPhone />,
    },
    emailAddress: {
      label: "hello@elead.shop",
      icon: <FaEnvelope />,
    },
    socialMedia: {
      instagram: {
        label: "Instagram",
        icon: <FaInstagram />,
        link: "https://www.instagram.com/elead.shop/",
      },
      facebook: {
        label: "Facebook",
        icon: <FaFacebook />,
        link: "https://www.facebook.com/profile.php?id=61585573326187",
      },
      linkedin: {
        label: "LinkedIn",
        icon: <FaLinkedin />,
        link: "https://www.linkedin.com/company/eleadindia/ ",
      },
    },
    description:
      "Transforming businesses with innovative digital solutions. We help you achieve remarkable growth through cutting-edge technology and creative strategies.",
    Quick_links: "Quick Links",
    Contact_us: "Contact Us",
    Follow_us: "Follow Us",
    Privacy_policy: "Privacy Policy",
    Terms_and_conditions: "Terms and Conditions",
    Copyright: "Copyright",
    All_rights_reserved: "All rights reserved.",
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Logo and Description */}
          <div className={styles.logoSection}>
            <Link to="/" className={styles.logo}>
              <img src={logo} alt="Logo" />
            </Link>
            <p className={styles.description}>{contactInfo.description}</p>
          </div>

          {/* Quick Links */}
          <div className={styles.linksSection}>
            <h3 className={styles.sectionTitle}>{contactInfo.Quick_links}</h3>
            <nav className={styles.linksNav}>
              {menuItems.map((item) => (
                <Link key={item.path} to={item.path} className={styles.link}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className={styles.contactSection}>
            <h3 className={styles.sectionTitle}>{contactInfo.Contact_us}</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  {contactInfo.address.icon}
                </div>
                <span className={styles.addressLabel}>{contactInfo.address.label}</span>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  {contactInfo.phoneNumber.icon}
                </div>
                <a
                  href={`tel:${contactInfo.phoneNumber.label}`}
                  className={styles.contactLink}
                >
                  {contactInfo.phoneNumber.label}
                </a>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  {contactInfo.emailAddress.icon}
                </div>
                <a
                  href={`mailto:${contactInfo.emailAddress.label}`}
                  className={styles.contactLink}
                >
                  {contactInfo.emailAddress.label}
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className={styles.socialSection}>
            <h3 className={styles.sectionTitle}>{contactInfo.Follow_us}</h3>
            <div className={styles.socialLinks}>
              <a
                href={contactInfo.socialMedia.instagram.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={contactInfo.socialMedia.instagram.label}
              >
                {contactInfo.socialMedia.instagram.icon}
              </a>
              <a
                  href={contactInfo.socialMedia.facebook.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={contactInfo.socialMedia.facebook.label}
                >
                  {contactInfo.socialMedia.facebook.icon}
                </a>
                <a
                  href={contactInfo.socialMedia.linkedin.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={contactInfo.socialMedia.linkedin.label}
                >
                  {contactInfo.socialMedia.linkedin.icon}
                </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className={styles.copyrightSection}>
          <div className={styles.copyrightText}>
            <p>
              &copy; {currentYear} {contactInfo.Copyright}{" "}
              {contactInfo.All_rights_reserved}
            </p>
          </div>
          <div className={styles.legalLinks}>
            <Link to="/privacy" className={styles.legalLink}>
              {contactInfo.Privacy_policy}
            </Link>
            <span className={styles.separator}>|</span>
            <Link to="/terms" className={styles.legalLink}>
              {contactInfo.Terms_and_conditions}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
