import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  motionValue,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Factory,
  Leaf,
  ShieldCheck,
  Ship,
  Sprout,
  TreePine,
  Users,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";
import "./Home.css";

/* =========================================
   ASSETS
========================================= */

const ASSETS = {
  hero: "https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/8907dd8435fb75a239b89b8d8113a6e8.jpg",
  fruits: "https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/3b4441c3a0d3c0fb97ff6022bdf90771.jpg",
  juices: "https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/96eb608f91aec8cea4c2c3f1d3367394.jpg",
  productsBg: "https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/5014d9da9db560283236013bee4362ca.jpg",
  fresh: "https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/bc25af427c134f2e93f40ac26c53ab09.jpg",
  nfc: "https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/2e87cfbc9803a4fdf9a50dd69620a0de.jpg",
  concentrate: "https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/482805714155d4ca29e88bf4765290dd.jpg",
  dried: "https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/e6b55616fbd5ae1e467706bed4602266.jpg",
  iso: "https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/c9e1ff9e1e5825d027b5f524f38ba03a.jpg",
  haccp: "https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/a5de867b58c8ddd619fe5ee422907088.jpg",
  kosher: "https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/926174ee0490a10d8ac8d74ee2c11579.jpg",
  globalgap: "https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/e249a2ab25b24bade31c2bb04dee707b.jpg",
  why: "https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/74e431c235217347a20c78065e224518.jpg",
};

const HERO_SLIDES = [
  { image: ASSETS.hero, label: "Benin Plantation" },
  { image: ASSETS.fruits, label: "Fruits Tillou" },
  { image: ASSETS.fresh, label: "Sugarloaf Fresh" },
  { image: ASSETS.juices, label: "Processing" },
  { image: ASSETS.nfc, label: "NFC Juice" },
  { image: ASSETS.concentrate, label: "Concentrate" },
  { image: ASSETS.dried, label: "Dried Pineapple" },
];

const PRODUCTS = [
  {
    id: "01",
    name: "Fresh Pineapple",
    variant: "Sugarloaf variety",
    image: ASSETS.fresh,
    path: "/products/ananas-seche",
    tag: "EXPORT READY",
  },
  {
    id: "02",
    name: "NFC Pineapple Juice",
    variant: "100% pure, not from concentrate",
    image: ASSETS.nfc,
    path: "/products/ananas-seche",
    tag: "ASEPTIC PACK",
  },
  {
    id: "03",
    name: "Juice Concentrate",
    variant: "Industrial grade",
    image: ASSETS.concentrate,
    path: "/products/ananas-seche",
    tag: "BULK VOLUME",
  },
  {
    id: "04",
    name: "Dried Pineapple",
    variant: "Tidbits and rings",
    image: ASSETS.dried,
    path: "/products/ananas-seche",
    tag: "SHELF STABLE",
  },
];

const CERTS = [
  { name: "ISO 22000", detail: "Food safety management", image: ASSETS.iso },
  { name: "HACCP", detail: "Hazard analysis & control", image: ASSETS.haccp },
  { name: "KOSHER", detail: "Religious compliance", image: ASSETS.kosher },
  { name: "GlobalG.A.P.", detail: "Agricultural best practice", image: ASSETS.globalgap },
  { name: "BIO / Organic", detail: "Certified organic farming", icon: Award },
];

const STRENGTHS = [
  {
    id: "01",
    title: "Exceptional Terroir",
    body: "Benin's equatorial climate and volcanic soils produce a Sugarloaf pineapple with an aromatic profile unmatched anywhere in West Africa.",
    icon: TreePine,
  },
  {
    id: "02",
    title: "Integrated Supply Chain",
    body: "From nursery to export container, we control every node of the chain — meaning full batch traceability and consistent quality season after season.",
    icon: Sprout,
  },
  {
    id: "03",
    title: "Industrial Throughput",
    body: "Modern high-capacity infrastructure built for professional buyers: 60 t/week fresh, 3 t/h juice, 10 t/day drying capacity.",
    icon: Factory,
  },
  {
    id: "04",
    title: "Global Certifications",
    body: "ISO 22000, HACCP, GlobalG.A.P., Kosher and BIO — we maintain the full certification stack that demanding markets require.",
    icon: ShieldCheck,
  },
  {
    id: "05",
    title: "1,600 Partner Farmers",
    body: "Fair, long-term partnerships with over 1,600 local producers create a resilient, ethical supply base and drive regional development.",
    icon: Users,
  },
  {
    id: "06",
    title: "Optimised Logistics",
    body: "Air freight for fresh, sea for processed: our logistics team builds the right shipping solution for every product and destination.",
    icon: Ship,
  },
];

