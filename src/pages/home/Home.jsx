import HeroSection from './components/hero-section/HeroSection';
import WhyLeadsFail from './components/why-leads-fail/WhyLeadsFail';
import WhatWeDo from './components/what-we-do/WhatWeDo';
import Carousel from './components/carousel/Carousel';
import Services from './components/services/Services';
import SuccessStories from './components/success-stories/SuccessStories';
import UserFeedback from './components/user-feedback/UserFeedback';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhyLeadsFail />
      <WhatWeDo />
      <Carousel />
      <Services />
      <SuccessStories />
      <UserFeedback />
    </div>
  )
}

export default Home;   