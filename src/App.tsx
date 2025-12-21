// import { useState } from 'react'
import './App.css'

import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Hero/Welcome";
import About from "./components/About/About";
import ProjectsGrid from "./components/Portfolio/ProjectsGrid";
// import SkillsGrid from "./components/Skills/SkillsGrid";
import SkillsDice from "./components/Skills/SkillsDice";
import ContactSection from "./components/Contact/ContactSection";
import "./styles/globals.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="app-wrapper">
      <Navbar />
      <Welcome />
      <About />
      <ProjectsGrid />
      {/* <SkillsGrid /> */}
      <SkillsDice />
      <ContactSection />
    </div>
  )
}

export default App
