
import { motion } from "framer-motion";
import {
  Droplets,
  Factory,
  Sprout,
  Award,
  Apple,
  ShieldCheck,
  PackageCheck,
  Leaf,
  Recycle,
  Users,
  Boxes,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Sustainability.css";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13 },
  },
};

const pillars = [
  {
    title: "Juice Pillar",
    description: "Cutting-edge extraction and concentration.",
    icon: Droplets,
    theme: "dark",
    certifications: ["ISO 22000", "HACCP", "KOSHER"],
  },
  {
    title: "Drying Pillar",
    description: "Natural fruit processing.",
    icon: Factory,
    theme: "yellow",
    certifications: ["HACCP", "BIO", "KOSHER"],
  },
  {
    title: "Supply Pillar",
    description: "Certified good agricultural practices.",
    icon: Sprout,
    theme: "dark",
    certifications: ["GlobalG.A.P."],
  },
];

const certifications = [
  {
    name: "ISO 22000",
    image:
      "https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/c9e1ff9e1e5825d027b5f524f38ba03a.jpg",
  },
  {
    name: "HACCP",
    image:
      "https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/a5de867b58c8ddd619fe5ee422907088.jpg",
  },
  {
    name: "BIO",
    image: null,
  },
  {
    name: "KOSHER",
    image:
      "https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/926174ee0490a10d8ac8d74ee2c11579.jpg",
  },
  {
    name: "GlobalG.A.P.",
    image:
      "https://horizons-cdn.hostinger.com/3a3aff08-26e3-40d2-a54a-87ba077c06c3/e249a2ab25b24bade31c2bb04dee707b.jpg",
  },
];

const capacities = [
  { value: "≈ 4,000 m²", label: "juice processing site" },
  { value: "≈ 2,000 m²", label: "fruit drying unit" },
  { value: "3 t/h", label: "indicative juice line capacity" },
  { value: "ASEPTIC", label: "packaging suited to export" },
];

const processSteps = [
  {
    number: "01",
    title: "Reception & selection",
    description: "Reception and selection of fruit at optimal ripeness.",
    icon: Apple,
    theme: "dark",
  },
  {
    number: "02",
    title: "Processing",
    description: "Controlled extraction, treatment and concentration.",
    icon: Factory,
    theme: "yellow",
  },
  {
    number: "03",
    title: "Quality control",
    description:
      "Parameter control and verification of aseptic packaging.",
    icon: ShieldCheck,
    theme: "dark",
  },
  {
    number: "04",
    title: "Packaging & shipment",
    description: "Export packaging and shipment preparation.",
    icon: PackageCheck,
    theme: "yellow",
  },
];

const commitments = [
  {
    title: "Reasoned agricultural practices",
    description:
      "Supporting partner producers towards good agricultural practices and enhanced traceability.",
    icon: Leaf,
  },
  {
    title: "Co-product valorisation",
    description:
      "Reducing losses and valorising co-products from pineapple processing.",
    icon: Recycle,
  },
  {
    title: "Local impact",
    description:
      "Creating value and employment in the territories, particularly in rural areas.",
    icon: Users,
  },
];

