import styles from './Privacy.module.css'

const Privacy = () => {
  return (
    <div className={styles.privacyPage}>
      <div className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Privacy Policy</span>
            <h1 className={styles.heroTitle}>Your Privacy Matters</h1>
            <p className={styles.heroSubtitle}>
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>1. Introduction</h2>
              <p className={styles.sectionText}>
                Welcome to E-Lead ("we," "our," or "us"). We are committed to protecting your personal information 
                and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard 
                your information when you visit our website and use our services.
              </p>
              <p className={styles.sectionText}>
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, 
                please do not access or use our services.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
              <p className={styles.sectionText}>
                We collect information that you provide directly to us, including:
              </p>
              <ul className={styles.list}>
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Business information (company name, job title, industry)</li>
                <li>Communication data (messages, inquiries, feedback)</li>
                <li>Payment information (when applicable for services)</li>
              </ul>
              <p className={styles.sectionText}>
                We also automatically collect certain information when you visit our website, such as:
              </p>
              <ul className={styles.list}>
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Device information and operating system</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>3. How We Use Your Information</h2>
              <p className={styles.sectionText}>
                We use the information we collect for various purposes, including:
              </p>
              <ul className={styles.list}>
                <li>To provide, maintain, and improve our services</li>
                <li>To process transactions and send related information</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To detect, prevent, and address technical issues</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>4. Information Sharing and Disclosure</h2>
              <p className={styles.sectionText}>
                We do not sell, trade, or rent your personal information to third parties. We may share your information 
                in the following circumstances:
              </p>
              <ul className={styles.list}>
                <li>With service providers who assist us in operating our website and conducting our business</li>
                <li>When required by law or to protect our rights and safety</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>5. Data Security</h2>
              <p className={styles.sectionText}>
                We implement appropriate technical and organizational security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
                the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>6. Your Rights and Choices</h2>
              <p className={styles.sectionText}>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className={styles.list}>
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to object to processing of your information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>7. Cookies and Tracking Technologies</h2>
              <p className={styles.sectionText}>
                We use cookies and similar tracking technologies to track activity on our website and store certain information. 
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you 
                do not accept cookies, you may not be able to use some portions of our service.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>8. Third-Party Links</h2>
              <p className={styles.sectionText}>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these 
                external sites. We encourage you to read the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>9. Children's Privacy</h2>
              <p className={styles.sectionText}>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information 
                from children. If you are a parent or guardian and believe your child has provided us with personal information, 
                please contact us immediately.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>10. Changes to This Privacy Policy</h2>
              <p className={styles.sectionText}>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
                Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically 
                for any changes.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>11. Contact Us</h2>
              <p className={styles.sectionText}>
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className={styles.contactInfo}>
                <p><strong>Email:</strong> privacy@e-lead.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Address:</strong> 123 Business Street, New York, NY 10001</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Privacy
