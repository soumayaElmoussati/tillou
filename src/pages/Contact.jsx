
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";
import "./Contact.css";

const contactDetails = [
  {
    icon: MapPin,
    label: "ADDRESS",
    content: "Allada, Benin",
    type: "text",
  },
  {
    icon: Phone,
    label: "PHONE",
    content: "+229 01 95 96 69 26",
    type: "phone",
  },
  {
    icon: Mail,
    label: "EMAIL",
    content: "contact@tillougroup.com",
    type: "email",
  },
  {
    icon: Clock,
    label: "EXPORT",
    content: "Via the port of Cotonou",
    type: "text",
  },
];

const profiles = [
  { value: "importateur", label: "Importer" },
  { value: "distributeur", label: "Distributor" },
  { value: "mdd", label: "Private label" },
  { value: "industriel", label: "Industrial" },
  { value: "autre", label: "Other" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export default function Contact() {
  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-image" />
        <div className="contact-hero-overlay" />
        <div className="contact-hero-grain" />

        <div className="contact-hero-decoration">
          <span className="contact-hero-circle circle-one" />
          <span className="contact-hero-circle circle-two" />
          <span className="contact-hero-circle circle-three" />
        </div>

        <motion.div
          className="contact-hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className="contact-hero-eyebrow">
            <span className="eyebrow-line" />
            EXCHANGE
          </span>

          <h1>
            Let's talk about
            <br />
            <em>your need.</em>
          </h1>

          <p>
            Engage with our export team for your import
            and distribution projects.
          </p>

          <a href="/devis" className="contact-quote-button">
            Request a quote
            <ArrowRight size={17} />
          </a>
        </motion.div>

        <div className="contact-hero-bottom">
          <span>TILLOU GROUP</span>
          <span>CONTACT <i>—</i> 01</span>
        </div>
      </section>

      {/* CONTACT INFORMATION + FORM */}
      <section className="contact-content-section">
        <div className="contact-content-container">

          {/* LEFT: CONTACT DETAILS */}
          <motion.div
            className="contact-details-column"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className="contact-section-heading">
              <span className="contact-section-eyebrow">
                GET IN TOUCH
              </span>

              <h2>
                Contact
                <span className="contact-heading-line" />
              </h2>

              <p>
                Connect with our team for your import and
                distribution projects.
              </p>
            </div>

            <div className="contact-details-list">
              {contactDetails.map((item, index) => {
                const Icon = item.icon;

                const content = (
                  <div className="contact-detail-content">
                    <span className="contact-detail-label">
                      {item.label}
                    </span>
                    <strong>{item.content}</strong>
                  </div>
                );

                return (
                  <motion.div
                    className="contact-detail-item"
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="contact-detail-icon">
                      <Icon size={20} strokeWidth={1.6} />
                    </div>

                    {item.type === "phone" ? (
                      <a href="tel:+2290195966926">
                        {content}
                      </a>
                    ) : item.type === "email" ? (
                      <a href="mailto:contact@tillougroup.com">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </motion.div>
                );
              })}
            </div>

            <div className="contact-commercial-note">
              <div className="contact-note-line" />

              <p>
                For a specific commercial request, please use
                the quote form instead.
              </p>

              <a href="/devis" className="contact-note-button">
                Request a quote
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT: MESSAGE FORM */}
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="contact-form-heading">
              <div>
                <span className="contact-form-eyebrow">
                  WE'D LOVE TO HEAR FROM YOU
                </span>

                <h2>Send us a message</h2>
              </div>

              <div className="contact-form-heading-icon">
                <Mail size={22} strokeWidth={1.5} />
              </div>
            </div>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="contact-form-grid">
                <div className="contact-field">
                  <label htmlFor="contact-name">
                    Name <span>*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="First name Last name"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-company">
                    Company <span>*</span>
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">
                  Email <span>*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-profile">
                  Profile <span>*</span>
                </label>

                <select
                  id="contact-profile"
                  name="profile"
                  defaultValue=""
                >
                  <option value="" disabled>
                    For a specific commercial request, please use the quote form instead.
                  </option>

                  {profiles.map((profile) => (
                    <option key={profile.value} value={profile.value}>
                      {profile.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">
                  Message <span>*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  placeholder="Specify your need"
                />
              </div>

              <div className="contact-form-footer">
                <p>
                  <span>*</span> Required fields
                </p>

                <button type="button" className="contact-submit-button">
                  <span>Send the message</span>
                  <span className="contact-submit-icon">
                    <Send size={17} />
                  </span>
                </button>
              </div>
            </form>

            <div className="contact-form-bottom-line" />
          </motion.div>

        </div>
      </section>
    </div>
  );
}
