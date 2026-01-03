import { lazy } from 'react'

export const Home = lazy(() => import('../pages/home/Home'))
export const AboutUs = lazy(() => import('../pages/about-us/AboutUs'))
export const CaseStudy = lazy(() => import('../pages/case-study/CaseStudy'))
export const ContactUs = lazy(() => import('../pages/contact-us/ContactUs'))
export const Packages = lazy(() => import('../pages/packages/Packages'))
export const Privacy = lazy(() => import('../pages/privacy/Privacy'))
export const Services = lazy(() => import('../pages/services/Services'))
export const Terms = lazy(() => import('../pages/terms/Terms'))
export const NotFound = lazy(() => import('../pages/not-found/NotFound'))