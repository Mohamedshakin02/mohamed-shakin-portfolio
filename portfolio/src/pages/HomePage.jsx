import React from 'react'
import Intro from '../components/Intro'
import AboutSection from '../components/AboutSection'
import ProjectSection from '../components/ProjectSection'

function HomePage() {
  return (
    <main>
        <Intro/>
        <AboutSection/>
        <ProjectSection/>
    </main>
  )
}

export default HomePage