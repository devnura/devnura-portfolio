import SectionContact from '../components/SectionContact'
import Hero from '../components/Hero'
import Profile from '../components/Profile'
import ProjectsSection from '../components/ProjectsSection'
import SkillsSection from '../components/SkillsSection'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <SkillsSection />
      <ProjectsSection />
      <SectionContact />
      <Footer />
    </>
  )
}