'use client'

import { Network, type NetworkPreset } from './visualization/network'

type Phase = { index: string; title: string; text: string; preset: NetworkPreset; className: string }

const phases: Phase[] = [
  { index: '03.01', title: 'Visibility is upstream of participation.', text: 'When signals are difficult to see, they become difficult to understand, trust and enter.', preset: 'fragmented', className: 'phase-gap' },
  { index: '03.02', title: 'What becomes visible can become connected.', text: 'Relationships reveal movement, context and opportunity where isolated data stops.', preset: 'resolved', className: 'phase-change' },
]

function Nav() {
  return <header className="aksos-nav"><a href="#top" className="wordmark" aria-label="AKSOS home"><img src="/aksos-symbol-traced.svg" alt="" />AKSOS<span className="wordmark-dot">.</span></a><nav aria-label="Primary navigation"><a href="#how-it-works">The premise</a><a href="#intelligence">ATIS</a><a href="#contact">Contact</a></nav><span className="nav-status"><span className="status-dot" /> Intelligence infrastructure</span></header>
}

function ArrowLink({ children, href = '#contact' }: { children: React.ReactNode; href?: string }) { return <a className="arrow-link" href={href}>{children}<span aria-hidden="true">↗</span></a> }
function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) { return <p className="eyebrow"><span>{index}</span>{children}</p> }

function TechnicalContext({ items, className = '' }: { items: string[]; className?: string }) { return <div className={`technical-context ${className}`} aria-label="System context">{items.map((item) => <span key={item}>{item}</span>)}</div> }

function Workflow() { return <div className="workflow" aria-label="Conceptual intelligence workflow">{['DISCOVER', 'STRUCTURE', 'CONNECT', 'CONTEXTUALIZE', 'INTERPRET', 'ACT'].map((item, i) => <span key={item}><b>{String(i + 1).padStart(2, '0')}</b>{item}</span>)}</div> }

function QuestionFlow({ question }: { question: string }) { return <div className="question-flow"><strong>{question}</strong><span>↓</span><span>ECOSYSTEM INFORMATION</span><span>↓</span><span>RELATIONSHIPS + CONTEXT</span><span>↓</span><b>PERSPECTIVE</b></div> }

function DependencyDiagram() {
  return <div className="dependency-diagram" aria-label="Visibility leads to understanding, trust and entry"><div className="dependency-line" />{['Difficult to see', 'Difficult to understand', 'Difficult to trust', 'Difficult to enter', 'Opportunity lost'].map((label, i) => <div className={`dependency-step step-${i}`} key={label}><span>0{i + 1}</span><strong>{label}</strong></div>)}</div>
}

function PerspectiveDiagram() {
  return <div className="perspective-diagram" aria-label="One event interpreted through multiple perspectives"><div className="perspective-event"><span className="diagram-node large" />EVENT</div><div className="perspective-branches"><div><span className="diagram-node" />INVESTOR<small>Capital / risk / upside</small></div><div><span className="diagram-node" />ENTERPRISE<small>Market / action / reach</small></div><div><span className="diagram-node" />INSTITUTION<small>Policy / impact / trust</small></div></div></div>
}

function Pathway() { return <div className="pathway">{['Join Batana', 'Participate', 'Contribute', 'Apply', 'Selected', 'ATIS'].map((item, i) => <div className={i === 4 ? 'selected' : ''} key={item}><span>{String(i + 1).padStart(2, '0')}</span><strong>{item}</strong>{i < 5 && <b aria-hidden="true">→</b>}</div>)}</div> }

