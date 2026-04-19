import styles from './Refund.module.css'

const Refund = () => {
    return (
        <div className={styles.termsPage}>
            <div className={styles.heroSection}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <span className={styles.badge}>Refund Policy</span>
                        <h1 className={styles.heroTitle}>Refund and Cancellation Policy</h1>
                        <p className={styles.heroSubtitle}>
                            Effective Date: 19 April 2026; Last Updated: 19 April 2026
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.contentSection}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>1. No Refund Policy</h2>
                            <p className={styles.sectionText}>
                                All payments made to eLead (a brand/service offering of Leadsync Technologies / associated entities) are strictly non-refundable under any circumstances.
                            </p>
                            <p className={styles.sectionText}>
                                By making the payment, the Customer acknowledges and agrees that:
                            </p>
                            <ul className={styles.list}>
                                <li>The payment is primarily towards AI Infrastructure Setup, including but not limited to:
                                    <ul style={{ paddingLeft: '1.5rem', margin: '0.5rem 0', listStyle: "none" }}>
                                        <li>Custom Lead Qualification Bot (QBot) development & deployment</li>
                                        <li>Campaign setup and optimization</li>
                                        <li>Landing pages and marketing creatives</li>
                                        <li>CRM/dashboard access and integrations</li>
                                        <li>Data processing, automation, and AI training</li>
                                    </ul>
                                </li>
                                <li>Any leads, responses, or conversations generated are complimentary deliverables associated with the infrastructure and are not sold as a refundable product.</li>
                                <li>Since the service involves time-bound execution, technology deployment, and resource allocation, refunds are not feasible once work has commenced.</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>2. No Cancellation Policy</h2>
                            <p className={styles.sectionText}>
                                Once a service is subscribed and payment is made:
                            </p>
                            <ul className={styles.list}>
                                <li>The order cannot be cancelled, paused, or reversed.</li>
                                <li>Campaign execution begins immediately or within defined timelines, involving:
                                    <ul style={{ paddingLeft: '1.5rem', margin: '0.5rem 0', listStyle: "none" }}>
                                        <li>Resource allocation (AI + human support where applicable)</li>
                                        <li>Platform integrations</li>
                                        <li>Campaign activation costs</li>
                                    </ul>
                                </li>
                            </ul>
                            <p className={styles.sectionText}>
                                Therefore, cancellation requests will not be entertained at any stage.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>3. No Guarantee of Business Outcomes</h2>
                            <ul className={styles.list}>
                                <li>eLead provides bot-verified leads and/or marketing infrastructure, not guaranteed sales.</li>
                                <li>Conversion of leads into business is dependent on:
                                    <ul style={{ paddingLeft: '1.5rem', margin: '0.5rem 0', listStyle: "none" }}>
                                        <li>Customer’s product/service quality</li>
                                        <li>Pricing, sales process, and follow-ups</li>
                                        <li>Market conditions and competition</li>
                                    </ul>
                                </li>
                                <li>No refund, credit, or compensation shall be provided based on:
                                    <ul style={{ paddingLeft: '1.5rem', margin: '0.5rem 0', listStyle: "none" }}>
                                        <li>Non-conversion of leads</li>
                                        <li>Perceived quality expectations beyond defined LQC (Lead Qualification Criteria)</li>
                                        <li>Business outcomes or revenue generated</li>
                                    </ul>
                                </li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>4. Delivery Completion & Usage Rights</h2>
                            <ul className={styles.list}>
                                <li>Once assets are delivered (bot, creatives, landing pages, dashboard access), the service is considered substantially fulfilled.</li>
                                <li>The Customer retains the right to reuse these assets across campaigns, which further nullifies any refund claims.</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>5. Replacement / Support Clause</h2>
                            <ul className={styles.list}>
                                <li>In case of technical errors or invalid leads (if applicable under defined criteria), eLead may, at its sole discretion:
                                    <ul style={{ paddingLeft: '1.5rem', margin: '0.5rem 0', listStyle: "none" }}>
                                        <li>Provide replacements</li>
                                        <li>Optimize campaigns</li>
                                    </ul>
                                </li>
                                <li>This does not constitute a refund obligation.</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>6. Acknowledgment & Acceptance</h2>
                            <p className={styles.sectionText}>
                                By proceeding with payment, the Customer:
                            </p>
                            <ul className={styles.list}>
                                <li>Confirms that they have read and understood this Refund & Cancellation Policy</li>
                                <li>Accepts that:
                                    <ul style={{ paddingLeft: '1.5rem', margin: '0.5rem 0', listStyle: "none" }}>
                                        <li>The service is non-refundable</li>
                                        <li>The service is non-cancellable</li>
                                        <li>Payment is for AI infrastructure and execution, not guaranteed results</li>
                                    </ul>
                                </li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>7. Legal Standing</h2>
                            <p className={styles.sectionText}>
                                This policy is binding in conjunction with:
                            </p>
                            <ul className={styles.list}>
                                <li>The Service Agreement</li>
                                <li>Terms & Conditions published at: <a href="https://www.elead.shop/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</a></li>
                            </ul>
                            <p className={styles.sectionText}>
                                In case of disputes, the company’s obligation is limited strictly to service delivery as defined, and not to financial reimbursement.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Refund
