import Navbar from "@/components/Navbar/Navbar";
import Welcome from "@/components/Hero/Welcome";
import About from "@/components/About/About";
import ProjectsGrid from "@/components/Portfolio/ProjectsGrid";
import SkillsDice from "@/components/Skills/SkillsDice";
import ContactSection from "@/components/Contact/ContactSection";
import "@/styles/globals.css";

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Welcome />
      <About />
      <ProjectsGrid />
      <SkillsDice />
      <ContactSection />
    </div>
  )
}

export default App
