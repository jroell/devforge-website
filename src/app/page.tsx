import Hero from '@/components/Hero'
import ToolShowcase from '@/components/ToolShowcase'
import PriceAnchor from '@/components/PriceAnchor'
import Features from '@/components/Features'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import SocialProof from '@/components/SocialProof'
import FinalCTA from '@/components/FinalCTA'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <ToolShowcase />
        <PriceAnchor />
        <Features />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
