import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const capabilities = [
  {
    title: 'Full-Stack MERN Development',
    desc: 'Designing and delivering end-to-end web applications with MongoDB, Express.js, React.js, and Node.js.',
  },
  {
    title: 'Responsive Frontend Craft',
    desc: 'Building smooth, responsive interfaces with React, Tailwind CSS, and interaction-focused component systems.',
  },
  {
    title: 'API & Backend Engineering',
    desc: 'Developing REST APIs, middleware, authentication flows, and reliable backend architecture for production use.',
  },
]

const experiences = [
  {
    role: 'MERN Stack Developer Intern',
    company: 'Logicsoft International Pvt Ltd',
    period: 'Jan 2026 – Apr 2026 · Delhi, India',
    points: [
      'Built and maintained full-stack applications using MongoDB, Express.js, React.js, and Node.js.',
      'Developed RESTful APIs and integrated frontend modules for seamless user experience.',
      'Collaborated on real-world project delivery while improving workflows with modern AI-assisted development practices.',
    ],
  },
  {
    role: 'Core Member',
    company: 'The BlackSociety - GBU',
    period: '2023 – 2024 · Greater Noida',
    points: [
      'Maintained and updated the society’s official website for reliability and consistency.',
      'Contributed to digital initiatives with strong communication and teamwork across the group.',
    ],
  },
]

const projects = [
  {
    name: 'MERN Link Shortener',
    detail: 'Built a full-stack URL shortener with complete CRUD operations, REST API integration, and efficient redirection flow.',
    stack: 'MongoDB · Express · React · Node.js',
  },
  {
    name: 'Spotify Clone',
    detail: 'Developed a responsive Spotify-inspired interface with JavaScript-powered music controls and dynamic UI behavior.',
    stack: 'HTML · CSS · JavaScript',
  },
  {
    name: 'Creative 3D Website',
    detail: 'Crafted an interactive 3D-style web experience with modern frontend animation techniques and dynamic visuals.',
    stack: 'Frontend · Animations · Interaction Design',
  },
]

const skills = [
  'JavaScript (ES6+)',
  'Python',
  'C++',
  'React.js',
  'Tailwind CSS',
  'Node.js',
  'Express.js',
  'REST API Design',
  'JWT Authentication',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'GitHub',
  'VS Code',
]

const impactStats = [
  { label: 'Internship Experience', value: '4 Months' },
  { label: 'Core Projects', value: '3+' },
  { label: 'Tech Stack', value: 'MERN + APIs' },
  { label: 'Location', value: 'Greater Noida' },
]

const achievements = [
  {
    title: 'MERN Internship Delivery',
    detail: 'Shipped full-stack modules and REST integrations at Logicsoft in a production-style team environment.',
    tag: 'Professional Experience',
  },
  {
    title: 'Community Leadership',
    detail: 'Contributed to digital initiatives as Core Member of The BlackSociety with strong collaboration and communication.',
    tag: 'Leadership',
  },
  {
    title: 'B.Tech Computer Engineering',
    detail: 'Pursuing Computer Engineering at Gautam Buddha University with focus on practical product engineering.',
    tag: 'Academic Foundation',
  },
]

const headlineRail = [
  'MERN STACK DEVELOPER',
  'FULL-STACK ENGINEERING',
  'RESPONSIVE UI SYSTEMS',
  'REST API INTEGRATIONS',
  'PROBLEM SOLVING',
  'CLEAN CODE ARCHITECTURE',
]

