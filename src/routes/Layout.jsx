import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import ScrollToTop from './ScrollToTop'
import PageLoader from '../components/PageLoader/PageLoader'
import ChatBotIcon from '../components/ChatBotIcon/ChatBotIcon'

const Layout = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
      <Footer />
      <ChatBotIcon />
    </div>
  )
}

export default Layout

