import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Manifesto from '@/components/Manifesto'
import WhyItMatters from '@/components/WhyItMatters'
import Programs from '@/components/Programs'
import ImpactAndResults from '@/components/ImpactAndResults'
import AudienceSection from '@/components/AudienceSection'
import CompanyStories from '@/components/CompanyStories'
import NetworkAndCTA from '@/components/NetworkAndCTA'
import ReadyToEvolve from '@/components/ReadyToEvolve'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <WhyItMatters />
        <Programs />
        <ImpactAndResults />
        <AudienceSection />
        <CompanyStories />
        <NetworkAndCTA />
        <ReadyToEvolve />
      </main>
      <Footer />
    </>
  )
}
