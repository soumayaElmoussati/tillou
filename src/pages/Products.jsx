import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Leaf,
  Package,
  Thermometer,
  Truck,
  Zap,
} from "lucide-react";
import "./Products.css";

/* =========================================
   DATA
========================================= */

const FILTERS = ["All", "Fresh", "Juice", "Concentrate", "Dried"];

const PRODUCTS = [
  {
    id: "fresh-pineapple",
    category: "Fresh",
    name: "Fresh Sugarloaf Pineapple",
    tagline: "Whole fruit · Grade AA",
    badge: "EXPORT READY",
    color: "#2a5e47",
    image: "https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/bc25af427c134f2e93f40ac26c53ab09.jpg",
    description: "Exceptional fruit selected and graded to strict standards, guaranteeing optimal freshness and flavour for export markets worldwide.",
    specs: [
      { icon: Package, label: "Format", value: "Whole fresh pineapple" },
      { icon: Zap, label: "Capacity", value: "60 t / week" },
      { icon: Truck, label: "Logistics", value: "Air freight — temperature controlled" },
      { icon: Leaf, label: "Certification", value: "GlobalG.A.P. · BIO" },
    ],
    path: "/products/ananas-seche",
  },
  {
    id: "nfc-juice",
    category: "Juice",
    name: "NFC Pineapple Juice",
    tagline: "Not from concentrate · 100% pure",
    badge: "INDUSTRIAL INGREDIENT",
    color: "#174735",
    image: "https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/2e87cfbc9803a4fdf9a50dd69620a0de.jpg",
    description: "Pure juice obtained by controlled extraction and processing. For beverage industrials, packers and food formulators requiring premium quality.",
    specs: [
      { icon: Package, label: "Export format", value: "Aseptic drums · 218 kg net" },
      { icon: Zap, label: "Line capacity", value: "~3 t / hour" },
      { icon: Thermometer, label: "Storage", value: "Ambient — 18-month shelf life" },
      { icon: Leaf, label: "Certification", value: "ISO 22000 · HACCP · Kosher" },
    ],
    path: "/products/ananas-seche",
  },
  {
    id: "concentrate",
    category: "Concentrate",
    name: "Pineapple Juice Concentrate",
    tagline: "59–62° Brix · High yield",
    badge: "LOGISTICS OPTIMISED",
    color: "#0d2e22",
    image: "https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/482805714155d4ca29e88bf4765290dd.jpg",
    description: "Industrial solution for beverage and food product formulation. Consistent quality, high yield, reduced logistics cost through volume concentration.",
    specs: [
      { icon: Package, label: "Packaging", value: "265 kg aseptic drums" },
      { icon: Thermometer, label: "Brix", value: "59–62°" },
      { icon: Truck, label: "Shipping", value: "Sea freight · cost optimised" },
      { icon: Leaf, label: "Certification", value: "ISO 22000 · HACCP" },
    ],
    path: "/products/ananas-seche",
  },
  {
    id: "dried-pineapple",
    category: "Dried",
    name: "Dried Pineapple",
    tagline: "Tidbits & rings · Natural process",
    badge: "SHELF STABLE",
    color: "#2a5e47",
    image: "https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/e6b55616fbd5ae1e467706bed4602266.jpg",
    description: "Two formats for distribution, private label and food ingredients: tidbits in bulk or packed formats, and premium presentation rings.",
    specs: [
      { icon: Package, label: "Tidbits", value: "Dried pieces · bulk or retail pack" },
      { icon: Package, label: "Rings", value: "Premium format · characteristic taste" },
      { icon: Thermometer, label: "Shelf life", value: "12+ months — ambient storage" },
      { icon: Leaf, label: "Process", value: "No added sugar · natural drying" },
    ],
    path: "/products/ananas-seche",
  },
];

/* =========================================
   MOTION VARIANTS
========================================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* =========================================
   SPLIT TITLE
========================================= */

