'use client'

import { Network } from './visualization/network'

type LabelProps = { index: string; children: React.ReactNode }

function SectionLabel({ index, children }: LabelProps) {
  return <p className="eyebrow"><span>{index}</span>{children}</p>
}

function ArrowLink({ children, href = '#contact' }: { children: React.ReactNode; href?: string }) {
  return <a className="arrow-link" href={href}>{children}<span aria-hidden="true">↗</span></a>
}

function ComparisonGraph() {
  return <div className="comparison-graph" aria-label="Comparison of fragmented and connected ecosystem coverage">
    <div className="comparison-panel comparison-without"><span className="comparison-title">Without coverage</span><p>Isolated signals. Missing relationships. Dead ends.</p><Network preset="fragmented" label="Fragmented ecosystem with isolated nodes" /></div>
    <div className="comparison-panel comparison-with"><span className="comparison-title">With ecosystem coverage</span><p>The same entities, with relationships becoming visible.</p><Network preset="resolved" label="Connected ecosystem with visible relationships" /></div>
  </div>
}

function Flow({ items }: { items: string[] }) {
  return <div className="editorial-flow">{items.map((item, i) => <span key={item}><b>{item}</b>{i < items.length - 1 && <i aria-hidden="true">↓</i>}</span>)}</div>
}

function Nav() {
  return <header className="aksos-nav"><a href="#top" className="wordmark" aria-label="AKSOS home"><img src="/aksos-symbol-traced.svg" alt="" />AKSOS<span className="wordmark-dot">.</span></a><nav aria-label="Primary navigation"><a href="#about">About</a><a href="#atis">ATIS</a><a href="#batana">Batana</a><a href="#contact">Contact</a></nav><a className="nav-cta" href="#batana">Join Batana <span aria-hidden="true">↗</span></a></header>
}

