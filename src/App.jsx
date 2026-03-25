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

const techStackRail = [
  {
    name: 'HTML5',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS3',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Express',
    logo: 'https://cdn.simpleicons.org/express/ffffff',
  },
  {
    name: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'MySQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'PostgreSQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'Tailwind CSS',
    logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  },
  {
    name: 'Python',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'C++',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  },
  {
    name: 'GitHub',
    logo: 'https://cdn.simpleicons.org/github/ffffff',
  },
  {
    name: 'VS Code',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  },
]

const impactStats = [
  { label: 'Internship Experience', value: '4 Months' },
  { label: 'Core Projects', value: '3+' },
  { label: 'Tech Stack', value: 'MERN + APIs' },
  { label: 'Location', value: 'New Delhi' },
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

function App() {
  const cursorRef = useRef(null)
  const glowRef = useRef(null)
  const containerRef = useRef(null)
  const audioContextRef = useRef(null)
  const lastHoverTargetRef = useRef(null)
  const scrollProgressFillRef = useRef(null)
  const scrollProgressDotRef = useRef(null)
  const navLinksRef = useRef(null)
  const navItemRefs = useRef({})
  const [isMobileView, setIsMobileView] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(max-width: 768px)').matches || window.matchMedia('(pointer: coarse)').matches
  })
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'midnight'
    return localStorage.getItem('portfolio-theme') || 'midnight'
  })
  const [activeNav, setActiveNav] = useState('home')
  const [navIndicator, setNavIndicator] = useState({ left: 0, width: 0, ready: false })

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'work', label: 'Work' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleNavClick = (targetId) => {
    setActiveNav(targetId)
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mobileQuery = window.matchMedia('(max-width: 768px)')
    const coarseQuery = window.matchMedia('(pointer: coarse)')

    const updateMobileState = () => {
      setIsMobileView(mobileQuery.matches || coarseQuery.matches)
    }

    updateMobileState()
    mobileQuery.addEventListener('change', updateMobileState)
    coarseQuery.addEventListener('change', updateMobileState)

    return () => {
      mobileQuery.removeEventListener('change', updateMobileState)
      coarseQuery.removeEventListener('change', updateMobileState)
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const updateNavIndicator = () => {
      const navContainer = navLinksRef.current
      const activeItem = navItemRefs.current[activeNav]
      if (!navContainer || !activeItem) return

      const navRect = navContainer.getBoundingClientRect()
      const itemRect = activeItem.getBoundingClientRect()

      setNavIndicator({
        left: itemRect.left - navRect.left,
        width: itemRect.width,
        ready: true,
      })
    }

    updateNavIndicator()
    window.addEventListener('resize', updateNavIndicator)

    return () => {
      window.removeEventListener('resize', updateNavIndicator)
    }
  }, [activeNav])

  useEffect(() => {
    const trackedSections = ['home', 'about', 'experience', 'skills', 'work', 'achievements', 'contact']
    const sectionNodes = trackedSections
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sectionNodes.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

        if (mostVisible?.target?.id) {
          setActiveNav(mostVisible.target.id)
        }
      },
      {
        threshold: [0.25, 0.5, 0.75],
        rootMargin: '-15% 0px -35% 0px',
      },
    )

    sectionNodes.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let progressTrigger = null

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

    if (!isMobileView) {
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
    }

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

    const progressFill = scrollProgressFillRef.current
    const progressDot = scrollProgressDotRef.current

    if (progressFill && progressDot) {
      gsap.set(progressFill, { transformOrigin: 'top center', scaleY: 0 })

      progressTrigger = ScrollTrigger.create({
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress
          gsap.set(progressFill, { scaleY: progress })

          const trackHeight = progressFill.parentElement?.clientHeight || 0
          const dotOffset = Math.max(trackHeight - 12, 0)
          gsap.set(progressDot, { y: progress * dotOffset })
        },
      })
    }

    return () => {
      progressTrigger?.kill()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [isMobileView])

  useEffect(() => {
    if (isMobileView) return

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
  }, [isMobileView])

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const getAudioContext = () => {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext
      if (!AudioContextClass) return null

      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContextClass()
      }

      if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume().catch(() => {})
      }

      return audioContextRef.current
    }

    const playTick = () => {
      const audioContext = getAudioContext()
      if (!audioContext) return

      const now = audioContext.currentTime
      const oscillator = audioContext.createOscillator()
      const gain = audioContext.createGain()

      oscillator.type = 'square'
      oscillator.frequency.setValueAtTime(1800, now)
      oscillator.frequency.exponentialRampToValueAtTime(900, now + 0.03)

      gain.gain.setValueAtTime(0.0001, now)
      gain.gain.exponentialRampToValueAtTime(0.05, now + 0.004)
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05)

      oscillator.connect(gain)
      gain.connect(audioContext.destination)

      oscillator.start(now)
      oscillator.stop(now + 0.052)
    }

    const unlockAudio = () => {
      getAudioContext()
      window.removeEventListener('pointerdown', unlockAudio, true)
      window.removeEventListener('keydown', unlockAudio, true)
    }

    const hoverSoundSelector = [
      '.tech-stack-item',
      '.tech-stack-mark',
      'a',
      'button',
      '[role="button"]',
      'input[type="button"]',
      'input[type="submit"]',
      'input[type="checkbox"]',
      'input[type="radio"]',
      'summary',
      '[data-clickable="true"]',
    ].join(', ')

    const onMouseOver = (event) => {
      if (!(event.target instanceof Element)) return

      const targetElement = event.target.closest(hoverSoundSelector)
      if (!targetElement) {
        lastHoverTargetRef.current = null
        return
      }

      if (targetElement.matches(':disabled, [aria-disabled="true"]')) return
      if (lastHoverTargetRef.current === targetElement) return

      lastHoverTargetRef.current = targetElement
      playTick()
    }

    window.addEventListener('pointerdown', unlockAudio, true)
    window.addEventListener('keydown', unlockAudio, true)
    window.addEventListener('mouseover', onMouseOver, true)

    return () => {
      window.removeEventListener('pointerdown', unlockAudio, true)
      window.removeEventListener('keydown', unlockAudio, true)
      window.removeEventListener('mouseover', onMouseOver, true)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative overflow-x-clip">
      {!isMobileView && <div ref={cursorRef} className="custom-cursor" />}
      {!isMobileView && <div ref={glowRef} className="custom-cursor-glow" />}
      <div className="scroll-progress" aria-hidden="true">
        <div ref={scrollProgressFillRef} className="scroll-progress-fill" />
        <span ref={scrollProgressDotRef} className="scroll-progress-dot" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-noise opacity-30" />

      <section id="home" className="landing-home section-shell section-scatter relative w-full min-h-screen pb-14 pt-6 md:pb-20 md:pt-8">
        <nav className="landing-nav" data-reveal>
          <div className="landing-brand">
            <span className="landing-brand-mark">NN</span>
            <div className="landing-brand-copy">
              <p>Creative Full Stack Dev</p>
              <p>Building the Future</p>
            </div>
          </div>

          <div className="landing-nav-pill nav-links">
            <div ref={navLinksRef} className="landing-nav-links">
              <span
                className={`landing-nav-indicator ${navIndicator.ready ? 'is-ready' : ''}`}
                style={{ left: `${navIndicator.left}px`, width: `${navIndicator.width}px` }}
              />
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  ref={(element) => {
                    if (element) navItemRefs.current[item.id] = element
                  }}
                  className={activeNav === item.id ? 'is-active' : ''}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <button
              type="button"
              className="theme-switch"
              onClick={() => setTheme((prev) => (prev === 'midnight' ? 'aurora' : 'midnight'))}
              aria-label="Toggle website theme"
            >
              {theme === 'midnight' ? 'Light' : 'Dark'}
            </button>
          </div>
        </nav>

        <div className="landing-center" data-stagger>
          <h1 className="hero-line landing-title" data-stagger-item data-nav-focus>NIMESH</h1>
          <p className="hero-line landing-kicker" data-stagger-item data-nav-focus>I design and build products that</p>
          <p className="hero-line landing-impact" data-stagger-item>deliver real impact.</p>
        </div>

        <div className="landing-edge-meta" data-reveal>
          <div className="landing-meta-block">
            <p className="landing-meta-label">Based In New Delhi, India</p>
          </div>
          <div className="landing-meta-block right">
            <p className="landing-meta-label">Full Stack Dev & Designer</p>
          </div>
        </div>
      </section>

      <section className="section-shell section-scatter w-full py-6" data-stagger>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat) => (
            <article key={stat.label} className="glass-card py-6" data-stagger-item>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{stat.label}</p>
              <p className="mt-3 text-2xl font-semibold text-white">{stat.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section-shell section-scatter w-full py-20" data-reveal>
        <div className="glass rounded-3xl p-6 md:p-10">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-400">About</p>
          <div className="grid gap-8 md:grid-cols-12 md:gap-12">
            <h2 data-nav-focus className="md:col-span-7 text-4xl font-medium leading-tight text-white md:text-6xl">
              Passionate MERN Stack Developer building scalable, user-focused digital products.
            </h2>
            <div className="md:col-span-5 space-y-6 text-base leading-relaxed text-zinc-300 sm:text-lg md:text-xl">
              <p>
                I am a Full Stack Developer with hands-on experience building scalable web applications using MongoDB, Express.js, React.js, and Node.js.
              </p>
              <p>
                I enjoy working across both frontend and backend—crafting responsive interfaces, building efficient APIs, and shipping features with clean architecture.
              </p>
              <p>
                I am focused on meaningful, real-world products where I can keep growing, collaborate with strong teams, and deliver reliable engineering impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section-shell section-scatter w-full py-10" data-stagger>
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

      <section className="section-shell section-scatter w-full py-10" data-stagger>
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

      <section id="skills" className="section-shell section-scatter w-full py-10" data-stagger>
        <p className="mb-8 text-sm uppercase tracking-[0.3em] text-zinc-400" data-stagger-item>
          Technical Skills
        </p>
        <div className="glass rounded-3xl p-6 md:p-10" data-stagger-item>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-sm text-zinc-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-scatter w-full py-6" data-reveal>
        <div className="tech-stack-rail px-4 py-6 md:px-8 md:py-7">
          <h3 className="tech-stack-title">Tech Stack</h3>
          <div className="tech-stack-track" aria-label="Animated tech stack rail">
            {[...techStackRail, ...techStackRail].map((item, index) => (
              <div key={`${item.name}-${index}`} className="tech-stack-item">
                <span className="tech-stack-mark">
                  <img src={item.logo} alt={`${item.name} logo`} loading="lazy" className="tech-stack-logo" />
                </span>
                <span className="tech-stack-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section-shell section-scatter w-full py-24" data-stagger>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6" data-stagger-item>
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400">Selected Work</p>
            <h2 data-nav-focus className="text-3xl font-medium text-white md:text-5xl">Projects with depth, speed, and character.</h2>
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

      <section id="achievements" className="section-shell section-scatter w-full py-12" data-stagger>
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

      <section id="contact" className="section-shell section-scatter w-full pb-28 pt-10" data-reveal>
        <div className="glass rounded-3xl p-6 md:p-10">
          <div className="grid gap-10 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-7">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400">Contact</p>
            <h2 data-nav-focus className="text-4xl font-medium leading-tight text-white md:text-6xl">
              Let’s build impactful digital products together.
            </h2>
            <div className="mt-8 grid gap-4 text-zinc-300 sm:grid-cols-2 md:gap-6">
              <p className="open-to-work-inline">Open to internships and full-time roles</p>
              <p>
                Email:{' '}
                <a
                  href="mailto:nirmalnimesh123@gmail.com"
                  className="text-indigo-300 hover:text-indigo-200"
                >
                  nirmalnimesh123@gmail.com
                </a>
              </p>
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
            <div className="md:col-span-5 md:flex md:items-end md:justify-end">
              <a className="btn-primary contact-cta inline-flex" href="mailto:nirmalnimesh123@gmai.com">
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="section-shell section-scatter w-full pb-16" data-reveal>
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
