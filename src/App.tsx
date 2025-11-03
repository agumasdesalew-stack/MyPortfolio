import './App.css'
import resumePdf from './assets/Resume-a.pdf'
import profilePhoto from './assets/me.JPG'
import { useState } from 'react'

function App() {
  const [active, setActive] = useState<'home' | 'about' | 'skills' | 'contact'>('home')

  return (
    <main className="shell">
      <header className="nav">
        <div className="brand">AGUMAS</div>
        <nav className="nav-links">
          <a href="#home" className={active === 'home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActive('home') }}>Home</a>
          <a href="#about" className={active === 'about' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActive('about') }}>About</a>
          <a href="#skills" className={active === 'skills' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActive('skills') }}>Skills</a>
          <a href="#contact" className={active === 'contact' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActive('contact') }}>Contact</a>
        </nav>
      </header>
      {active === 'home' && (
      <section id="home" className="hero-grid">
        <div className="hero-left">
          <p className="kicker">Hello, It's Me</p>
          <h1 className="hero-name">Agumas Desalew</h1>
          <h2 className="hero-role">And I'm a <span className="accent">Software Engineer</span></h2>
          <p className="hero-text">I design and develop reliable, user‑centered web apps with React, TypeScript, and modern tooling.</p>
          <div className="socials">
            <a aria-label="GitHub" className="social" href="https://github.com/agumasdesalew-stack" target="_blank" rel="noopener noreferrer">{githubIcon}</a>
            <a aria-label="Twitter" className="social" href="https://x.com/agumas_d?t=3lCElaSmII5ZNT_fTcM77A&s=09" target="_blank" rel="noopener noreferrer">{twitterIcon}</a>
            <a aria-label="Instagram" className="social" href="https://www.instagram.com/agumas_desalew?igsh=MTg3eWFrdDZoNGZneQ==" target="_blank" rel="noopener noreferrer">{instagramIcon}</a>
            <a aria-label="LinkedIn" className="social" href="https://www.linkedin.com/in/agumas-desalew/" target="_blank" rel="noopener noreferrer">{linkedinIcon}</a>
          </div>
          <div className="cta">
            <a className="button primary" href={resumePdf} download>Download CV</a>
            <a className="button primary" href={resumePdf} target="_blank" rel="noopener noreferrer">View CV</a>
          </div>
        </div>
          <div className="hero-right">
          <div className="hex-frame">
            <div
              className="hex-photo"
              role="img"
              aria-label="Agumas Desalew portrait"
              style={{ backgroundImage: `url(${profilePhoto})` }}
            />
          </div>
        </div>
      </section>
      )}

      {active === 'about' && (
      <section id="about" className="section about">
        <h3 className="section-title">About</h3>
        <div className="about-grid">
          <div className="about-card">
            <h4>Who I Am</h4>
            <p>
              Software Engineer focused on building reliable, user‑centered web applications.
              I enjoy crafting clean UIs and scalable frontends with React, TypeScript, and modern tooling.
            </p>
          </div>
          <div className="about-card">
            <h4>What I Do</h4>
            <ul>
              <li>Design and develop responsive React apps</li>
              <li>Integrate REST/GraphQL APIs and state management</li>
              <li>Optimize performance and accessibility</li>
              <li>Ship maintainable code with testing and CI</li>
            </ul>
          </div>
        </div>
      </section>
      )}

      {active === 'skills' && (
      <section id="skills" className="section skills">
        <h3 className="section-title">Skills</h3>
        <div className="skills-grid">
          {[
            'React', 'TypeScript', 'JavaScript (ESNext)', 'HTML/CSS',
            'Vite', 'Redux / State Management', 'REST / GraphQL', 'Node.js',
            'Tailwind / CSS-in-JS', 'Testing (Jest / RTL)', 'Git / GitHub', 'CI/CD'
          ].map((skill) => (
            <div key={skill} className="skill-chip">{skill}</div>
          ))}
        </div>
      </section>
      )}

      {active === 'contact' && (
      <section id="contact" className="section contact">
        <h3 className="section-title">Contact</h3>
        <div className="about-card">
          <p className="hero-text">Feel free to reach out via email or Telegram. I typically respond within a day.</p>
          <div className="contact-actions">
            <a className="button primary" href="mailto:agumasdesalew@gmail.com">Email Me</a>
            <a className="button" href="https://t.me/agumas_desalew" target="_blank" rel="noopener noreferrer">Telegram</a>
          </div>
        </div>
      </section>
      )}
    </main>
  )
}

const githubIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.17-3.37-1.17-.46-1.16-1.12-1.47-1.12-1.47-.92-.64.07-.63.07-.63 1.02.07 1.56 1.05 1.56 1.05.9 1.55 2.36 1.1 2.94.84.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.28.1-2.67 0 0 .85-.27 2.78 1.02a9.6 9.6 0 0 1 5.06 0c1.93-1.29 2.78-1.02 2.78-1.02.55 1.39.2 2.42.1 2.67.64.7 1.03 1.6 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.67.92.67 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>
)

const twitterIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 5.92c-.73.32-1.52.53-2.35.62a4.1 4.1 0 0 0 1.8-2.26 8.2 8.2 0 0 1-2.6.99 4.09 4.09 0 0 0-7 3.73A11.6 11.6 0 0 1 3.15 4.7a4.07 4.07 0 0 0 1.27 5.46c-.63-.02-1.22-.19-1.74-.48v.05a4.1 4.1 0 0 0 3.28 4.02c-.3.08-.63.12-.97.12-.24 0-.48-.02-.71-.06a4.1 4.1 0 0 0 3.83 2.85A8.22 8.22 0 0 1 2 19.54a11.6 11.6 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68l-.01-.53A8.35 8.35 0 0 0 22 5.92Z"/></svg>
)

const instagramIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Zm5.25-.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Z"/></svg>
)

const linkedinIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.82-2.05 3.75-2.05c4.01 0 4.75 2.64 4.75 6.06V21h-4v-5.33c0-1.27-.02-2.9-1.77-2.9c-1.77 0-2.04 1.38-2.04 2.8V21h-4V9Z"/></svg>
)

export default App
