import { IntroLoader } from './features/intro/components/IntroLoader'
import { Navbar } from './features/navigation/components/Navbar'
import { HeroSection } from './features/hero/components/HeroSection'
import { Marquee } from './shared/components/Marquee'
import { AboutSection } from './features/about/components/AboutSection'
import { ActivitiesSection } from './features/activities/components/ActivitiesSection'
import { ExperienceSection } from './features/experience/components/ExperienceSection'
import { TarifsSection } from './features/tarifs/components/TarifsSection'
import { CoachSection } from './features/coach/components/CoachSection'
import { ContactSection } from './features/contact/components/ContactSection'
import { Footer } from './features/footer/components/Footer'

const MARQUEE_ITEMS = [
  'FORCE',
  'DISCIPLINE',
  'FITNESS',
  'MUSCULATION',
  'KUNG-FU',
  'PROGRESSION',
  'PERFORMANCE',
  'DÉPASSEMENT',
]

export default function App() {
  return (
    <>
      <IntroLoader />
      <Navbar />

      <main id="main-content">
        <HeroSection />
        <Marquee items={MARQUEE_ITEMS} />
        <AboutSection />
        <ActivitiesSection />
        <ExperienceSection />
        <TarifsSection />
        <CoachSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}