const rawMaterial = [
  { label: "ORIGIN", value: "Grown in Benin", icon: Sprout },
  { label: "VARIETY", value: "Sugarloaf", icon: Apple },
  {
    label: "SELECTION",
    value: "Controlled ripeness and quality",
    icon: ShieldCheck,
  },
  {
    label: "VALORISATION",
    value: "Fresh, juice, concentrate and dried",
    icon: Boxes,
  },
];

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <motion.header
      className={`esg-heading ${centered ? "esg-heading--center" : ""}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <span className="esg-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.header>
  );
}

function SustainabilityHero() {
  return (
    <section className="esg-hero">
      <motion.div
        className="esg-hero__image"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <img
          src="https://images.hostinger.com/ddae08a8-62df-4c10-9356-08ab17be0c2f.png"
          alt=""
        />
      </motion.div>

      <div className="esg-hero__overlay" />

      <motion.div
        className="esg-hero__content"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.span className="esg-eyebrow" variants={fadeUp}>
          Sustainability &amp; ESG
        </motion.span>

        <motion.h1 variants={fadeUp}>
          SUSTAINABILITY
          <br />
          <span>&amp; ESG</span>
        </motion.h1>

        <motion.div className="esg-hero__line" variants={fadeUp} />

        <motion.p variants={fadeUp}>
          A concrete commitment to a responsible pineapple sector, from
          agricultural practice to export.
        </motion.p>
      </motion.div>

      <div className="esg-hero__bottom">
        <span>RESPONSIBLE PRODUCTION</span>
        <span>BENIN · TILLOU GROUP</span>
      </div>
    </section>
  );
}

function QualitySection() {
  return (
    <section id="qualite" className="esg-section esg-quality">
      <div className="esg-container">
        <SectionHeading
          eyebrow="Quality & certifications"
          title="Quality certified by activity"
          description="Our commitment is articulated around three pillars of expertise, rigorously certified."
        />

        <motion.div
          className="esg-pillar-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.article
                className={`esg-pillar-card esg-pillar-card--${pillar.theme}`}
                variants={fadeUp}
                key={pillar.title}
                whileHover={{ y: -9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="esg-card-topline">
                  <span className="esg-card-index">
                    0{index + 1}
                  </span>
                  <div className="esg-icon-box">
                    <Icon size={25} strokeWidth={1.7} />
                  </div>
                </div>

                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>

                <div className="esg-tags">
                  {pillar.certifications.map((certification) => (
                    <span key={certification}>{certification}</span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function CertificationsSection() {
  return (
    <section id="certifications" className="esg-section esg-certifications">
      <div className="esg-container">
        <SectionHeading
          eyebrow="Certifications"
          title="Quality references in force"
          centered
        />

        <motion.div
          className="esg-cert-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {certifications.map((certification, index) => (
            <motion.article
              className="esg-cert-card"
              variants={fadeUp}
              key={certification.name}
              whileHover={{ y: -7 }}
            >
              <span className="esg-cert-number">
                0{index + 1}
              </span>

              <div className="esg-cert-logo">
                {certification.image ? (
                  <img
                    src={certification.image}
                    alt={certification.name}
                    loading="lazy"
                  />
                ) : (
                  <Award size={35} strokeWidth={1.5} />
                )}
              </div>

              <h3>{certification.name}</h3>
              <span className="esg-cert-line" />
            </motion.article>
          ))}
        </motion.div>

        <motion.p
          className="esg-cert-note"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Valid certificates are provided upon documented presentation,
          according to the product and applicable perimeters.
        </motion.p>
      </div>
    </section>
  );
}

function CapacitiesSection() {
  return (
    <section id="capacites" className="esg-section esg-capacities">
      <div className="esg-capacities__decoration" />

      <div className="esg-container">
        <SectionHeading
          eyebrow="Industrial capacities"
          title="Infrastructure suited to export"
          centered
        />

        <motion.div
          className="esg-capacity-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {capacities.map((item, index) => (
            <motion.article
              className="esg-capacity-item"
              variants={fadeUp}
              key={item.value}
            >
              <span className="esg-capacity-index">
                0{index + 1}
              </span>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="processus" className="esg-section esg-process">
      <div className="esg-container">
        <SectionHeading
          eyebrow="Industrial process"
          title="Four mastered steps"
        />

        <motion.div
          className="esg-process-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {processSteps.map((step) => {
            const Icon = step.icon;

            return (
              <motion.article
                className={`esg-process-card esg-process-card--${step.theme}`}
                variants={fadeUp}
                key={step.number}
                whileHover={{ y: -8 }}
              >
                <div className="esg-process-card__top">
                  <div className="esg-icon-box">
                    <Icon size={25} strokeWidth={1.7} />
                  </div>
                  <span>{step.number}</span>
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function CommitmentSection() {
  return (
    <section id="engagement" className="esg-section esg-commitments">
      <div className="esg-container">
        <SectionHeading
          eyebrow="ESG commitment"
          title="Three commitment axes"
          centered
        />

        <motion.div
          className="esg-commitment-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {commitments.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="esg-commitment-card"
                variants={fadeUp}
                key={item.title}
                whileHover={{ y: -8 }}
              >
                <div className="esg-commitment-card__top">
                  <div className="esg-icon-box">
                    <Icon size={25} strokeWidth={1.7} />
                  </div>
                  <span>0{index + 1}</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function RawMaterialSection() {
  return (
    <section className="esg-section esg-raw-material">
      <div className="esg-raw-material__overlay" />

      <div className="esg-container esg-raw-material__content">
        <SectionHeading
          eyebrow="Our raw material"
          title="Sugarloaf: a distinctive origin and taste"
        />

        <motion.div
          className="esg-raw-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {rawMaterial.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="esg-raw-item"
                variants={fadeUp}
                key={item.label}
              >
                <div className="esg-raw-item__heading">
                  <Icon size={20} strokeWidth={1.7} />
                  <span>{item.label}</span>
                </div>
                <p>{item.value}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function SustainabilityCTA() {
  return (
    <section className="esg-cta">
      <div className="esg-cta__pattern" />

      <motion.div
        className="esg-cta__content"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="esg-eyebrow">TILLOU GROUP</span>
        <h2>Building a more responsible pineapple sector.</h2>
        <Link to="/devis" className="esg-cta__button">
          Request a quote
          <ArrowRight size={17} />
        </Link>
      </motion.div>
    </section>
  );
}

export default function Sustainability() {
  return (
    <div className="sustainability-page">
      <SustainabilityHero />
      <QualitySection />
      <CertificationsSection />
      <CapacitiesSection />
      <ProcessSection />
      <CommitmentSection />
      <RawMaterialSection />
      <SustainabilityCTA />
    </div>
  );
}
