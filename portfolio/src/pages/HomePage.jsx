import React from 'react'
import Intro from '../components/Intro'
import AboutSection from '../components/AboutSection'
import ProjectSection from '../components/ProjectSection'
import CertificateSection from '../components/CertificateSection'
import ContactSection from '../components/ContactSection'

function HomePage() {
  return (
    <main>
      <section id="intro"><Intro /></section>
      <section id="about"><AboutSection /></section>
      <section id="projects"><ProjectSection /></section>
      <section id="certificates"><CertificateSection /></section>
      <section id="contact"><ContactSection /></section>
    </main>
  )
}

export default HomePage