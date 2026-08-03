import useSmoothScroll from './hooks/useSmoothScroll'
import useReveal from './hooks/useReveal'
import Header from './components/Header'
import Hero from './components/Hero'
import MarqueeStrip from './components/MarqueeStrip'
import PainPoints from './components/PainPoints'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Offer from './components/Offer'
import Guarantee from './components/Guarantee'
import Faq from './components/Faq'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import StickyMobileCta from './components/StickyMobileCta'

export default function App() {
  // scroll suave da página inteira (Lenis) — desligado em prefers-reduced-motion
  useSmoothScroll()
  // revelação ao rolar de tudo que tem data-reveal
  useReveal()

  return (
    <>
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-sage-700 focus:px-4 focus:py-2 focus:font-bold focus:text-paper-0"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main>
        <Hero />
        <MarqueeStrip />
        <PainPoints />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <Offer />
        <Guarantee />
        <Faq />
        <FinalCta />
      </main>

      <Footer />
      <StickyMobileCta />
    </>
  )
}
