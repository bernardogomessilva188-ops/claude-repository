import useSmoothScroll from './hooks/useSmoothScroll'
import useReveal from './hooks/useReveal'
import Header from './components/Header'
import ChapterRail from './components/ChapterRail'
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
  // revelação ao rolar: blocos, títulos com máscara, fios e imagens
  useReveal()

  return (
    <>
      <a
        href="#inicio"
        className="label-mono sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-brass-500 focus:px-5 focus:py-3 focus:text-espresso-950"
      >
        Pular para o conteúdo
      </a>

      <Header />
      <ChapterRail />

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
