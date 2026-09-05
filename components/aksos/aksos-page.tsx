'use client'

import { Network, type NetworkPreset } from './visualization/network'

const phases: Array<{ index: string; title: string; text: string; preset: NetworkPreset; className: string }> = [
  { index: '01', title: 'Africa is not short of activity.', text: 'Every day, companies build, governments regulate, investors move capital, and markets evolve.', preset: 'activity', className: 'phase-activity' },
  { index: '02', title: 'It is short of visibility.', text: 'The information exists. But it lives in fragments — across institutions, markets, documents and decisions.', preset: 'fragmented', className: 'phase-fragmented' },
  { index: '03', title: 'The signal is in the relationships.', text: 'The connections between entities reveal what isolated data cannot: movement, context and opportunity.', preset: 'resolved', className: 'phase-resolved' },
  { index: '04', title: 'AKSOS makes the ecosystem legible.', text: 'We turn fragmented information into an intelligence layer for the people building what comes next.', preset: 'intelligence', className: 'phase-intelligence' },
]

function Nav() {
  return <header className="aksos-nav"><a href="#top" className="wordmark" aria-label="AKSOS home"><img src="/aksos-symbol-traced.svg" alt="" />AKSOS<span className="wordmark-dot">.</span></a><nav aria-label="Primary navigation"><a href="#how-it-works">How it works</a><a href="#intelligence">Intelligence</a><a href="#contact">Contact</a></nav><span className="nav-status"><span className="status-dot" /> Intelligence infrastructure</span></header>
}

function ArrowLink({ children, href = '#contact' }: { children: React.ReactNode; href?: string }) { return <a className="arrow-link" href={href}>{children}<span aria-hidden="true">↗</span></a> }

export function AksosPage() {
  return <main id="top" className="aksos-shell">
    <Nav />
    <section className="hero section-grid" aria-labelledby="hero-title">
      <div className="hero-copy"><p className="eyebrow"><span>01</span> Intelligence for African ecosystems</p><h1 id="hero-title">Make the<br /><em>invisible</em><br />legible.</h1><p className="hero-intro">AKSOS is the intelligence layer that makes relationships across Africa&apos;s ecosystems visible.</p><ArrowLink href="#how-it-works">See the system</ArrowLink></div>
      <div className="hero-network"><Network preset="activity" label="A living network of companies, markets, capital and institutions" /><p className="figure-note">The ecosystem is already moving.<br />We help you see how.</p></div>
      <div className="hero-meta"><span>DAKAR · NAIROBI · LAGOS</span><span>2024—2025</span></div>
    </section>
    <section className="statement"><p className="eyebrow"><span>02</span> The premise</p><p className="statement-text">The continent&apos;s most important signals are often hidden in plain sight.</p><div className="statement-aside"><span className="rule" /> <p>Activity is abundant.<br />Context is scarce.</p></div></section>
    <section id="how-it-works" className="phases" aria-label="The AKSOS system"><div className="phase-intro"><p className="eyebrow"><span>03</span> From activity to intelligence</p><h2>Every fragment<br />has a <em>relationship.</em></h2></div>{phases.map((phase) => <article className={`phase ${phase.className}`} key={phase.index}><div className="phase-copy"><p className="phase-index">{phase.index} / 04</p><h3>{phase.title}</h3><p>{phase.text}</p>{phase.index === '04' && <><div id="intelligence" className="intelligence-note"><img src="/atis-symbol-traced.svg" alt="" /><div><strong>ATIS</strong><span>Africa Trade Intelligence System</span><small>Information → evidence → context → relationships → intelligence</small></div></div><p className="rita-note"><strong>RITA</strong> Relationship Intelligence &amp; Triage Analyst — where the network becomes a story.</p><ArrowLink>Build with context</ArrowLink></>}</div><Network preset={phase.preset} label={`${phase.index}: ${phase.title}`} /></article>)}</section>
    <section id="contact" className="closing section-grid"><div className="closing-mark" aria-hidden="true">A</div><div className="closing-copy"><p className="eyebrow"><span>04</span> The next layer</p><h2>See what<br /><em>connects.</em></h2><p>For investors, institutions and builders who need a clearer view of the systems shaping Africa.</p><ArrowLink>Start a conversation</ArrowLink></div></section>
    <footer className="aksos-footer"><span>AKSOS / INTELLIGENCE INFRASTRUCTURE</span><span>© 2025 AKSOS</span><a href="#top">Back to top ↑</a></footer>
  </main>
}
