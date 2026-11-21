
import { motion } from "framer-motion";
import {
  GlassWater,
  Sun,
  Sprout,
  Award,
  FileText,
  Download,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Quality.css";

const pillars = [
  {
    number: "01",
    title: "Juice Pillar",
    description: "Cutting-edge extraction and concentration.",
    icon: GlassWater,
    certifications: ["ISO 22000", "HACCP", "KOSHER"],
  },
  {
    number: "02",
    title: "Drying Pillar",
    description: "Natural fruit processing.",
    icon: Sun,
    certifications: ["HACCP", "BIO", "KOSHER"],
  },
  {
    number: "03",
    title: "Supply Pillar",
    description: "Certified good agricultural practices.",
    icon: Sprout,
    certifications: ["GlobalG.A.P."],
  },
];

const standards = [
  {
    name: "ISO 22000",
    description:
      "Food safety management system — Les Jus Tillou.",
    code: "FSMS",
  },
  {
    name: "HACCP",
    description:
      "Hazard analysis and critical points — drying activity.",
    code: "FOOD SAFETY",
  },
  {
    name: "Organic",
    description:
      "Organic certification for juice and drying.",
    code: "BIO",
  },
  {
    name: "Kosher",
    description:
      "Kosher certification for juice and drying.",
    code: "CERTIFIED",
  },
  {
    name: "GlobalG.A.P.",
    description:
      "Good agricultural practices for partner producers, where applicable.",
    code: "AGRICULTURE",
  },
];

const documents = [
  "Technical sheets",
  "Valid certificates",
  "Batch documents",
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

function SectionHeading({ eyebrow, title }) {
  return (
    <motion.header
      className="quality-section-heading"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <span className="quality-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <div className="quality-heading-line" />
    </motion.header>
  );
}

export default function Quality() {
  return (
    <div className="quality-page">

      {/* HERO */}
      <section className="quality-hero">
        <div className="quality-hero-image" />
        <div className="quality-hero-overlay" />

        <motion.div
          className="quality-hero-content"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.span
            className="quality-hero-eyebrow"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            Quality &amp; certifications
          </motion.span>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            The Tillou Quality Assurance
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            Our commitment is articulated around three pillars of
            expertise, rigorously certified.
          </motion.p>

          <motion.div
            className="quality-hero-accent"
            variants={fadeUp}
          />
        </motion.div>

        <div className="quality-hero-ring quality-ring-one" />
        <div className="quality-hero-ring quality-ring-two" />
      </section>

      {/* THREE PILLARS */}
      <section className="quality-pillars-section" id="poles">
        <div className="quality-container">
          <SectionHeading
            eyebrow="Three expertise pillars"
            title="Quality certified by activity"
          />

          <motion.div
            className="quality-pillars-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <motion.article
                  className="quality-pillar-card"
                  key={pillar.number}
                  variants={fadeUp}
                  transition={{ duration: 0.65 }}
                  whileHover={{
                    y: -9,
                    rotateX: 2,
                    rotateY: -1,
                  }}
                >
                  <div className="quality-pillar-top">
                    <span className="quality-pillar-number">
                      {pillar.number}
                    </span>

                    <div className="quality-pillar-icon">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="quality-pillar-content">
                    <h3>{pillar.title}</h3>
                    <p>{pillar.description}</p>
                  </div>

                  <div className="quality-pillar-certifications">
                    {pillar.certifications.map((certification) => (
                      <div
                        className="quality-pillar-certification"
                        key={certification}
                      >
                        <Award size={16} />
                        <span>{certification}</span>
                      </div>
                    ))}
                  </div>

                  <div className="quality-pillar-bottom-line" />
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* STANDARDS */}
      <section className="quality-standards-section" id="normes">
        <div className="quality-container">
          <SectionHeading
            eyebrow="Standards"
            title="Detail of quality references"
          />

          <motion.div
            className="quality-standards-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {standards.map((standard, index) => (
              <motion.article
                className="quality-standard-card"
                key={standard.name}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                whileHover={{
                  y: -6,
                  rotateX: 1.5,
                }}
              >
                <div className="quality-standard-top">
                  <div className="quality-standard-icon">
                    <Award size={22} strokeWidth={1.6} />
                  </div>

                  <span className="quality-standard-code">
                    {standard.code}
                  </span>
                </div>

                <h3>{standard.name}</h3>

                <p>{standard.description}</p>

                <div className="quality-standard-bottom">
                  <span>Quality reference</span>
                  <CheckCircle2 size={17} />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DOCUMENTATION */}
      <section
        className="quality-documents-section"
        id="documentation-qualite"
      >
        <div className="quality-container">
          <SectionHeading
            eyebrow="Quality documentation"
            title="Documents provided according to the product"
          />

          <motion.div
            className="quality-documents-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {documents.map((document, index) => (
              <motion.div
                className="quality-document-card"
                key={document}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="quality-document-icon">
                  <FileText size={23} strokeWidth={1.6} />
                </div>

                <span>{document}</span>

                <span className="quality-document-number">
                  0{index + 1}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            className="quality-document-note"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Valid certificates and quality documents are provided
            according to the product and market concerned.
          </motion.p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="quality-cta-section">
        <div className="quality-cta-decoration" />

        <div className="quality-container quality-cta-container">
          <motion.div
            className="quality-cta-content"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="quality-cta-icon">
              <ShieldCheck size={27} />
            </div>

            <div className="quality-cta-actions">
              <Link
                to="/telechargements"
                className="quality-button quality-button-primary"
              >
                <Download size={17} />
                Download certificates
              </Link>

              <Link
                to="/devis"
                className="quality-button quality-button-outline"
              >
                Request a quote
                <ArrowRight size={17} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
