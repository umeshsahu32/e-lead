import styles from './Terms.module.css'

const Terms = () => {
  return (
    <div className={styles.termsPage}>
      <div className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Terms of Service</span>
            <h1 className={styles.heroTitle}>Terms and Conditions</h1>
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
              <h2 className={styles.sectionTitle}>1. Agreement to Terms</h2>
              <p className={styles.sectionText}>
                By accessing or using our website and services, you agree to be bound by these Terms of Service and all 
                applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using 
                or accessing this site.
              </p>
              <p className={styles.sectionText}>
                The materials contained in this website are protected by applicable copyright and trademark law. These Terms 
                constitute a legally binding agreement between you and E-Lead.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>2. Use License</h2>
              <p className={styles.sectionText}>
                Permission is granted to temporarily download one copy of the materials on E-Lead's website for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under 
                this license you may not:
              </p>
              <ul className={styles.list}>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>3. Services</h2>
              <p className={styles.sectionText}>
                E-Lead provides digital solutions including but not limited to web development, mobile app development, 
                digital marketing, and consulting services. We reserve the right to:
              </p>
              <ul className={styles.list}>
                <li>Modify or discontinue any service at any time</li>
                <li>Refuse service to anyone for any reason</li>
                <li>Change pricing and service offerings with reasonable notice</li>
                <li>Limit the quantity of any service or product offered</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>4. User Accounts</h2>
              <p className={styles.sectionText}>
                When you create an account with us, you must provide information that is accurate, complete, and current at 
                all times. You are responsible for safeguarding the password and for all activities that occur under your account.
              </p>
              <p className={styles.sectionText}>
                You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware 
                of any breach of security or unauthorized use of your account.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>5. Payment Terms</h2>
              <p className={styles.sectionText}>
                Payment terms will be specified in individual service agreements. Generally:
              </p>
              <ul className={styles.list}>
                <li>Payment is due as specified in your service agreement or invoice</li>
                <li>Late payments may incur interest charges or service suspension</li>
                <li>All fees are non-refundable unless otherwise specified</li>
                <li>Prices are subject to change with prior notice</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>6. Intellectual Property</h2>
              <p className={styles.sectionText}>
                The Service and its original content, features, and functionality are and will remain the exclusive property 
                of E-Lead and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks 
                and trade dress may not be used in connection with any product or service without our prior written consent.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>7. User Content</h2>
              <p className={styles.sectionText}>
                Our Service may allow you to post, link, store, share and otherwise make available certain information, text, 
                graphics, or other material. You are responsible for the content that you post on or through the Service, including 
                its legality, reliability, and appropriateness.
              </p>
              <p className={styles.sectionText}>
                By posting content on or through the Service, you grant us the right and license to use, modify, publicly perform, 
                publicly display, reproduce, and distribute such content on and through the Service.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>8. Prohibited Uses</h2>
              <p className={styles.sectionText}>
                You may not use our Service:
              </p>
              <ul className={styles.list}>
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>9. Disclaimer</h2>
              <p className={styles.sectionText}>
                The materials on E-Lead's website are provided on an 'as is' basis. E-Lead makes no warranties, expressed or implied, 
                and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions 
                of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation 
                of rights.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>10. Limitations</h2>
              <p className={styles.sectionText}>
                In no event shall E-Lead or its suppliers be liable for any damages (including, without limitation, damages for loss 
                of data or profit, or due to business interruption) arising out of the use or inability to use the materials on 
                E-Lead's website, even if E-Lead or an authorized representative has been notified orally or in writing of the 
                possibility of such damage.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>11. Revisions and Errata</h2>
              <p className={styles.sectionText}>
                The materials appearing on E-Lead's website could include technical, typographical, or photographic errors. E-Lead 
                does not warrant that any of the materials on its website are accurate, complete, or current. E-Lead may make changes 
                to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>12. Links</h2>
              <p className={styles.sectionText}>
                E-Lead has not reviewed all of the sites linked to its website and is not responsible for the contents of any such 
                linked site. The inclusion of any link does not imply endorsement by E-Lead of the site. Use of any such linked 
                website is at the user's own risk.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>13. Termination</h2>
              <p className={styles.sectionText}>
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, 
                under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach 
                of the Terms.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>14. Governing Law</h2>
              <p className={styles.sectionText}>
                These Terms shall be interpreted and governed by the laws of the jurisdiction in which E-Lead operates, without regard 
                to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered 
                a waiver of those rights.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>15. Changes to Terms</h2>
              <p className={styles.sectionText}>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, 
                we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>16. Contact Information</h2>
              <p className={styles.sectionText}>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className={styles.contactInfo}>
                <p><strong>Email:</strong> legal@e-lead.com</p>
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

export default Terms
