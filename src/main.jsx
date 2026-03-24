import { createRoot } from 'react-dom/client'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import './index.css'
import App from './App.jsx'

gsap.registerPlugin(ScrollTrigger)

const isTouchDevice = window.matchMedia('(pointer: coarse)').matches

const lenis = new Lenis({
  duration: isTouchDevice ? 0.9 : 1.2,
  smoothWheel: !isTouchDevice,
  syncTouch: isTouchDevice,
  wheelMultiplier: 0.9,
  touchMultiplier: isTouchDevice ? 1 : 1.5,
  infinite: false,
})

lenis.on('scroll', ScrollTrigger.update)

const update = (time) => {
  lenis.raf(time * 1000)
}

gsap.ticker.add(update)
gsap.ticker.lagSmoothing(0)

const onAnchorClick = (event) => {
  const anchor = event.target.closest('a[href^="#"]')
  if (!anchor) return

  const href = anchor.getAttribute('href')
  if (!href || href === '#') return

  const target = document.querySelector(href)
  if (!target) return

  event.preventDefault()

  if (isTouchDevice) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    history.replaceState(null, '', href)
    return
  }

  lenis.scrollTo(target, {
    duration: 1.2,
    easing: (value) => 1 - Math.pow(1 - value, 3),
  })

  history.replaceState(null, '', href)
}

if (window.__portfolioAnchorHandler) {
  document.removeEventListener('click', window.__portfolioAnchorHandler)
}

window.__portfolioAnchorHandler = onAnchorClick
document.addEventListener('click', onAnchorClick)

createRoot(document.getElementById('root')).render(
  <App />,
)
