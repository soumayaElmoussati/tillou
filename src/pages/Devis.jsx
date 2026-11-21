
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  Building2,
  Package,
  Send,
  ShieldCheck,
} from "lucide-react";
import "./Devis.css";

const products = [
  { value: "ananas-frais", label: "Fresh Sugarloaf Pineapple" },
  { value: "jus-nfc", label: "NFC pineapple juice" },
  { value: "concentre", label: "Pineapple Concentrate" },
  { value: "ananas-seche", label: "Dried pineapple" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function FormField({
  label,
  name,
  placeholder,
  required = true,
  type = "text",
  as = "input",
  children,
  rows,
}) {
  const commonProps = {
    id: name,
    name,
    required,
    placeholder,
    className: "quote-input",
  };

  return (
    <div className="quote-field">
      <label htmlFor={name} className="quote-label">
        {label}
        {required && <span className="quote-required">*</span>}
      </label>

      {as === "textarea" ? (
        <textarea {...commonProps} rows={rows || 4} />
      ) : as === "select" ? (
        <select {...commonProps}>
          {children}
        </select>
      ) : (
        <input {...commonProps} type={type} />
      )}
    </div>
  );
}

export default function Devis() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Interface uniquement : aucune demande n'est envoyée pour le moment.
  };

  return (
    <div className="quote-page">
      {/* HERO */}
      <section className="quote-hero">
        <div className="quote-hero-image" />

        <div className="quote-hero-overlay" />

        <motion.div
          className="quote-hero-content"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          <motion.span
            className="quote-eyebrow"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            Leads
          </motion.span>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            Request a quote
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            Fill in the information below to receive a commercial proposal.
          </motion.p>

          <motion.div
            className="quote-hero-line"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          />
        </motion.div>

        <div className="quote-hero-decoration" />
      </section>

      {/* FORM SECTION */}
      <section className="quote-section">
        <div className="quote-container">
          <motion.div
            className="quote-intro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <span className="quote-section-eyebrow">
              <FileText size={15} />
              Commercial inquiry
            </span>

            <h2>
              Tell us about your
              <span> requirements.</span>
            </h2>
          </motion.div>

          <motion.div
            className="quote-form-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="quote-form-header">
              <div className="quote-form-header-icon">
                <FileText size={22} />
              </div>

              <div>
                <h3>Quote request form</h3>
                <p>Fields marked with * are required.</p>
              </div>
            </div>

            <form
              className="quote-form"
              onSubmit={handleSubmit}
              noValidate={false}
            >
              {/* COMPANY INFORMATION */}
              <div className="quote-form-group">
                <div className="quote-group-heading">
                  <div className="quote-group-icon">
                    <Building2 size={19} />
                  </div>

                  <div>
                    <h4>Company information</h4>
                  </div>
                </div>

                <div className="quote-fields-grid">
                  <FormField
                    label="Full name"
                    name="name"
                    placeholder="First name Last name"
                  />

                  <FormField
                    label="Company"
                    name="company"
                    placeholder="Your company name"
                  />

                  <FormField
                    label="Professional email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                  />

                  <FormField
                    label="Country"
                    name="country"
                    placeholder="Your country"
                  />
                </div>
              </div>

              <div className="quote-form-divider" />

              {/* PRODUCT INFORMATION */}
              <div className="quote-form-group">
                <div className="quote-group-heading">
                  <div className="quote-group-icon">
                    <Package size={19} />
                  </div>

                  <div>
                    <h4>Product requirements</h4>
                  </div>
                </div>

                <div className="quote-fields-grid quote-fields-one">
                  <FormField
                    label="Product sought"
                    name="product"
                    as="select"
                  >
                    <option value="" disabled>
                      Select a product
                    </option>

                    {products.map((product) => (
                      <option
                        key={product.value}
                        value={product.value}
                      >
                        {product.label}
                      </option>
                    ))}
                  </FormField>
                </div>

                <div className="quote-fields-grid quote-fields-three">
                  <FormField
                    label="Estimated volume"
                    name="volume"
                    placeholder="e.g. 1 pallet / 5 tons / 20ft"
                  />

                  <FormField
                    label="Desired format"
                    name="format"
                    placeholder="e.g. fresh, juice, concentrate, dried"
                  />

                  <FormField
                    label="Desired deadline"
                    name="deadline"
                    placeholder="e.g. within 30 days"
                  />
                </div>
              </div>

              <div className="quote-form-divider" />

              {/* MESSAGE */}
              <div className="quote-form-group">
                <div className="quote-group-heading">
                  <div className="quote-group-icon">
                    <FileText size={19} />
                  </div>

                  <div>
                    <h4>Additional details</h4>
                  </div>
                </div>

                <FormField
                  label="Message"
                  name="message"
                  as="textarea"
                  rows={5}
                  placeholder="Specify your need"
                />
              </div>

              {/* CONSENT */}
              <div className="quote-consent">
                <label className="quote-checkbox-label">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                  />

                  <span className="quote-custom-checkbox">
                    <ShieldCheck size={15} />
                  </span>

                  <span className="quote-consent-text">
                    I agree that my data may be processed in accordance
                    with the privacy policy.
                    {" "}
                    <a href="/confidentialite">Privacy</a>
                    {" · "}
                    <a href="/mentions-legales">Legal</a>
                  </span>
                </label>
              </div>

              {/* SUBMIT */}
              <div className="quote-submit-area">
                <button
                  type="submit"
                  className="quote-submit-button"
                >
                  <span>Send request</span>
                  <Send size={17} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
