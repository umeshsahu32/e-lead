import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'
import { NOT_FOUND_CONSTANTS } from './constants'

const NotFound = () => {
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.illustration}>
            <div className={styles.errorCode}>{NOT_FOUND_CONSTANTS.ERROR_CODE}</div>
            <div className={styles.errorIcon}>
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="4" strokeDasharray="8 8" opacity="0.3"/>
                <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="3" opacity="0.5"/>
                <circle cx="100" cy="100" r="20" fill="currentColor" opacity="0.2"/>
                <path d="M70 70L130 130M130 70L70 130" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          
          <div className={styles.textContent}>
            <h1 className={styles.title}>{NOT_FOUND_CONSTANTS.TITLE}</h1>
            <p className={styles.description}>
              {NOT_FOUND_CONSTANTS.DESCRIPTION}
            </p>
            
            <div className={styles.actions}>
              <Link to="/" className={styles.homeButton}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                {NOT_FOUND_CONSTANTS.BUTTON_TEXT}
              </Link>
              
              <button 
                onClick={() => window.history.back()} 
                className={styles.backButton}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"></path>
                </svg>
                {NOT_FOUND_CONSTANTS.BUTTON_TEXT_BACK}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