function App() {
  const cursorRef = useRef(null)
  const glowRef = useRef(null)
  const containerRef = useRef(null)
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'midnight'
    return localStorage.getItem('portfolio-theme') || 'midnight'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const revealItems = gsap.utils.toArray('[data-reveal]')
    revealItems.forEach((item) => {
      gsap.fromTo(
        item,
        { autoAlpha: 0, y: 48 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 82%',
          },
        },
      )
    })

    const groups = gsap.utils.toArray('[data-stagger]')
    groups.forEach((group) => {
      const items = group.querySelectorAll('[data-stagger-item]')
      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.14,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: group,
            start: 'top 82%',
          },
        },
      )
    })

    const parallaxNodes = gsap.utils.toArray('[data-parallax]')
    parallaxNodes.forEach((node) => {
      const level = Number(node.getAttribute('data-parallax') || 1)
      gsap.to(node, {
        yPercent: -10 * level,
        ease: 'none',
        scrollTrigger: {
          trigger: node,
          scrub: true,
          start: 'top bottom',
          end: 'bottom top',
        },
      })
    })

    gsap.fromTo(
      '.hero-line',
      { autoAlpha: 0, y: 28 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  useEffect(() => {
    const cursor = cursorRef.current
    const glow = glowRef.current

    if (!cursor || !glow) return

    const moveCursor = gsap.quickTo(cursor, 'x', { duration: 0.18, ease: 'power3.out' })
    const moveCursorY = gsap.quickTo(cursor, 'y', { duration: 0.18, ease: 'power3.out' })
    const moveGlow = gsap.quickTo(glow, 'x', { duration: 0.34, ease: 'power3.out' })
    const moveGlowY = gsap.quickTo(glow, 'y', { duration: 0.34, ease: 'power3.out' })
    let hasShown = false

    const onMove = (event) => {
      moveCursor(event.clientX)
      moveCursorY(event.clientY)
      moveGlow(event.clientX)
      moveGlowY(event.clientY)

      if (!hasShown) {
        hasShown = true
        gsap.to([cursor, glow], { autoAlpha: 1, duration: 0.15 })
      }
    }

    const onDown = () => {
      gsap.to(cursor, { scale: 0.7, duration: 0.2, ease: 'power2.out' })
      gsap.to(glow, { scale: 1.2, duration: 0.3, ease: 'power2.out' })
    }

    const onUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2, ease: 'power2.out' })
      gsap.to(glow, { scale: 1, duration: 0.3, ease: 'power2.out' })
    }

    moveCursor(window.innerWidth / 2)
    moveCursorY(window.innerHeight / 2)
    moveGlow(window.innerWidth / 2)
    moveGlowY(window.innerHeight / 2)

    const show = () => gsap.to([cursor, glow], { autoAlpha: 1, duration: 0.15 })
    const hide = () => gsap.to([cursor, glow], { autoAlpha: 0, duration: 0.2 })

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('mouseenter', show)
    window.addEventListener('mouseleave', hide)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('mouseenter', show)
      window.removeEventListener('mouseleave', hide)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative overflow-x-clip">
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={glowRef} className="custom-cursor-glow" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-noise opacity-30" />

      <section id="home" className="relative mx-auto min-h-screen max-w-7xl px-4 pb-20 pt-10 md:px-8">
        <nav className="glass relative z-30 flex items-center justify-between rounded-full px-5 py-3" data-reveal>
          <span className="text-sm uppercase tracking-[0.32em] text-zinc-300">Nimesh Nirmal</span>
          <div className="nav-links flex items-center gap-4 text-sm text-zinc-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#work" className="hover:text-white transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-white transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <button
              type="button"
              className="theme-switch"
              onClick={() => setTheme((prev) => (prev === 'midnight' ? 'aurora' : 'midnight'))}
              aria-label="Toggle website theme"
            >
              {theme === 'midnight' ? 'Aurora Theme' : 'Midnight Theme'}
            </button>
          </div>
        </nav>

        <div className="relative mt-20" data-stagger>
          <div className="hero-orb hero-orb-left" data-parallax="1.2" />
          <div className="hero-orb hero-orb-right" data-parallax="1.6" />

          <h1 className="hero-line max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl" data-stagger-item>
            I build scalable full-stack products and premium frontend experiences.
          </h1>
          <p className="hero-line mt-6 max-w-2xl text-base text-zinc-300 md:text-lg" data-stagger-item>
            Computer Engineering student at Gautam Buddha University with hands-on MERN internship experience, focused on clean architecture, responsive interfaces, and real-world product delivery.
          </p>
          <div className="hero-line mt-4" data-stagger-item>
            <p className="open-to-work-pill">
              Open to internships and full-time software engineering opportunities
            </p>
          </div>
          <div className="hero-line mt-10 flex flex-wrap items-center gap-4" data-stagger-item>
            <a href="#contact" className="btn-primary">Let&apos;s Collaborate</a>
            <a href="#work" className="btn-secondary">View Projects</a>
          </div>
        </div>

        <div className="hero-rail-wrap mt-14" data-reveal>
          <div className="hero-rail-track">
            {[...headlineRail, ...headlineRail].map((item, index) => (
              <span key={`${item}-${index}`} className="hero-rail-item">✦ {item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 md:px-8" data-stagger>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat) => (
            <article key={stat.label} className="glass-card py-6" data-stagger-item>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{stat.label}</p>
              <p className="mt-3 text-2xl font-semibold text-white">{stat.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-20 md:px-8" data-reveal>
        <div className="glass rounded-3xl p-8 md:p-12">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-400">About</p>
          <h2 className="max-w-3xl text-3xl font-medium text-white md:text-5xl">
            Passionate MERN Stack Developer focused on scalable and user-friendly web applications.
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-zinc-300">
            <p>
              I am a Full Stack Developer with hands-on experience in building scalable and user-friendly web applications using MongoDB, Express.js, React.js, and Node.js.
            </p>
            <p>
              I enjoy working across both frontend and backend, creating responsive interfaces and developing efficient APIs. I have a strong foundation in JavaScript and modern development practices, and I am always eager to learn and adapt to new technologies.
            </p>
            <p>
              I am particularly interested in opportunities where I can contribute to meaningful, real-world projects while continuing to grow as a developer. I value clean code, problem-solving, and collaboration, and I am confident I can add value to any team.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-4 py-10 md:px-8" data-stagger>
        <p className="mb-8 text-sm uppercase tracking-[0.3em] text-zinc-400" data-stagger-item>
          Experience
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((item) => (
            <article key={item.role + item.company} className="glass-card" data-stagger-item>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{item.period}</p>
              <h3 className="mt-3 text-2xl font-medium text-white">{item.role}</h3>
              <p className="mt-1 text-zinc-300">{item.company}</p>
              <ul className="mt-5 space-y-3 text-zinc-300">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8" data-stagger>
        <p className="mb-8 text-sm uppercase tracking-[0.3em] text-zinc-400" data-stagger-item>
          Core Strengths
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {capabilities.map((item) => (
            <article key={item.title} className="glass-card" data-stagger-item data-parallax="0.8">
              <h3 className="text-xl font-medium text-white">{item.title}</h3>
              <p className="mt-4 text-zinc-300">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-4 py-10 md:px-8" data-stagger>
        <p className="mb-8 text-sm uppercase tracking-[0.3em] text-zinc-400" data-stagger-item>
          Technical Skills
        </p>
        <div className="glass rounded-3xl p-6 md:p-10" data-stagger-item>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-zinc-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 md:px-8" data-reveal>
        <div className="skill-rail-wrap glass rounded-full px-4 py-3">
          <div className="skill-rail-track" aria-label="Animated skills rail">
            {[...skills, ...skills].map((skill, index) => (
              <span key={`${skill}-${index}`} className="skill-rail-item">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-4 py-24 md:px-8" data-stagger>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6" data-stagger-item>
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400">Selected Work</p>
            <h2 className="text-3xl font-medium text-white md:text-5xl">Projects with depth, speed, and character.</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name} className="project-card" data-stagger-item>
              <div className="project-topline" />
              <h3 className="mt-6 text-2xl font-medium text-white">{project.name}</h3>
              <p className="mt-4 text-zinc-300">{project.detail}</p>
              <p className="mt-6 text-sm uppercase tracking-[0.2em] text-zinc-400">{project.stack}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="achievements" className="mx-auto max-w-7xl px-4 py-12 md:px-8" data-stagger>
        <div className="mb-10" data-stagger-item>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400">Recognition & Growth</p>
          <h2 className="text-3xl font-medium text-white md:text-5xl">Proof of execution, ownership, and consistency.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((item) => (
            <article key={item.title} className="glass-card" data-stagger-item>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{item.tag}</p>
              <h3 className="mt-3 text-2xl font-medium text-white">{item.title}</h3>
              <p className="mt-4 text-zinc-300">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 pb-28 pt-10 md:px-8" data-reveal>
        <div className="glass rounded-3xl p-8 md:flex md:items-end md:justify-between md:p-12">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400">Contact</p>
            <h2 className="max-w-2xl text-3xl font-medium text-white md:text-5xl">
              Let’s build impactful digital products together.
            </h2>
            <div className="mt-5 space-y-1 text-zinc-300">
              <p className="open-to-work-inline">Open to internships and full-time roles</p>
              <p>Email: nirmalnimesh123@gmail.com</p>
              <p>Phone: +91 96507 79182</p>
              <p>
                LinkedIn:{' '}
                <a
                  href="https://www.linkedin.com/in/nimeshnirmal"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-300 hover:text-indigo-200"
                >
                  linkedin.com/in/nimeshnirmal
                </a>
              </p>
            </div>
          </div>
          <a className="btn-primary mt-8 inline-flex md:mt-0" href="mailto:nirmalnimesh123@gmai.com">
            Start a Project
          </a>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-4 pb-16 md:px-8" data-reveal>
        <div className="glass flex flex-wrap items-center justify-between gap-4 rounded-2xl px-6 py-5">
          <p className="text-sm text-zinc-300">© 2026 Nimesh Nirmal · MERN Stack Developer</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#work" className="hover:text-white transition-colors">Projects</a>
            <a href="https://www.linkedin.com/in/nimeshnirmal" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:nirmalnimesh123@gmai.com" className="hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
