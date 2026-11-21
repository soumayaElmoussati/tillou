
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Ship,
  PackageCheck,
  FileText,
  Handshake,
  Factory,
  Anchor,
  Globe2,
  Plane,
  MapPin,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import "./StrategicExportRoute.css";

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const capabilities = [
  {
    icon: Ship,
    label: "Incoterms & shipment",
    title: "EXW Allada or FOB Cotonou",
    description:
      "EXW Allada or FOB Cotonou offers depending on the product and destination.",
    dark: true,
  },
  {
    icon: PackageCheck,
    label: "Packaging",
    title: "Aseptic drums and export packaging",
    description:
      "Aseptic drums and packaging suited to sea transport and preservation.",
  },
  {
    icon: FileText,
    label: "Documentation",
    title: "Technical sheets, certificates and batch documents",
    description:
      "Commercial and quality documentation provided according to the product and market.",
  },
  {
    icon: Handshake,
    label: "Commercial partnership",
    title: "Volumes, frequency and specifications studied with each client",
    description:
      "We adapt volumes, frequency and specifications to each buyer's needs.",
    dark: true,
  },
];

const routeStops = [
  {
    icon: Factory,
    name: "Allada",
    description: "Industrial site — Benin",
    type: "origin",
  },
  {
    icon: Anchor,
    name: "Cotonou",
    description: "Reference shipping port",
    type: "port",
  },
  {
    icon: Globe2,
    name: "International markets",
    description: "Europe & worldwide",
    type: "destination",
  },
];

const logistics = [
  {
    icon: Plane,
    label: "Air",
    description: "For fresh pineapple — speed and freshness",
  },
  {
    icon: Ship,
    label: "Sea",
    description: "For industry — juice, concentrate and dried",
  },
];

const partnershipItems = [
  { label: "Volumes", description: "Adapted to each buyer’s needs" },
  { label: "Frequency", description: "Regularity of supply" },
  { label: "Packaging", description: "Export formats suited to transport" },
  { label: "Specifications", description: "Defined by product and market" },
];

function SectionHeading({ eyebrow, title, centered = false }) {
  return (
    <motion.header
      className={`export-section-heading ${centered ? "is-centered" : ""}`}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <span className="export-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <span className="export-heading-line" />
    </motion.header>
  );
}

function ExportHero() {
  return (
    <section className="export-hero">
      <div className="export-hero-image" />
      <div className="export-hero-overlay" />

      <svg
        className="export-hero-decoration"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M 0 92 L 100 8" />
      </svg>

      <motion.div
        className="export-hero-content"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.16 } },
        }}
      >
        <motion.span className="export-eyebrow" variants={reveal}>
          Export &amp; logistics
        </motion.span>

        <motion.h1 variants={reveal}>Strategic Export Route</motion.h1>

        <motion.p variants={reveal}>
          An organisation geared towards the needs of professional buyers.
        </motion.p>
      </motion.div>

      <div className="export-hero-bottom">
        <span>TILLOU GROUP</span>
        <span>EXPORT &amp; LOGISTICS</span>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  return (
    <section className="export-capabilities section-padding" id="organisation">
      <div className="export-container">
        <div className="export-capabilities-grid">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className={`export-capability-card ${item.dark ? "dark-card" : ""}`}
                key={item.label}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.18 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
              >
                <div className="export-icon-box">
                  <Icon size={25} strokeWidth={1.7} />
                </div>

                <span className="export-card-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="export-card-index">
                  0{index + 1}
                </span>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ExportRouteSection() {
  return (
    <section className="export-route-section section-padding" id="route">
      <div className="export-container">
        <SectionHeading
          eyebrow="The export route"
          title="ALLADA → COTONOU → INTERNATIONAL MARKETS"
          centered
        />

        <div className="export-route-grid">
          <div className="export-route-line" />

          {routeStops.map((stop, index) => {
            const Icon = stop.icon;

            return (
              <motion.article
                className={`export-route-stop ${stop.type}`}
                key={stop.name}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.18 }}
              >
                <div className="export-route-icon">
                  <Icon size={28} strokeWidth={1.6} />
                </div>

                <span className="export-route-number">0{index + 1}</span>
                <h3>{stop.name}</h3>
                <p>{stop.description}</p>

                {index < routeStops.length - 1 && (
                  <ChevronRight className="export-route-chevron" size={25} />
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductLogisticsSection() {
  return (
    <section
      className="export-product-logistics section-padding"
      id="logistique-produit"
    >
      <div className="export-container">
        <SectionHeading
          eyebrow="Logistics by product"
          title="Logistics adapted to each product"
        />

        <div className="export-logistics-grid">
          {logistics.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="export-logistics-card"
                key={item.label}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -5 }}
              >
                <div className="export-logistics-icon">
                  <Icon size={27} strokeWidth={1.6} />
                </div>

                <div>
                  <span className="export-card-label">{item.label}</span>
                  <p>{item.description}</p>
                </div>

                <span className="export-logistics-arrow">
                  <ArrowRight size={19} />
                </span>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LocationsSection() {
  return (
    <section className="export-locations">
      <div className="export-container export-locations-grid">
        <motion.div
          className="export-location-item"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <MapPin size={22} />
          <div>
            <span>Reference shipping port</span>
            <strong>Cotonou</strong>
          </div>
        </motion.div>

        <motion.div
          className="export-location-item"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <MapPin size={22} />
          <div>
            <span>Industrial site</span>
            <strong>Allada, Benin</strong>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PartnershipSection() {
  return (
    <section className="export-partnership section-padding" id="b2b">
      <div className="export-container">
        <SectionHeading
          eyebrow="Commercial partnership"
          title="Volumes, frequency, packaging and specifications studied with each client"
        />

        <div className="export-partnership-grid">
          {partnershipItems.map((item, index) => (
            <motion.article
              className="export-partnership-item"
              key={item.label}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="export-card-label">{item.label}</span>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExportCTA() {
  return (
    <section className="export-cta">
      <div className="export-cta-pattern" />

      <motion.div
        className="export-cta-content"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <span className="export-eyebrow">Tillou Group</span>
        <h2>Have a specific need?</h2>
        <p>
          Volumes, product, packaging or destination: let’s discuss your
          project.
        </p>

        <Link to="/devis" className="export-cta-button">
          Request a quote
          <ArrowRight size={18} />
        </Link>
      </motion.div>
    </section>
  );
}

export default function StrategicExportRoute() {
  return (
    <div className="strategic-export-page">
      <ExportHero />
      <CapabilitiesSection />
      <ExportRouteSection />
      <ProductLogisticsSection />
      <LocationsSection />
      <PartnershipSection />
      <ExportCTA />
    </div>
  );
}