const STATS = [
  { value: 1600, suffix: "+", label: "Partner producers", sub: "Network · Benin" },
  { value: 60, suffix: " t", label: "Fresh capacity / week", sub: "Export · Air" },
  { value: 3, suffix: " t/h", label: "Juice line throughput", sub: "Processing · NFC" },
  { value: 10, suffix: " t/d", label: "Drying unit capacity", sub: "Dried · Tidbits" },
  { value: 100, suffix: "%", label: "Batch traceability", sub: "Quality · ISO" },
];

/* =========================================
   MOTION VARIANTS
========================================= */

const fadeUp = {
  hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* =========================================
   SPLIT TEXT ANIMATION
========================================= */

function SplitTitle({ text, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const words = text.split(" ");
  return (
    <span ref={ref} className={className} style={{ display: "inline" }}>
      {words.map((word, wi) => (
        <span key={wi} className="split-word">
          {word.split("").map((char, ci) => (
            <motion.span
              key={ci}
              className="split-char"
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
          {wi < words.length - 1 && <span className="split-space">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

/* =========================================
   CUSTOM CURSOR BLOB
========================================= */

function CursorBlob() {
  const blobRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    const animate = () => {
      current.current.x += (pos.current.x - current.current.x) * 0.08;
      current.current.y += (pos.current.y - current.current.y) * 0.08;
      if (blobRef.current) {
        blobRef.current.style.transform = `translate(${current.current.x - 180}px, ${current.current.y - 180}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return <div ref={blobRef} className="cursor-blob" aria-hidden="true" />;
}

/* =========================================
   MAGNETIC BUTTON
========================================= */

function MagneticLink({ to, children, outline = false }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const onMove = (e) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.14);
    y.set((e.clientY - r.top - r.height / 2) * 0.14);
  };

  return (
    <motion.div ref={ref} style={{ x: sx, y: sy, display: "inline-block" }} onMouseMove={onMove} onMouseLeave={() => { x.set(0); y.set(0); }}>
      <Link to={to} className={`tg-btn${outline ? " tg-btn--outline" : ""}`}>
        <span>{children}</span>
        <ArrowUpRight size={16} />
      </Link>
    </motion.div>
  );
}

/* =========================================
   TILT CARD
========================================= */

function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 180, damping: 18 });
  const sry = useSpring(ry, { stiffness: 180, damping: 18 });

  const onMove = (e) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const r = ref.current.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    rx.set(ny * -10);
    ry.set(nx * 10);
  };

  return (
    <motion.div
      ref={ref}
      className={`tilt-wrap ${className}`}
      style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
      onMouseMove={onMove}
      onMouseLeave={() => { rx.set(0); ry.set(0); }}
    >
      {children}
    </motion.div>
  );
}

/* =========================================
   ANIMATED COUNTER
========================================= */

function Counter({ value, suffix, label, sub }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();
    let frame;
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setDisplay(Math.round(value * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <div ref={ref} className="stat-item">
      <div className="stat-track">
        <motion.div
          className="stat-fill"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: display / value } : { scaleX: 0 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
      <div className="stat-num">
        {display.toLocaleString("en-US")}
        <span>{suffix}</span>
      </div>
      <p className="stat-label">{label}</p>
      <span className="stat-sub">{sub}</span>
    </div>
  );
}

/* =========================================
   MARQUEE
========================================= */

function Marquee({ items }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <motion.div
        className="marquee-track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            <Leaf size={14} />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* =========================================
   HERO
========================================= */

function Hero() {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const DELAY = 6500;

  useEffect(() => {
    HERO_SLIDES.forEach((s) => { const img = new Image(); img.src = s.image; });
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), DELAY);
    return () => clearInterval(id);
  }, [paused]);

  const go = (n) => setSlide((n + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <section className="hero" aria-label="Tillou Group hero">
      {/* Slides */}
      <div className="hero-slides">
        <AnimatePresence initial={false}>
          <motion.div
            key={slide}
            className="hero-slide"
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1.04 }}
            exit={{ opacity: 0, scale: 1.08, filter: "blur(6px)" }}
            transition={{
              opacity: { duration: 1.2 },
              scale: { duration: 7, ease: "linear" },
            }}
          >
            <img src={HERO_SLIDES[slide].image} alt={HERO_SLIDES[slide].label} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlays */}
      <div className="hero-gradient" />
      <div className="hero-noise" />

      {/* Animated orbs */}
      <div className="hero-orb hero-orb--one" />
      <div className="hero-orb hero-orb--two" />

      {/* Content */}
      <div className="hero-body">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${slide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="hero-text"
          >
            <div className="hero-origin">
              <span className="hero-line" />
              From Benin
              <span className="hero-dot" />
              To the World
              <span className="hero-line" />
            </div>

            <h1 className="hero-h1">
              <span className="hero-h1-light">
                <SplitTitle text="Benin pineapple," delay={0.1} />
              </span>
              <em className="hero-h1-em">
                <SplitTitle text="farm to world." delay={0.3} />
              </em>
            </h1>

            <motion.p
              className="hero-desc"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
            >
              100% natural · No additives · Grown, processed and exported from Benin
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              <MagneticLink to="/devis">Request a quote</MagneticLink>
              <MagneticLink to="/products" outline>Discover products</MagneticLink>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="hero-controls">
        <div className="hero-counter">
          <span className="hero-counter-cur">{String(slide + 1).padStart(2, "0")}</span>
          <span className="hero-counter-sep" />
          <span className="hero-counter-tot">{String(HERO_SLIDES.length).padStart(2, "0")}</span>
        </div>

        <div className="hero-dots">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              className={`hero-dot${slide === i ? " is-active" : ""}`}
              onClick={() => go(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="hero-arrows">
          <button onClick={() => go(slide - 1)} aria-label="Previous">
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => go(slide + 1)} aria-label="Next">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="hero-progress">
        <motion.span
          key={`${slide}-${paused}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: paused ? 0 : 1 }}
          transition={{ duration: paused ? 0 : DELAY / 1000, ease: "linear" }}
        />
      </div>

      {/* Pause */}
      <button className="hero-pause" onClick={() => setPaused((p) => !p)} aria-label={paused ? "Resume" : "Pause"}>
        {paused ? <Play size={12} /> : <Pause size={12} />}
      </button>

      {/* Scroll hint */}
      <div className="hero-scroll">
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
        <span>Scroll</span>
      </div>

      {/* Slide label */}
      <div className="hero-side-label">
        <AnimatePresence mode="wait">
          <motion.span
            key={slide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {HERO_SLIDES[slide].label}
          </motion.span>
        </AnimatePresence>
        <span className="hero-side-line" />
        TILLOU GROUP
      </div>
    </section>
  );
}

/* =========================================
   MARQUEE BAND
========================================= */

const MARQUEE_ITEMS = [
  "Sugarloaf Pineapple",
  "NFC Juice",
  "ISO 22000 Certified",
  "Benin Origin",
  "Global Export",
  "HACCP Compliant",
  "Organic Farming",
  "1,600 Farmers",
];

/* =========================================
   WHO WE ARE
========================================= */

function About() {
  const companies = [
    {
      name: "Les Fruits Tillou SARL",
      sub: "Cultivation · Fresh · Dried",
      img: ASSETS.fruits,
      points: [
        "Fresh Sugarloaf pineapple — grade AA",
        "Dried tidbits and rings",
        "1,600 producer network",
      ],
    },
    {
      name: "Les Jus Tillou SA",
      sub: "Processing · Juice · Export",
      img: ASSETS.juices,
      points: [
        "NFC pineapple juice — aseptic",
        "Pineapple juice concentrate",
        "High-capacity processing line",
      ],
    },
  ];

  return (
    <section className="about section-pad" id="about">
      <div className="container">
        <div className="about-heading">
          <div className="about-h2-wrap">
            <span className="section-label">Who we are</span>
            <h2 className="about-h2">
              <SplitTitle text="An integrated" />
              <br />
              <SplitTitle text="Beninese group" delay={0.1} />
            </h2>
          </div>
          <p className="about-lead">
            Two complementary companies that master the full pineapple value chain — from supporting growers to international export.
          </p>
        </div>

        <div className="about-grid">
          {companies.map((co, i) => (
            <div key={co.name}>
              <TiltCard className="about-card">
                <div className="about-card-img">
                  <img src={co.img} alt={co.name} />
                  <div className="about-card-img-overlay" />
                  <span className="about-card-num">0{i + 1}</span>
                  <span className="about-card-sub">{co.sub}</span>
                </div>
                <div className="about-card-body">
                  <h3>{co.name}</h3>
                  <ul>
                    {co.points.map((p) => (
                      <li key={p}>
                        <CheckCircle2 size={15} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>

        <p className="about-closing">
          From plantation to export container, Tillou Group controls every step — delivering consistent quality, full traceability and reliable supply to the most demanding buyers worldwide.
        </p>

        <div className="about-wm" aria-hidden="true">TILLOU</div>
      </div>
    </section>
  );
}

/* =========================================
   PRODUCTS — SCROLL CAROUSEL
========================================= */

function Products() {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);

  const go = (dir) => {
    setActive((a) => Math.max(0, Math.min(PRODUCTS.length - 1, a + dir)));
  };

  return (
    <section className="products" id="products">
      <div className="products-bg">
        <img src={ASSETS.productsBg} alt="" />
        <div className="products-bg-overlay" />
      </div>

      <div className="container products-inner">
        <div className="products-header">
          <span className="section-label section-label--light">Our offer</span>
          <h2 className="products-h2">
            <SplitTitle text="Flagship" />
            <br />
            <em><SplitTitle text="Products" delay={0.1} /></em>
          </h2>
        </div>

        <div className="products-stage">
          {/* Featured image */}
          <div className="products-feature">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="products-feature-img"
                initial={{ opacity: 0, scale: 1.06, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.96, x: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <img src={PRODUCTS[active].image} alt={PRODUCTS[active].name} />
                <div className="products-feature-shade" />
                <span className="products-feature-tag">{PRODUCTS[active].tag}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* List */}
          <div className="products-list">
            {PRODUCTS.map((p, i) => (
              <button
                key={p.id}
                className={`products-item${active === i ? " is-active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="products-item-id">{p.id}</span>
                <span className="products-item-body">
                  <span className="products-item-name">{p.name}</span>
                  <span className="products-item-variant">{p.variant}</span>
                </span>
                <motion.span
                  className="products-item-arrow"
                  animate={{ x: active === i ? 0 : -6, opacity: active === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </button>
            ))}

            <Link to={`/produits`} className="products-all">
              All products <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   PRODUCTION STATS
========================================= */

function Stats() {
  return (
    <section className="stats section-pad" id="capacities">
      <div className="container">
        <div className="stats-header">
          <span className="section-label section-label--light">Production capacity</span>
          <h2 className="stats-h2">
            <SplitTitle text="Built for" />
            {" "}<em><SplitTitle text="professional buyers." delay={0.08} /></em>
          </h2>
        </div>

        <div className="stats-grid">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Counter {...s} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="stats-band"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span>From local producers</span>
          <span className="stats-band-rule" />
          <span>To international markets</span>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================
   CERTIFICATIONS — 3D FLIP CARDS
========================================= */

function Certifications() {
  return (
    <section className="certs section-pad" id="certifications">
      <div className="container">
        <div className="certs-header">
          <span className="section-label">Quality &amp; compliance</span>
          <h2 className="certs-h2">
            <SplitTitle text="Certifications" />
          </h2>
        </div>

        <motion.div
          className="certs-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {CERTS.map((c) => {
            const Icon = c.icon;
            return (
              <motion.div key={c.name} variants={fadeUp} className="cert-flip">
                <div className="cert-flip-inner">
                  <div className="cert-face cert-front">
                    <div className="cert-emblem">
                      {c.image ? (
                        <img src={c.image} alt={c.name} />
                      ) : (
                        <Icon size={36} strokeWidth={1.4} />
                      )}
                    </div>
                    <span className="cert-name">{c.name}</span>
                    <span className="cert-shine" />
                  </div>
                  <div className="cert-face cert-back">
                    <span className="cert-back-name">{c.name}</span>
                    <p className="cert-back-detail">{c.detail}</p>
                    <Leaf size={22} className="cert-back-icon" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p
          className="certs-note"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Full certificate packages provided on documented request, per product and destination market.
        </motion.p>
      </div>
    </section>
  );
}

/* =========================================
   WHY CHOOSE US — CURSOR-REVEAL CARDS
========================================= */

function StrengthCard({ item, index }) {
  const ref = useRef(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    setMouse({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  };

  return (
    <motion.div
      ref={ref}
      className={`strength-card${hovered ? " is-hovered" : ""}`}
      style={{
        "--mx": `${mouse.x}%`,
        "--my": `${mouse.y}%`,
      }}
      variants={fadeUp}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="strength-card-reveal" />
      <div className="strength-card-body">
        <div className="strength-card-top">
          <span className="strength-icon">
            <Icon size={22} strokeWidth={1.5} />
          </span>
          <span className="strength-num">{item.id}</span>
        </div>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </div>
    </motion.div>
  );
}

function Strengths() {
  return (
    <section className="strengths section-pad" id="strengths">
      <div className="strengths-bg">
        <img src={ASSETS.why} alt="" />
        <div className="strengths-bg-overlay" />
      </div>

      <div className="container">
        <div className="strengths-header">
          <span className="section-label section-label--light">Our strengths</span>
          <h2 className="strengths-h2">
            <SplitTitle text="Why choose" />
            {" "}<em><SplitTitle text="Tillou Group" delay={0.08} /></em>
          </h2>
        </div>

        <motion.div
          className="strengths-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {STRENGTHS.map((item, i) => (
            <StrengthCard key={item.id} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================
   PARTNERSHIPS
========================================= */

function Partnerships() {
  return (
    <section className="partnerships section-pad" id="partnerships">
      <div className="container partnerships-inner">
        <div className="partnerships-text">
          <span className="section-label">Partnerships</span>
          <h2 className="partnerships-h2">
            Build a supply chain<br />
            <em>that holds.</em>
          </h2>
          <p className="partnerships-body">
            Importers, distributors, and food processors: we offer long-term partnerships built on transparency, quality, and logistics reliability.
          </p>
          <MagneticLink to="/devis">Request a quote</MagneticLink>
        </div>

        <div className="partnerships-visual">
          <motion.div
            className="orbit-ring orbit-ring--outer"
            animate={{ rotate: 360 }}
            transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
          >
            <span className="orbit-node" style={{ "--angle": "0deg" }} />
            <span className="orbit-node" style={{ "--angle": "120deg" }} />
            <span className="orbit-node" style={{ "--angle": "240deg" }} />
          </motion.div>
          <motion.div
            className="orbit-ring orbit-ring--inner"
            animate={{ rotate: -360 }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          >
            <span className="orbit-node" style={{ "--angle": "60deg" }} />
            <span className="orbit-node" style={{ "--angle": "180deg" }} />
          </motion.div>
          <div className="orbit-center">
            <Leaf size={30} />
            <span>TILLOU</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   FINAL CTA
========================================= */

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-noise" />
      <div className="cta-glow cta-glow--one" />
      <div className="cta-glow cta-glow--two" />

      <div className="container cta-inner">
        <span className="section-label section-label--light">Let's work together</span>
        <h2 className="cta-h2">
          <SplitTitle text="Ready to source" />
          {" "}<em><SplitTitle text="Benin pineapple?" delay={0.08} /></em>
        </h2>
        <p className="cta-body">
          Fresh pineapple, NFC juice, concentrate or dried product — tell us your volumes, specifications and target markets.
        </p>
        <div className="cta-actions">
          <MagneticLink to="/devis">Request a quote</MagneticLink>
          <MagneticLink to="/contact" outline>Contact us</MagneticLink>
        </div>
      </div>

      <div className="cta-wm" aria-hidden="true">TILLOU GROUP</div>
    </section>
  );
}

/* =========================================
   PAGE
========================================= */

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="home-page">
      <CursorBlob />
      <Hero />
      <Marquee items={MARQUEE_ITEMS} />
      <About />
      <Products />
      <Stats />
      <Certifications />
      <Strengths />
      <Partnerships />
      <CTA />
    </div>
  );
}