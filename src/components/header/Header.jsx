import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import styles from './Header.module.css'
import logo from '../../assets/logo/logo_color.png';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const location = useLocation()

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about-us', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/packages', label: 'Packages' },
    { path: '/case-study', label: 'Case Study' },
    { path: '/contact-us', label: 'Contact Us' },
  ]

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logo} onClick={closeSidebar}>
          <img src={logo} alt="Logo" />
        </Link>

        {/* Desktop Menu */}
        <nav className={styles.desktopMenu}>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.menuItem} ${isActive(item.path) ? styles.active : ''}`}
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Icon */}
        <button
          className={styles.hamburger}
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          <HiMenu size={28} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            closeSidebar()
          }
        }}
      >
        <div className={styles.sidebarContent}>
          {/* Close Icon */}
          <button
            className={styles.closeButton}
            onClick={closeSidebar}
            aria-label="Close menu"
          >
            <HiX size={28} />
          </button>

          {/* Sidebar Menu Items */}
          <nav className={styles.sidebarMenu}>
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${styles.sidebarMenuItem} ${isActive(item.path) ? styles.active : ''}`}
                onClick={closeSidebar}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Backdrop */}
      {isSidebarOpen && (
        <div className={styles.backdrop} onClick={closeSidebar} />
      )}
    </header>
  )
}

export default Header

