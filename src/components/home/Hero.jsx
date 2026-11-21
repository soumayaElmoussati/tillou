
import { motion } from "framer-motion";
import { ArrowRight, Play, MoveDown } from "lucide-react";
import HeroScene from "./HeroScene";

export default function Hero() {
  return (
    <section className="hero-section" id="home">

      <div className="hero-background">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />
        <div className="hero-grid" />
      </div>

      <div className="hero-container">

        <div className="hero-content">

          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow-line" />
            <span>UN GROUPE · UNE VISION · UN AVENIR</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            L'excellence
            <br />
            prend racine
            <br />
            dans <span>la nature.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            Une vision ambitieuse, un savoir-faire engagé
            et une passion pour la qualité.
            <br />
            Ensemble, cultivons un avenir durable.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a href="#group" className="button-primary">
              Découvrir le groupe
              <ArrowRight size={18} />
            </a>

            <a href="#activities" className="button-secondary">
              <span className="play-icon">
                <Play size={14} fill="currentColor" />
              </span>
              Explorer nos activités
            </a>
          </motion.div>

          <motion.div
            className="hero-bottom-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <span>01 / 05</span>
            <span className="hero-progress">
              <span />
            </span>
            <span>EXCELLENCE NATURELLE</span>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.2 }}
        >
          <HeroScene />

          <div className="hero-orbit-label">
            <span className="orbit-dot" />
            NATURE & INNOVATION
          </div>

          <div className="hero-floating-card">
            <span className="floating-card-icon">✳</span>
            <div>
              <strong>Notre engagement</strong>
              <small>Qualité · Durabilité · Innovation</small>
            </div>
          </div>
        </motion.div>

      </div>

      <a href="#group" className="hero-scroll">
        <MoveDown size={17} />
        <span>SCROLL TO DISCOVER</span>
      </a>

      <div className="hero-bottom-decoration" />
    </section>
  );
}
