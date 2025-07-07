import HeroScrollSlider from '../../components/animation'
import CertificationsSection from '../../components/CertificationsSection'
import HeroSection from '../../components/HeroSection'
import LogoMarque from '../../components/LogoMarque'
import Navbar from '../../components/navbar'
import ScrollRevealText from '../../components/ScrollRevealText '
import SectorsSection from '../../components/SectorSection'

import Animation from '../../components/animation'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ScrollRevealText text="An integrated approach to responsibly harness and transform global energy resources into the products the world needs" />
      <SectorsSection />
      <HeroScrollSlider/>
      <LogoMarque color="#bfa046" />
      <CertificationsSection/>

        
      <Animation />
    </>
  )
}
       