function SplitTitle({ text, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  return (
    <span ref={ref} className={`split-root ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="split-ch"
          initial={{ y: "110%", opacity: 0 }}
          animate={inView ? { y: "0%", opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: delay + i * 0.025, ease: [0.16, 1, 0.3, 1] }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  );
}

/* =========================================
   PRODUCT CARD
========================================= */

function ProductCard({ product, index }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.article
      ref={ref}
      className="pc"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      layout
    >
      {/* Image */}
      <Link to={product.path} className="pc-img-wrap" aria-label={product.name}>
        <img src={product.image} alt={product.name} className="pc-img" />
        <div className="pc-img-overlay" />
        <span className="pc-badge">{product.badge}</span>
        <span className="pc-num">0{index + 1}</span>
        <div className="pc-hover-cta">
          <span>View product</span>
          <ArrowUpRight size={16} />
        </div>
      </Link>

      {/* Body */}
      <div className="pc-body">
        <div className="pc-top">
          <span className="pc-category">{product.category}</span>
          <span className="pc-tagline">{product.tagline}</span>
        </div>

        <h3 className="pc-name">{product.name}</h3>
        <p className="pc-desc">{product.description}</p>

        {/* Specs accordion */}
        <button
          className={`pc-specs-toggle${open ? " is-open" : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
        >
          <span>Technical specifications</span>
          <ChevronDown size={15} />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              className="pc-specs"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="pc-specs-inner">
                {product.specs.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} className="pc-spec">
                      <span className="pc-spec-icon"><Icon size={13} /></span>
                      <div>
                        <dt>{s.label}</dt>
                        <dd>{s.value}</dd>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Link to={product.path} className="pc-link">
          Full product sheet <ArrowRight size={15} />
        </Link>
      </div>
    </motion.article>
  );
}

/* =========================================
   PAGE
========================================= */

export default function Products() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === active);

  return (
    <div className="prod-page">

      {/* ── HERO ── */}
      <section className="prod-hero">
        <div className="prod-hero-bg">
          <img
            src="https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/8907dd8435fb75a239b89b8d8113a6e8.jpg"
            alt=""
          />
          <div className="prod-hero-gradient" />
          <div className="prod-hero-noise" />
        </div>

        <div className="prod-hero-body">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="prod-hero-content"
          >
            <motion.span className="prod-eyebrow" variants={fadeUp}>
              Our offer
            </motion.span>

            <h1 className="prod-hero-h1">
              <span className="prod-hero-line1">
                <SplitTitle text="Products &" delay={0.1} />
              </span>
              <em className="prod-hero-line2">
                <SplitTitle text="Ingredients" delay={0.3} />
              </em>
            </h1>

            <motion.p className="prod-hero-desc" variants={fadeUp}>
              The excellence of Benin Sugarloaf pineapple — processed and packed to meet the demands of global agri-food industries.
            </motion.p>

            <motion.div className="prod-hero-certs" variants={fadeUp}>
              {["GlobalG.A.P.", "ISO 22000", "HACCP", "Kosher", "BIO"].map((c) => (
                <span key={c}>{c}</span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="prod-hero-foot">
          <span>Benin · West Africa</span>
          <span className="prod-hero-foot-rule" />
          <span>Export · Global markets</span>
        </div>

        {/* Decorative orbs */}
        <div className="prod-orb prod-orb--1" />
        <div className="prod-orb prod-orb--2" />
      </section>

      {/* ── CATALOG ── */}
      <section className="prod-catalog">
        <div className="prod-container">

          {/* Header */}
          <div className="prod-catalog-head">
            <div>
              <span className="prod-label">Our product range</span>
              <h2 className="prod-catalog-h2">
                <SplitTitle text="Our range" />
              </h2>
            </div>
            <p className="prod-count">
              <AnimatePresence mode="wait">
                <motion.span
                  key={active}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  {filtered.length} {filtered.length > 1 ? "products" : "product"}
                </motion.span>
              </AnimatePresence>
            </p>
          </div>

          {/* Filters */}
          <div className="prod-filters">
            <span className="prod-filter-label">Filter</span>
            <div className="prod-filter-row">
              {FILTERS.map((f) => (
                <motion.button
                  key={f}
                  className={`prod-filter${active === f ? " is-active" : ""}`}
                  onClick={() => setActive(f)}
                  whileTap={{ scale: 0.96 }}
                >
                  {f}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <motion.div className="prod-grid" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA Banner */}
          <div className="prod-cta">
            <div className="prod-cta-glow" />
            <div className="prod-cta-content">
              <span className="prod-label prod-label--light">Work with us</span>
              <h2 className="prod-cta-h2">
                Looking for a reliable<br />
                <em>supply partner?</em>
              </h2>
              <p className="prod-cta-body">
                Share your volumes, target market and product specifications — we'll build a supply proposal within 48 hours.
              </p>
            </div>
            <Link to="/devis" className="prod-cta-btn">
              Request a quote
              <ArrowUpRight size={18} />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}