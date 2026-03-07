import React from 'react'
import Intro from '../components/Intro'
import AboutSection from '../components/AboutSection'
import ProjectSection from '../components/ProjectSection'
import CertificateSection from '../components/CertificateSection'

function HomePage() {
  return (
    <main>
        <Intro/>
        <AboutSection/>
        <ProjectSection/>
        <CertificateSection/>
    </main>
  )
}

export default HomePage