import { useState, useEffect } from 'react'
import { FaComments } from 'react-icons/fa'
import styles from './ChatBotIcon.module.css'

const ChatBotIcon = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset
      setIsVisible(scrollY > 500)
    }

    // Check initial scroll position
    handleScroll()

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleClick = () => {
    // Handle chatbot click - you can add your chatbot logic here
    console.log('ChatBot clicked')
  }

  return (
    <button
      className={`${styles.chatBotIcon} ${isVisible ? styles.visible : styles.hidden}`}
      onClick={handleClick}
      aria-label="Open chatbot"
    >
      <FaComments className={styles.icon} />
    </button>
  )
}

export default ChatBotIcon

