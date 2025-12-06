// import { useState } from 'react'
import './App.css'

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ProjectsGrid from "./components/Portfolio/ProjectsGrid";
import SkillsGrid from "./components/Skills/SkillsGrid";
import ContactSection from "./components/Contact/ContactSection";
import "./styles/globals.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <ProjectsGrid />
        <SkillsGrid />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