export function AksosPage() {
  return <main id="top" className="aksos-shell">
    <Nav />
    <section className="hero section-grid" aria-labelledby="hero-title"><div className="hero-copy"><SectionLabel index="00">An emerging initiative</SectionLabel><h1 id="hero-title">What if more of Africa could be <em>seen?</em></h1><p className="hero-intro">AKSOS is researching and building systems that make complex African ecosystems more visible, understandable and connected.</p><p className="honesty-note">This is an active hypothesis. The work is still being tested.</p><ArrowLink href="#world">Explore the question</ArrowLink></div><div className="hero-network"><Network preset="activity" label="A living network of companies, markets, capital and institutions" /><p className="figure-note">Companies. Institutions. Capital. Projects.<br />An ecosystem already in motion.</p></div></section>

    <section id="world" className="world-section"><SectionLabel index="01">The world</SectionLabel><div className="world-copy"><h2>Africa is full of <em>activity.</em></h2><p>Companies build. Governments regulate. People move. Capital moves. Projects begin. Markets change. Institutions interact. Opportunities emerge.</p><p>The ecosystem is alive. But activity is not the same as visibility.</p></div></section>

    <section className="visibility-section"><div className="section-copy"><SectionLabel index="02">The visibility gap</SectionLabel><h2>The information exists. The visibility doesn&apos;t always.</h2><p>Important signals can be distributed across institutions, company records, reports, regulations, projects, people and disconnected databases.</p></div><ComparisonGraph /></section>

    <section className="dependency-section"><div className="section-copy"><SectionLabel index="03">Why visibility matters</SectionLabel><h2>If it is difficult to see, it becomes difficult to <em>understand.</em></h2><p>Visibility is not the only condition for participation. It is one layer of infrastructure that makes informed participation easier.</p></div><Flow items={['DIFFICULT TO SEE', 'DIFFICULT TO UNDERSTAND', 'DIFFICULT TO TRUST', 'DIFFICULT TO ENTER', 'OPPORTUNITY CAN BE MISSED']} /></section>

    <section className="hypothesis-section"><SectionLabel index="04">What could change?</SectionLabel><h2>Fragmented <span>→</span> visible <span>→</span> connected <span>→</span> understandable.</h2><p>What happens when people, companies, institutions, projects, capital, policy and markets can be read in relationship rather than isolation?</p><Network preset="resolved" label="Relationships progressively emerging from fragmented signals" /></section>

    <section id="about" className="origin-section"><div className="section-copy"><SectionLabel index="05">Origin // Tino Makiriyado</SectionLabel><h2>The idea came from working inside the <em>problem.</em></h2><p>Experience working with CIVA involved breaking down complex systems and ecosystems, understanding how different entities interact, and turning fragmented information into a coherent picture.</p><p>Working across countries made a recurring problem visible: the information often existed, but was difficult to find, verify, connect and interpret.</p></div><div className="origin-aside"><span className="origin-mark">AKSOS</span><p>Information access is an ecosystem problem.</p></div></section>

    <section className="pilot-section"><div className="section-copy"><SectionLabel index="06">Pilot // Zimbabwe</SectionLabel><h2>An idea needs somewhere real to be <em>tested.</em></h2><p>Zimbabwe is the first environment in which AKSOS is investigating whether a deeper intelligence layer can make an ecosystem materially easier to see and understand.</p><p>The aim is not to assume a result. It is to produce evidence.</p></div><div className="pilot-graph"><Network preset="intelligence" label="Zimbabwe pilot ecosystem represented as institutions, enterprises, projects and relationships" /><Flow items={['ZIMBABWE', 'TEST', 'EVIDENCE', 'LEARN', 'EVALUATE', 'TRANSFER?']} /></div></section>

    <section className="research-break"><p className="eyebrow"><span>07</span> The research question</p><h2>Can this <em>work?</em></h2><p>Can an intelligence system materially improve the ability to see, understand and navigate a complex African ecosystem?</p></section>

    <section className="regional-section"><SectionLabel index="08">Transferability</SectionLabel><div className="regional-grid"><div><h2>If it works in Zimbabwe, can the underlying approach <em>transfer?</em></h2><p>Southern Africa and Africa are questions to investigate, not predetermined expansion stages.</p></div><Flow items={['ZIMBABWE', 'SOUTHERN AFRICA', 'AFRICA']} /></div></section>

    <section id="atis" className="atis-section"><div className="section-copy"><SectionLabel index="09">System // ATIS</SectionLabel><p className="system-name">ATIS</p><p className="system-expansion">Africa Trade Intelligence System</p><h2>The system we&apos;re building to see the <em>ecosystem.</em></h2><p>ATIS is being developed as the technical embodiment of the hypothesis: resolving fragmented information into evidence, context, relationships and intelligence.</p><Flow items={['INFORMATION', 'EVIDENCE', 'CONTEXT', 'RELATIONSHIPS', 'INTELLIGENCE']} /></div><div className="atis-graph"><Network preset="intelligence" label="ATIS relationship discovery graph" /><p>Semantic intelligence is not simply a database. It is information plus context, relationships and perspective.</p></div></section>

    <section className="rita-section"><div><SectionLabel index="10">ATIS // Relationship intelligence</SectionLabel><h2>Not every connection is a <em>story.</em></h2><p>RITA is a conceptual intelligence layer within ATIS. It helps determine which relationships matter and which may represent meaningful stories or developments.</p></div><Flow items={['EVIDENCE', 'RELATIONSHIPS', 'TRIAGE', 'STORY GRAPH', 'CONTEXT GRAPH', 'INTELLIGENCE']} /></section>

    <section className="use-cases"><SectionLabel index="11">Real-world questions</SectionLabel><h2>Different questions.<br /><em>Different meaning.</em></h2><div className="case-grid"><article><span>INVESTOR</span><h3>What is actually happening in this market?</h3><p>Companies, projects, institutions, capital, policy and relationships.</p></article><article><span>ENTERPRISE</span><h3>Who and what should I understand before entering?</h3><p>People, companies, institutions, opportunities and developments.</p></article><article><span>RESEARCHER / OPERATOR</span><h3>What does this development mean from my perspective?</h3><p>Information transformed into contextual understanding.</p></article></div></section>

    <section id="batana" className="batana-section"><div className="section-copy"><SectionLabel index="12">Participation // Batana</SectionLabel><h2>The work is not meant to happen from a <em>distance.</em></h2><p>Batana is the participation and community layer around the initiative. People can participate, contribute, discover opportunities, learn, apply and potentially be selected for deeper involvement.</p><ArrowLink>Join Batana</ArrowLink></div><div className="batana-visual"><Network preset="resolved" label="A human network of contributors and participants" /><Flow items={['PARTICIPATE', 'CONTRIBUTE', 'DISCOVER', 'LEARN', 'APPLY', 'BE SELECTED']} /></div></section>

    <section className="network-section"><SectionLabel index="13">The network</SectionLabel><div className="network-heading"><h2>More visibility.<br />More <em>relationships.</em></h2><p>As more people, companies, institutions, projects and information become visible, the ecosystem becomes richer.</p></div><Network preset="intelligence" label="A restrained network showing relationships across the ecosystem" /><Flow items={['MORE VISIBILITY', 'MORE CONNECTIONS', 'MORE CONTEXT', 'MORE PARTICIPATION', 'RICHER ECOSYSTEM']} /></section>

    <section className="future-section"><SectionLabel index="14">The future</SectionLabel><Flow items={['ZIMBABWE', 'MORE VISIBLE', 'MORE UNDERSTANDABLE', 'MORE CONNECTED', 'SOUTHERN AFRICA', 'AFRICA']} /></section>

    <section id="contact" className="closing"><SectionLabel index="15">The work is underway</SectionLabel><h2>What happens when an ecosystem becomes easier to <em>see?</em></h2><p>AKSOS is still being researched, tested and built. Zimbabwe is the first environment in which the idea is being put to work.</p><div className="closing-actions"><ArrowLink href="#batana">Join Batana</ArrowLink><ArrowLink>Request ATIS access</ArrowLink></div><div className="closing-words">SEE → CONNECT → UNDERSTAND → ACT → BUILD</div></section>
    <footer className="aksos-footer"><span>AKSOS / AN EMERGING INITIATIVE</span><span>© 2025 AKSOS</span><a href="#top">Back to top ↑</a></footer>
  </main>
}

export default AksosPage