export function AksosPage() {
  return <main id="top" className="aksos-shell">
    <Nav />
    <section className="hero section-grid" aria-labelledby="hero-title"><div className="hero-copy"><SectionLabel index="01">Intelligence for African ecosystems</SectionLabel><h1 id="hero-title">Make the<br /><em>invisible</em><br />legible.</h1><p className="hero-intro">AKSOS is an intelligence infrastructure layer being built to make African economic and institutional ecosystems easier to discover, understand and participate in.</p><TechnicalContext items={['SYS_STATUS // ACTIVE', 'ENTITY DISCOVERY', 'RELATIONSHIP MAPPING']} /><ArrowLink href="#how-it-works">See the system</ArrowLink></div><div className="hero-network"><Network preset="activity" label="A living network of companies, markets, capital and institutions" /><p className="figure-note">The ecosystem is already moving.<br />We help you see how.</p></div><div className="hero-meta"><span>DAKAR · NAIROBI · LAGOS</span><span>2024—2025</span></div></section>

    <section className="statement" id="how-it-works"><SectionLabel index="02">The premise</SectionLabel><p className="statement-text">The continent&apos;s most important signals are often hidden in plain sight.</p><div className="statement-aside"><span className="rule" /><p>Activity is abundant.<br />Context is scarce.</p></div></section>

    <section className="visibility-section"><div className="section-copy"><SectionLabel index="03">The visibility gap</SectionLabel><h2>Something exists<br />before it is <em>seen.</em></h2><p>People, capital, projects and policy are already in motion. From a distance, the ecosystem dissolves into fragments.</p></div><div className="gap-field"><div className="visible-ecosystem"><span>Visible ecosystem</span>{['People', 'Enterprises', 'Capital', 'Projects', 'Policy', 'Opportunities'].map((x) => <b key={x}><i />{x}</b>)}</div><div className="distance-field"><span>From a distance</span><i>?</i><i>·</i><i>?</i><i>·</i><i>?</i></div></div></section>

    <section className="dependency-section"><div className="section-copy"><SectionLabel index="04">Why visibility matters</SectionLabel><h2>Visibility is<br /><em>upstream.</em></h2><p>Lack of visibility is not the only constraint. It is the condition that makes the other constraints harder to navigate.</p></div><DependencyDiagram /></section>

    <section className="phases"><div className="phase-intro"><SectionLabel index="05">From activity to intelligence</SectionLabel><h2>Every fragment<br />has a <em>relationship.</em></h2></div>{phases.map((phase) => <article className={`phase ${phase.className}`} key={phase.index}><div className="phase-copy"><p className="phase-index">{phase.index}</p><h3>{phase.title}</h3><p>{phase.text}</p></div><Network preset={phase.preset} label={`${phase.index}: ${phase.title}`} /></article>)}</section>

    <section className="aksos-section"><div className="section-copy"><SectionLabel index="06">The operator layer</SectionLabel><h2>You do the work.<br /><em>AKSOS</em> gives it context.</h2><p>Infrastructure should support the operator, not become the protagonist. The work stays human. The view gets wider.</p></div><div className="operator-diagram"><strong>YOU</strong><span>↓</span><strong>YOUR WORK</strong><span>↓</span><div className="small-mark"><img src="/aksos-symbol-traced.svg" alt="" /> AKSOS</div><span>↓</span><p>VISIBILITY<br />+ CONTEXT<br />+ UNDERSTANDING</p></div></section>

    <section className="atis-section" id="intelligence"><div className="section-copy"><SectionLabel index="07">ATIS / Africa Trade Intelligence System</SectionLabel><h2>Information becomes<br /><em>perspective.</em></h2><p>ATIS is a multi-layer intelligence system for reading the relationships behind the signal: entities, events, projects, institutions, capital and policy.</p><TechnicalContext items={['DATA COVERAGE', 'ENTITY DISCOVERY', 'RELATIONSHIP MAPPING', 'PERSPECTIVE // ZIMBABWE']} /><Workflow /></div><div className="atis-visual"><div className="atis-layers"><span>INFORMATION</span><b>↓</b><div className="layer-box"><small>DATA COVERAGE // RELATIONSHIP DISCOVERY</small><Network preset="intelligence" label="ATIS relationship discovery graph" /><small>CONTEXT // PERSPECTIVE ANALYSIS</small></div><b>↓</b><span>CONTEXT</span><b>↓</b><span>PERSPECTIVE</span><b>↓</b><strong>INTELLIGENCE</strong></div><PerspectiveDiagram /></div></section>

    <section className="use-cases"><SectionLabel index="08">Question-specific intelligence</SectionLabel><h2>Different questions.<br /><em>Different meaning.</em></h2><div className="case-grid"><article><span>01 / INVESTOR</span><h3>Where are the relevant opportunities?</h3><QuestionFlow question="OPERATIONAL QUESTION" /></article><article><span>02 / ENTERPRISE</span><h3>Who is connected to this organization?</h3><QuestionFlow question="RELATIONSHIP QUESTION" /></article><article><span>03 / OPERATOR</span><h3>What does this development mean for me?</h3><QuestionFlow question="PERSPECTIVE QUESTION" /></article></div></section>

    <section className="batana-section"><div className="section-copy"><SectionLabel index="09">Batana</SectionLabel><h2>Participation is<br /><em>infrastructure.</em></h2><p>A human network of contributors, participants and builders. The pathway begins with showing up.</p><ArrowLink>Join Batana</ArrowLink></div><div className="human-network"><Network preset="resolved" label="A human network of contributors and participants" /><Pathway /></div></section>

    <section className="network-section"><SectionLabel index="10">The network</SectionLabel><div className="network-heading"><h2>More visibility.<br />More <em>relationships.</em></h2><p>When the ecosystem is legible, boundaries become bridges. Participation compounds across enterprises, capital, institutions and projects.</p></div><Network preset="intelligence" label="Compounding relationships across the ecosystem" /></section>

    <section className="future-section"><div className="future-line"><span>Zimbabwe</span><i>↓</i><span>More visible</span><i>↓</i><span>More understandable</span><i>↓</i><span>More connected</span><i>↓</i><strong>Africa</strong></div></section>

    <section id="contact" className="closing"><SectionLabel index="11">The next layer</SectionLabel><h2>When can<br /><em>I use it?</em></h2><p>The system is being built.<br />The work is already beginning.</p><div className="closing-actions"><ArrowLink>Join Batana</ArrowLink><ArrowLink>Request ATIS access</ArrowLink></div><div className="closing-words">SEE → CONNECT → UNDERSTAND → ACT → BUILD</div></section>
    <footer className="aksos-footer"><span>AKSOS / INTELLIGENCE INFRASTRUCTURE</span><span>© 2025 AKSOS</span><a href="#top">Back to top ↑</a></footer>
  </main>
}
