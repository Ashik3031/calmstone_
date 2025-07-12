import HeroScrollSlider from '../../components/animation'
import CertificationsSection from '../../components/CertificationsSection'
import HeroSection from '../../components/HeroSection'
import LogoMarque from '../../components/LogoMarque'
import Navbar from '../../components/navbar'
import ScrollRevealText from '../../components/ScrollRevealText '
import SectorsSection from '../../components/SectorSection'
import TestimonialSlider from '../../components/TestimonialSlider'

import Animation from '../../components/animation'
import SmallFooter from '../../components/Footer'


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ScrollRevealText text="Calm Stone General Contracting delivers innovative engineering, procurement, and construction services built on speed, precision, and trust." />
      <SectorsSection />
      {/* <HeroScrollSlider/> */}
      <LogoMarque color="#bfa046" />
      <TestimonialSlider />
      
      <CertificationsSection/>
      {/* <SmallFooter/> */}

        
    
    </>
  )
}
       