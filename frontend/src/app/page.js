import HeroSection from '../../components/HeroSection'
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

        
      <Animation />
    </>
  )
}
       