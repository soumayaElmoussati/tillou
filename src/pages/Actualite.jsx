import { useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowLeft, ArrowRight, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import "./Actualite.css";

/* ─── SplitTitle ─────────────────────────────────────────── */
function SplitTitle({ text, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const words = text.split(" ");
  return (
    <span ref={ref} className={className} style={{ display: "inline" }}>
      {words.map((word, wi) => (
        <span key={wi} className="ac-split-word">
          {word.split("").map((char, ci) => (
            <motion.span
              key={ci}
              className="ac-split-char"
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
          {wi < words.length - 1 && <span className="ac-split-space">&nbsp;</span>}
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
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 24, filter: "blur(5px)" }}
      initial={{ opacity: 0, y: 24, filter: "blur(5px)" }}
      transition={{ duration: 0.72, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Images ─────────────────────────────────────────────── */
const galleryImages = [
  { src: "https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/5d4ee97b72203e56b5cef92a11d39ded.jpg", alt: "Pineapple plantation" },
  { src: "https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/b45e10d8a0b61108a6cdf9a6612e4085.jpg", alt: "Fresh pineapples" },
  { src: "https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/04fb275f5edf7295fa271741983cb63f.jpg", alt: "Processing unit" },
  { src: "https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/7854c508129398cd013744eea1beaa56.jpg", alt: "Export packaging" },
  { src: "https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/df9186a8464ab7d8f1105a760cac8d26.jpg", alt: "Pineapple field" },
  { src: "https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/b1399fbbcbb59caf41daaf8e45a4c899.jpg", alt: "Quality control" },
  { src: "https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/00c7a468ee5572ef0677b879dd330ee1.jpg", alt: "Drying process" },
  { src: "https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/e1b67df800c84a189a131b109858c7cf.jpg", alt: "Finished products" },
  { src: "https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/c9ae434961deeecd1c79a360c97335b5.jpg", alt: "Benin production" },
];

/* Marquee labels */
const marqueeWords = ["Plantation", "Processing", "Export", "Quality", "Benin", "Pineapple", "Traceability", "Natural"];

/* ─── Lightbox ───────────────────────────────────────────── */
function Lightbox({ index, onClose, onPrev, onNext }) {
  const img = galleryImages[index];
  const hasPrev = index > 0;
  const hasNext = index < galleryImages.length - 1;

  // keyboard nav
  const handleKey = useCallback((e) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft" && hasPrev) onPrev();
    if (e.key === "ArrowRight" && hasNext) onNext();
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  return (
    <motion.div
      className="ac-lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      onKeyDown={handleKey}
      tabIndex={-1}
    >
      {/* image */}
      <motion.div
        className="ac-lightbox-frame"
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.94, opacity: 0 }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={img.src}
            alt={img.alt}
            className="ac-lightbox-img"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          />
        </AnimatePresence>

        <div className="ac-lightbox-info">
          <span className="ac-lightbox-counter">{String(index + 1).padStart(2,"0")} / {String(galleryImages.length).padStart(2,"0")}</span>
          <span className="ac-lightbox-alt">{img.alt}</span>
        </div>
      </motion.div>

      {/* controls */}
      <button className="ac-lightbox-close" onClick={onClose} aria-label="Close">
        <X size={20} />
      </button>

      {hasPrev && (
        <button
          className="ac-lightbox-nav ac-lightbox-nav--prev"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {hasNext && (
        <button
          className="ac-lightbox-nav ac-lightbox-nav--next"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </motion.div>
  );
}

/* ─── Gallery item ───────────────────────────────────────── */
function GalleryItem({ image, index, onOpen }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.figure
      ref={ref}
      className="ac-gallery-item"
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      initial={{ opacity: 0, y: 36 }}
      transition={{ duration: 0.65, delay: (index % 3) * 0.09, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onOpen(index)}
    >
      <div className="ac-gallery-img-wrap">
        <img src={image.src} alt={image.alt} loading="lazy" className="ac-gallery-img" />
        <div className="ac-gallery-hover">
          <ZoomIn size={22} strokeWidth={1.5} />
        </div>
        <span className="ac-gallery-num">{String(index + 1).padStart(2, "0")}</span>
      </div>
    </motion.figure>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
export default function Actualite() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => Math.max(0, i - 1));
  const nextImage = () => setLightboxIndex((i) => Math.min(galleryImages.length - 1, i + 1));

  /* hero parallax */
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <main className="ac-page">

      {/* ── HERO ── */}
      <section className="ac-hero" ref={heroRef}>
        <motion.div className="ac-hero-img-wrap" style={{ y: heroY }}>
          <div className="ac-hero-img" />
        </motion.div>
        <div className="ac-hero-overlay" />
        <div className="ac-hero-grain" />
        <div className="ac-hero-ring ac-ring-1" />
        <div className="ac-hero-ring ac-ring-2" />

        <motion.div className="ac-hero-content" style={{ opacity: heroOpacity }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="ac-hero-eyebrow-wrap"
          >
            <span className="ac-eyebrow ac-eyebrow--light">
              <span className="ac-eyebrow-line" /> News
            </span>
          </motion.div>

          <h1 className="ac-hero-h1">
            <SplitTitle text="News &" delay={0.3} />
            <br />
            <em><SplitTitle text="Gallery." delay={0.5} /></em>
          </h1>

          <motion.div
            className="ac-hero-divider"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          />

          <motion.p
            className="ac-hero-sub"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            Pineapple sector, industrialisation and export from Benin.
          </motion.p>
        </motion.div>

        <div className="ac-hero-meta">
          <span>TILLOU GROUP</span>
          <span>NEWS — 01</span>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="ac-marquee-wrap" aria-hidden>
        <motion.div
          className="ac-marquee-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span key={i} className="ac-marquee-item">
              {word} <span className="ac-marquee-dot">·</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── PUBLICATIONS ── */}
      <section className="ac-publications">
        <div className="ac-container">
          <div className="ac-section-head">
            <FadeUp><span className="ac-eyebrow"><span className="ac-eyebrow-line" /> Publications</span></FadeUp>
            <h2 className="ac-section-h2">
              <SplitTitle text="Our news" delay={0.05} />
            </h2>
          </div>

          <FadeUp delay={0.1}>
            <div className="ac-empty-state">
              <span className="ac-empty-line" />
              <div className="ac-empty-body">
                <span className="ac-empty-icon">✦</span>
                <p>No published articles yet.</p>
                <p className="ac-empty-sub">Check back soon for updates from Tillou Group.</p>
              </div>
              <span className="ac-empty-line" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="ac-gallery-section">
        <div className="ac-container">
          <div className="ac-section-head">
            <FadeUp><span className="ac-eyebrow"><span className="ac-eyebrow-line" /> Gallery</span></FadeUp>
            <h2 className="ac-section-h2">
              <SplitTitle text="Plantation, plant" delay={0.05} />
              <br />
              <em><SplitTitle text="& export." delay={0.2} /></em>
            </h2>
            <FadeUp delay={0.15}>
              <p className="ac-section-sub">Click any image to view full screen.</p>
            </FadeUp>
          </div>

          <div className="ac-gallery-grid">
            {galleryImages.map((img, i) => (
              <GalleryItem key={i} image={img} index={i} onOpen={openLightbox} />
            ))}
          </div>

          <FadeUp delay={0.1} className="ac-back-wrap">
            <Link to="/" className="ac-back-link">
              <span className="ac-back-icon"><ArrowLeft size={16} /></span>
              <span>Back to home</span>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>

    </main>
  );
}