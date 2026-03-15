import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Intro from '../components/Intro'
import AboutSection from '../components/AboutSection'
import ProjectSection from '../components/ProjectSection'
import CertificateSection from '../components/CertificateSection'
import ContactSection from '../components/ContactSection'

function HomePage() {

  // Checks if the URL hash matches valid section IDs and redirects to the NotFound page if it doesn't.
  
  const navigate = useNavigate()

useEffect(() => {

  const validSections = [
    "#intro",
    "#about",
    "#projects",
    "#certificates",
    "#contact"
  ]

  const checkHash = () => {
    const currentHash = window.location.hash

    if (currentHash && !validSections.includes(currentHash)) {
      navigate("/not-found", { replace: true })
    }
  }

  checkHash()

  window.addEventListener("hashchange", checkHash)

  return () => {
    window.removeEventListener("hashchange", checkHash)
  }

}, [navigate])

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