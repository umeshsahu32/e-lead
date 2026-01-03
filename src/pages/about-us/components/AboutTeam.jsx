import { useState } from "react";
import styles from "./AboutTeam.module.css";
import { ABOUT_US_CONSTANTS } from "../constants";
import { teamMembers } from "../constants/data";

const AboutTeam = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { OUR_TEAM } = ABOUT_US_CONSTANTS;

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>{OUR_TEAM.BADGE}</span>
          <h2 className={styles.title}>{OUR_TEAM.TITLE}</h2>
          <p className={styles.subtitle}>{OUR_TEAM.DESCRIPTION}</p>
        </div>

        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => {
            const isHovered = hoveredCard === member.id;

            return (
              <div
                key={member.id}
                className={styles.teamCard}
                onMouseEnter={() => setHoveredCard(member.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className={styles.cardWrapper}>
                  <div className={styles.imageSection}>
                    <div className={styles.imageContainer}>
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className={styles.memberImage}
                          onError={(e) => {
                            e.target.style.display = "none";
                            if (e.target.nextSibling) {
                              e.target.nextSibling.style.display = "flex";
                            }
                          }}
                        />
                      ) : null}
                      <div
                        className={styles.imagePlaceholder}
                        style={{ display: member.image ? "none" : "flex" }}
                      >
                        <span className={styles.initials}>
                          {getInitials(member.name)}
                        </span>
                      </div>

                      {isHovered && (
                        <div className={styles.imageOverlay}>
                          <div className={styles.socialLinks}>
                            <a
                              href="#"
                              className={styles.socialLink}
                              aria-label="LinkedIn"
                              onClick={(e) => e.preventDefault()}
                            >
                              <svg
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                              </svg>
                            </a>
                            <a
                              href="#"
                              className={styles.socialLink}
                              aria-label="Twitter"
                              onClick={(e) => e.preventDefault()}
                            >
                              <svg
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                              </svg>
                            </a>
                            <a
                              href="#"
                              className={styles.socialLink}
                              aria-label="Email"
                              onClick={(e) => e.preventDefault()}
                            >
                              <svg
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      )}

                      <div className={styles.experienceBadge}>
                        <span className={styles.badgeText}>
                          {member.experience}
                        </span>
                      </div>
                    </div>

                    <div className={styles.accentBar}></div>
                  </div>

                  <div className={styles.cardContent}>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <p className={styles.memberDesignation}>
                      {member.designation}
                    </p>
                    <p className={styles.memberDescription}>
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
