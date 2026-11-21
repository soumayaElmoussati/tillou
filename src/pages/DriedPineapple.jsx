import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileText,
  Leaf,
  Sun,
  Package,
  Zap,
} from "lucide-react";

import "./DriedPineapple.css";

/* ─── SplitTitle ─────────────────────────────────────────── */
function SplitTitle({ text, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const words = text.split(" ");
  return (
    <span ref={ref} className={className} style={{ display: "inline" }}>
      {words.map((word, wi) => (
        <span key={wi} className="dp-split-word">
          {word.split("").map((char, ci) => (
            <motion.span
              key={ci}
              className="dp-split-char"
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
          {wi < words.length - 1 && <span className="dp-split-space">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

/* ─── FadeUp helper ──────────────────────────────────────── */
function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      className={className}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 28, filter: "blur(6px)" }}
      initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Data ───────────────────────────────────────────────── */
const specifications = [
  {
    label: "TIDBITS",
    value: "Dried pieces — Bulk or packed formats",
    icon: <Package size={18} strokeWidth={1.5} />,
  },
  {
    label: "RINGS",
    value: "Premium presentation — Characteristic taste",
    icon: <Sun size={18} strokeWidth={1.5} />,
  },
  {
    label: "CAPACITY",
    value: "Unit processing about 10 tonnes of fruit / day",
    icon: <Zap size={18} strokeWidth={1.5} />,
  },
];

const applications = [
  {
    title: "Snacking & distribution",
    desc: "Ready-to-eat formats for retail shelves and direct distribution channels.",
    index: "01",
  },
  {
    title: "Private labels",
    desc: "Custom packaging and branding for distributors and retail brands.",
    index: "02",
  },
  {
    title: "Food ingredients",
    desc: "Bulk supply for manufacturers — bakeries, granola, confectionery.",
    index: "03",
  },
];

/* ─── Application card ───────────────────────────────────── */
function AppCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  return (
    <motion.article
      ref={ref}
      className="dp-app-card"
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
    >
      <div className="dp-app-top">
        <span className="dp-app-index">{item.index}</span>
        <CheckCircle2 size={22} strokeWidth={1.5} className="dp-app-check" />
      </div>
      <div className="dp-app-body">
        <p className="dp-app-title">{item.title}</p>
        <p className="dp-app-desc">{item.desc}</p>
      </div>
      <span className="dp-app-line" />
    </motion.article>
  );
}

/* ─── Spec row ───────────────────────────────────────────── */
function SpecRow({ spec, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.div
      ref={ref}
      className="dp-spec-row"
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      initial={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="dp-spec-label">
        <span className="dp-spec-num">0{index + 1}</span>
        <div className="dp-spec-icon">{spec.icon}</div>
        <dt className="dp-spec-name">{spec.label}</dt>
      </div>
      <dd className="dp-spec-value">{spec.value}</dd>
      <ArrowRight size={16} className="dp-spec-arrow" />
    </motion.div>
  );
}

/* ─── Main ───────────────────────────────────────────────── */
export default function DriedPineapple() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <main className="dp-page">

      {/* ── HERO ── */}
      <section className="dp-hero" ref={heroRef}>
        <motion.div className="dp-hero-img-wrap" style={{ y: heroY }}>
          <img
            src="https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/e6b55616fbd5ae1e467706bed4602266.jpg"
            alt="Dried pineapple"
            className="dp-hero-img"
          />
        </motion.div>

        <div className="dp-hero-overlay" />
        <div className="dp-hero-grain" />

        <motion.div className="dp-hero-content" style={{ opacity: heroOpacity }}>
          <motion.div
            className="dp-hero-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="dp-hero-label-line" />
            NATURAL PROCESSING
            <span className="dp-hero-label-line" />
          </motion.div>

          <h1 className="dp-hero-h1">
            <span className="dp-hero-h1-line">
              <SplitTitle text="Dried" delay={0.35} />
            </span>
            <span className="dp-hero-h1-line dp-hero-h1-em">
              <SplitTitle text="pineapple." delay={0.5} />
            </span>
          </h1>

          <motion.p
            className="dp-hero-sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            Formats for distribution, private labels and food ingredients.
          </motion.p>

          <motion.div
            className="dp-hero-certs"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {["HACCP", "BIO", "KOSHER"].map((c) => (
              <span key={c} className="dp-cert-badge">{c}</span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/products" className="dp-back-link">
              <ArrowLeft size={15} />
              Back to products
            </Link>
          </motion.div>
        </motion.div>

        <div className="dp-hero-meta">
          <span>PRODUCT DETAILS</span>
          <span>BENIN · TILLOU GROUP</span>
        </div>

        <div className="dp-hero-index" aria-hidden>04</div>
      </section>

      {/* ── DESCRIPTION ── */}
      <section className="dp-section dp-description">
        <div className="dp-container dp-description-grid">
          <div className="dp-description-left">
            <FadeUp>
              <span className="dp-eyebrow">
                <span className="dp-eyebrow-line" /> Description
              </span>
            </FadeUp>
            <h2 className="dp-desc-h2">
              <SplitTitle text="Dried" delay={0.05} />
              {" "}
              <em><SplitTitle text="pineapple." delay={0.15} /></em>
            </h2>
            <FadeUp delay={0.2}>
              <div className="dp-desc-deco">
                <Leaf size={17} strokeWidth={1.5} />
                <span>Natural processing</span>
              </div>
            </FadeUp>
          </div>

          <div className="dp-description-right">
            <FadeUp delay={0.1}>
              <span className="dp-desc-num">01</span>
              <p className="dp-desc-copy">
                Dried pineapple from our drying unit, available as tidbits (pieces) or
                rings. A natural processing method built for distribution,
                private labels and food ingredients — retaining full flavor and texture.
              </p>
              <div className="dp-desc-rule" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── SPECIFICATIONS ── */}
      <section className="dp-section dp-specs-section">
        <div className="dp-container">
          <div className="dp-section-head">
            <div className="dp-section-head-left">
              <FadeUp>
                <span className="dp-eyebrow">
                  <span className="dp-eyebrow-line" /> Product information
                </span>
              </FadeUp>
              <h2 className="dp-section-h2">
                <SplitTitle text="Specifications" delay={0.05} />
              </h2>
            </div>
            <FadeUp delay={0.1}>
              <span className="dp-section-counter">02 / 05</span>
            </FadeUp>
          </div>

          <FadeUp delay={0.1}>
            <div className="dp-specs-card">
              <div className="dp-specs-card-top">
                <div className="dp-specs-card-icon">
                  <Leaf size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="dp-specs-card-label">PRODUCT PROFILE</span>
                  <p className="dp-specs-card-title">Dried pineapple</p>
                </div>
              </div>

              <div className="dp-specs-list">
                {specifications.map((spec, i) => (
                  <SpecRow key={spec.label} spec={spec} index={i} />
                ))}
              </div>

              <div className="dp-specs-footer">
                <span>PRODUCT SPECIFICATIONS</span>
                <span>TILLOU GROUP</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── APPLICATIONS ── */}
      <section className="dp-section dp-apps-section">
        <div className="dp-container">
          <div className="dp-section-head">
            <div className="dp-section-head-left">
              <FadeUp>
                <span className="dp-eyebrow">
                  <span className="dp-eyebrow-line" /> Product uses
                </span>
              </FadeUp>
              <h2 className="dp-section-h2">
                <SplitTitle text="Applications" delay={0.05} />
              </h2>
            </div>
            <FadeUp delay={0.1}>
              <span className="dp-section-counter">03 / 05</span>
            </FadeUp>
          </div>

          <div className="dp-apps-grid">
            {applications.map((item, i) => (
              <AppCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMATS ── */}
      <section className="dp-section dp-formats-section">
        <div className="dp-container dp-formats-grid">
          <div className="dp-formats-left">
            <FadeUp>
              <span className="dp-eyebrow">
                <span className="dp-eyebrow-line" /> Product presentation
              </span>
            </FadeUp>
            <h2 className="dp-section-h2 dp-formats-h2">
              <SplitTitle text="Formats &" delay={0.05} />
              <br />
              <SplitTitle text="packaging" delay={0.18} />
            </h2>
          </div>

          <div className="dp-formats-right">
            <FadeUp delay={0.15}>
              <span className="dp-formats-num">02</span>
              <p className="dp-formats-copy">
                Tidbits (pieces) and rings —{" "}
                <em>bulk or packed</em>
              </p>
              <div className="dp-formats-tags">
                <span>Tidbits</span>
                <span>Rings</span>
                <span>Bulk</span>
                <span>Packed</span>
              </div>
              <div className="dp-formats-rule" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── DOCUMENTATION ── */}
      <section className="dp-section dp-doc-section">
        <div className="dp-container">
          <div className="dp-section-head">
            <div className="dp-section-head-left">
              <FadeUp>
                <span className="dp-eyebrow">
                  <span className="dp-eyebrow-line" /> Technical information
                </span>
              </FadeUp>
              <h2 className="dp-section-h2">
                <SplitTitle text="Documentation" delay={0.05} />
              </h2>
            </div>
            <FadeUp delay={0.1}>
              <span className="dp-section-counter">05 / 05</span>
            </FadeUp>
          </div>

          <FadeUp delay={0.15}>
            <div className="dp-doc-card">
              <div className="dp-doc-main">
                <div className="dp-doc-icon">
                  <FileText size={24} strokeWidth={1.5} />
                </div>
                <div className="dp-doc-info">
                  <span className="dp-doc-label">TECHNICAL DOCUMENT</span>
                  <h3 className="dp-doc-title">Dried pineapple technical sheet</h3>
                  <p className="dp-doc-sub">Documentation available on request</p>
                </div>
              </div>
              <Link to="/contact" className="dp-doc-btn">
                <FileText size={15} />
                Request the technical sheet
                <ArrowRight size={15} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="dp-cta">
        <div className="dp-cta-rings" aria-hidden>
          <span /><span /><span />
        </div>

        <div className="dp-container dp-cta-inner">
          <div className="dp-cta-left">
            <FadeUp>
              <span className="dp-cta-eyebrow">TILLOU GROUP · DRIED PINEAPPLE</span>
            </FadeUp>
            <h2 className="dp-cta-h2">
              <SplitTitle text="Interested in" delay={0.1} />
              <br />
              <em><SplitTitle text="this product?" delay={0.25} /></em>
            </h2>
            <FadeUp delay={0.3}>
              <p className="dp-cta-copy">
                Request a quote to evaluate this product for your project.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.4} className="dp-cta-action">
            <Link to="/devis" className="dp-cta-btn">
              <span>Request a quote</span>
              <ArrowRight size={17} />
            </Link>
          </FadeUp>
        </div>
      </section>

    </main>
  );
}