import CaseStudyHero from './components/CaseStudyHero'
import CaseStudyGrid from './components/CaseStudyGrid'
import styles from './CaseStudy.module.css'

const CaseStudy = () => {
  return (
    <div className={styles.caseStudyPage}>
      <CaseStudyHero />
      <CaseStudyGrid />
    </div>
  )
}

export default CaseStudy    