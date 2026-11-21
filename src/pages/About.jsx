import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  Compass,
  Target,
  Users,
  Apple,
  Factory,
  ShieldCheck,
  PackageCheck,
  Ship,
  Recycle,
  Leaf,
  Sprout,
} from "lucide-react";

import "./About.css";

/* ─── SplitTitle ─────────────────────────────────────────── */
function SplitTitle({ text, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const words = text.split(" ");
  return (
    <span ref={ref} className={className} style={{ display: "inline" }}>
      {words.map((word, wi) => (
        <span key={wi} className="ab-split-word">
          {word.split("").map((char, ci) => (
            <motion.span
              key={ci}
              className="ab-split-char"
              animate={inView ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
              initial={{ y: "110%", opacity: 0 }}
              transition={{
                duration: 0.65,
                delay: delay + wi * 0.06 + ci * 0.022,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {char}
            </motion.span>
          ))}
          {wi < words.length - 1 && <span className="ab-split-space">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

/* ─── FadeUp ─────────────────────────────────────────────── */
function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.18 });
  return (
    <motion.div
      ref={ref}
      className={className}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 28, filter: "blur(5px)" }}
      initial={{ opacity: 0, y: 28, filter: "blur(5px)" }}
      transition={{ duration: 0.72, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Eyebrow ────────────────────────────────────────────── */
function Eyebrow({ children, light = false }) {
  return (
    <span className={`ab-eyebrow${light ? " ab-eyebrow--light" : ""}`}>
      <span className="ab-eyebrow-line" />
      {children}
    </span>
  );
}

/* ─── Data ───────────────────────────────────────────────── */
const history = [
  { num: "01", year: "2007", desc: "Activity begins as an establishment" },
  { num: "02", year: "2011", desc: "Creation of Les Fruits Tillou SARL" },
  { num: "03", year: "2015", desc: "Creation of Les Jus Tillou SA" },
  { num: "04", year: "2016", desc: "Installation of the juice processing unit" },
  { num: "05", year: "2017–18", desc: "Construction then commissioning of the drying unit" },
  { num: "06", year: "TODAY", desc: "A complete offering for local and international markets" },
];

const valueChain = [
  { num: "01", title: "Partner producers", Icon: Users, yellow: false },
  { num: "02", title: "Fruit selection", Icon: Apple, yellow: true },
  { num: "03", title: "Local processing", Icon: Factory, yellow: false },
  { num: "04", title: "Quality control", Icon: ShieldCheck, yellow: true },
  { num: "05", title: "Packaging", Icon: PackageCheck, yellow: false },
  { num: "06", title: "Export logistics", Icon: Ship, yellow: true },
];

const impactStats = [
  { value: "≈ 1,600", label: "Partner producers within the network" },
  { value: "BENIN", label: "Sourcing rooted in the territories" },
  { value: "LOCAL", label: "Processing and value creation on site" },
  { value: "DURABLE", label: "Relationships built over time" },
];

const producerRoles = [
  { Icon: Recycle, text: "Support the regularity of supply" },
  { Icon: Leaf, text: "Strengthen good practices and traceability" },
  { Icon: Sprout, text: "Create outlets for local production" },
  { Icon: Users, text: "Promote employment, particularly in rural areas" },
];

/* ═══════════════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════════════ */
function AboutHero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section className="ab-hero" ref={heroRef}>
      <motion.div className="ab-hero-img-wrap" style={{ y: imgY }}>
        <div className="ab-hero-img" />
      </motion.div>
      <div className="ab-hero-overlay" />
      <div className="ab-hero-grain" />

      {/* spinning orbit rings */}
      <div className="ab-hero-orbit ab-orbit-1" />
      <div className="ab-hero-orbit ab-orbit-2" />

      <motion.div className="ab-hero-content" style={{ opacity: contentOpacity }}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Eyebrow light>About</Eyebrow>
        </motion.div>

        <h1 className="ab-hero-h1">
          <span className="ab-hero-line">
            <SplitTitle text="About" delay={0.3} />
          </span>
          <span className="ab-hero-line ab-hero-line--gold">
            <SplitTitle text="Tillou Group" delay={0.45} />
          </span>
        </h1>

        <motion.div
          className="ab-hero-divider"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.p
          className="ab-hero-intro"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          An integrated Beninese group specialised in pineapple.
        </motion.p>

        <motion.p
          className="ab-hero-desc"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
        >
          Tillou Group brings together two complementary companies that master the value chain,
          from supporting producers to processing and export. From field to shipment, every step
          is controlled to guarantee consistent quality, total traceability and reliable supply.
        </motion.p>
      </motion.div>

      <div className="ab-hero-meta">
        <span>TILLOU GROUP</span>
        <span>OUR STORY — 01</span>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   HISTORY TIMELINE
═══════════════════════════════════════════════════════════ */
function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  return (
    <motion.div
      ref={ref}
      className="ab-timeline-item"
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      initial={{ opacity: 0, y: 32 }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="ab-timeline-marker">
        <span>{item.num}</span>
      </div>
      <div className="ab-timeline-body">
        <span className="ab-timeline-year">{item.year}</span>
        <p className="ab-timeline-desc">{item.desc}</p>
      </div>
    </motion.div>
  );
}

function HistorySection() {
  return (
    <section id="histoire" className="ab-section ab-history">
      <div className="ab-container">
        <div className="ab-section-head">
          <FadeUp><Eyebrow>Our history</Eyebrow></FadeUp>
          <h2 className="ab-section-h2">
            <SplitTitle text="A journey built around" delay={0.05} />
            <br />
            <em><SplitTitle text="local valorisation." delay={0.2} /></em>
          </h2>
        </div>

        <div className="ab-timeline">
          <div className="ab-timeline-track" />
          {history.map((item, i) => (
            <TimelineItem key={item.num} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   VISION + MISSION (side by side on dark bg)
═══════════════════════════════════════════════════════════ */
function VisionMissionSection() {
  return (
    <section id="vision" className="ab-section ab-vismis">
      <div className="ab-vismis-rings" aria-hidden>
        <span /><span /><span />
      </div>
      <div className="ab-container ab-vismis-grid">

        {/* Vision */}
        <div className="ab-vismis-col">
          <FadeUp>
            <div className="ab-vismis-label">
              <Compass size={18} strokeWidth={1.5} />
              <Eyebrow light>Our vision</Eyebrow>
            </div>
          </FadeUp>
          <h2 className="ab-vismis-h2">
            <SplitTitle text="Making Benin a global reference for" delay={0.08} />
            {" "}
            <em><SplitTitle text="premium pineapple." delay={0.26} /></em>
          </h2>
          <FadeUp delay={0.3}>
            <p className="ab-vismis-copy">
              Demonstrating that Africa can produce, process and export to the
              most demanding standards — with consistency, traceability and
              industrial rigor.
            </p>
          </FadeUp>
        </div>

        {/* Divider */}
        <div className="ab-vismis-divider" aria-hidden />

        {/* Mission */}
        <div className="ab-vismis-col">
          <FadeUp delay={0.1}>
            <div className="ab-vismis-label">
              <Target size={18} strokeWidth={1.5} />
              <Eyebrow light>Our mission</Eyebrow>
            </div>
          </FadeUp>
          <h2 className="ab-vismis-h2">
            <SplitTitle text="Produce, process and export" delay={0.12} />
            {" "}
            <em><SplitTitle text="with rigour." delay={0.3} /></em>
          </h2>
          <FadeUp delay={0.35}>
            <p className="ab-vismis-copy">
              Putting industrial excellence at the service of the Beninese pineapple
              sector: supporting partner producers, processing locally and exporting
              products of consistent quality to international markets.
            </p>
          </FadeUp>
        </div>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   VALUE CHAIN
═══════════════════════════════════════════════════════════ */
function ChainCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const { Icon } = item;
  return (
    <motion.article
      ref={ref}
      className={`ab-chain-card${item.yellow ? " ab-chain-card--gold" : ""}`}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      initial={{ opacity: 0, y: 36 }}
      transition={{ duration: 0.65, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
    >
      <div className="ab-chain-top">
        <div className="ab-chain-icon"><Icon size={23} strokeWidth={1.6} /></div>
        <span className="ab-chain-num">{item.num}</span>
      </div>
      <h3 className="ab-chain-title">{item.title}</h3>
      <span className="ab-chain-line" />
    </motion.article>
  );
}

function ValueChainSection() {
  return (
    <section id="modele" className="ab-section ab-chain-section">
      <div className="ab-chain-bg" />
      <div className="ab-container ab-chain-inner">
        <div className="ab-section-head ab-section-head--light">
          <FadeUp><Eyebrow light>Our integrated model</Eyebrow></FadeUp>
          <h2 className="ab-section-h2 ab-section-h2--white">
            <SplitTitle text="A value chain mastered" delay={0.05} />
            <br />
            <SplitTitle text="from producer to export." delay={0.22} />
          </h2>
        </div>

        <div className="ab-chain-grid">
          {valueChain.map((item, i) => (
            <ChainCard key={item.num} item={item} index={i} />
          ))}
        </div>

        <FadeUp delay={0.3}>
          <p className="ab-chain-footnote">
            This integration improves traceability, regularity of supply and adaptation
            to client requirements.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SUPPLY & IMPACT
═══════════════════════════════════════════════════════════ */
function StatItem({ stat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  return (
    <motion.div
      ref={ref}
      className="ab-stat"
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="ab-stat-value">{stat.value}</span>
      <p className="ab-stat-label">{stat.label}</p>
    </motion.div>
  );
}

function SupplySection() {
  return (
    <section id="approvisionnement" className="ab-section ab-supply">
      <div className="ab-container">
        <div className="ab-section-head">
          <FadeUp><Eyebrow>Supply &amp; impact</Eyebrow></FadeUp>
          <h2 className="ab-section-h2">
            <SplitTitle text="A network of producers" delay={0.05} />
            <br />
            <em><SplitTitle text="at the heart of the model." delay={0.2} /></em>
          </h2>
        </div>

        <div className="ab-supply-layout">
          <div className="ab-stats-grid">
            {impactStats.map((stat, i) => (
              <StatItem key={stat.value} stat={stat} index={i} />
            ))}
          </div>

          <FadeUp delay={0.15} className="ab-role-card">
            <div className="ab-role-head">
              <span className="ab-role-accent" />
              <h3 className="ab-role-title">Our role</h3>
            </div>
            <div className="ab-role-list">
              {producerRoles.map(({ Icon, text }, i) => (
                <div className="ab-role-item" key={text}>
                  <span className="ab-role-icon"><Icon size={18} strokeWidth={1.7} /></span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   LEADERSHIP
═══════════════════════════════════════════════════════════ */
function LeadershipSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <section id="leadership" className="ab-section ab-leadership">
      <div className="ab-container">
        <FadeUp><Eyebrow light>Leadership</Eyebrow></FadeUp>

        <div className="ab-leader-grid" ref={ref}>
          {/* photo */}
          <motion.div
            className="ab-leader-photo-wrap"
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            initial={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="ab-leader-frame">
              <img
                src="https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/df34187b6997989b0ddd5fa682502e51.jpg"
                alt="Bertille Guedegbe Marcos"
                loading="lazy"
                className="ab-leader-img"
              />
              <div className="ab-leader-frame-overlay" />
            </div>
            <span className="ab-leader-caption">TILLOU GROUP</span>
          </motion.div>

          {/* content */}
          <motion.div
            className="ab-leader-content"
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            initial={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="ab-leader-h2">
              An entrepreneurial vision serving
              {" "}<em>an entire sector.</em>
            </h2>

            <h3 className="ab-leader-name">Bertille Guedegbe Marcos</h3>
            <p className="ab-leader-role">Founder and Chief Executive Officer</p>

            <p className="ab-leader-desc">
              Her journey is closely tied to the development of the pineapple sector
              in Benin: structuring supply, local processing, value creation and
              opening up to export.
            </p>

            <div className="ab-ambition-card">
              <div className="ab-ambition-head">
                <Target size={17} strokeWidth={1.5} />
                <span>Our ambition</span>
              </div>
              <p>
                To earn recognition for Beninese know-how and build lasting
                partnerships with international buyers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   CTA
═══════════════════════════════════════════════════════════ */
function AboutCTA() {
  return (
    <section className="ab-cta">
      <div className="ab-container">
        <FadeUp className="ab-cta-inner">
          <span className="ab-cta-deco" />
          <h2 className="ab-cta-h2">A project, a volume, a question?</h2>
          <p className="ab-cta-copy">Our export team replies within 24 business hours.</p>
          <Link to="/devis" className="ab-cta-btn">
            Request a quote
            <ArrowRight size={16} />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
export default function About() {
  return (
    <main className="ab-page">
      <AboutHero />
      <HistorySection />
      <VisionMissionSection />
      <ValueChainSection />
      <SupplySection />
      <LeadershipSection />
      <AboutCTA />
    </main>
  );
}