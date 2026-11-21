
import {
  ArrowUpRight,
  Globe,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

const footerLinks = {
  groupe: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Our products", href: "/products" },
    { label: "Sustainability & ESG", href: "/sustainability" },
    { label: "News", href: "/actualite" },
  ],
  informations: [
    { label: "Certifications", href: "/quality" },
    { label: "Partnerships", href: "/strategic-export-route" },
    { label: "Contact", href: "/contact" },
  ],
};

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="17"
      height="17"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.3 18H5.5V9.5h2.8ZM6.9 8.3a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2ZM18.5 18h-2.8v-4.3c0-1.1-.6-1.8-1.6-1.8s-1.4.7-1.4 1.8V18H9.9V9.5h2.8v1.1c.4-.7 1.2-1.3 2.3-1.3 2.2 0 3.5 1.5 3.5 4Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="17"
      height="17"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">

      {/* CTA SECTION */}
      <div className="footer-cta">
        <div className="footer-cta-content">
          <span className="footer-eyebrow">
            ENSEMBLE, CULTIVONS L'AVENIR
          </span>

          <h2>
            Construisons ensemble
            <br />
            <span>l'avenir de demain.</span>
          </h2>

          <p>
            Découvrez notre univers et échangeons
            autour de vos projets.
          </p>

          <a
            href="mailto:contact@tillougroup.com"
            className="footer-cta-button"
          >
            Entrons en contact
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="footer-cta-decoration">
          <div className="footer-orbit" />
          <span className="footer-decoration-leaf leaf-a" />
          <span className="footer-decoration-leaf leaf-b" />
          <span className="footer-decoration-leaf leaf-c" />
          <div className="footer-decoration-circle">T</div>
        </div>
      </div>

      {/* FOOTER MAIN */}
      <div className="footer-main">

        {/* BRAND */}
        <div className="footer-brand-column">
          <a href="/" className="brand footer-brand">
            <div className="brand-symbol">
              <span className="brand-leaf leaf-one" />
              <span className="brand-leaf leaf-two" />
              <span className="brand-leaf leaf-three" />
            </div>

            <div className="brand-name">
              <span>Tillou</span>
              <small>GROUP</small>
            </div>
          </a>

          <p className="footer-description">
            Une vision ambitieuse, un savoir-faire engagé
            et une passion pour l'excellence.
          </p>

          {/* SOCIAL LINKS */}
          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>

            <a href="#" aria-label="Instagram">
              <InstagramIcon />
            </a>

            <a href="#" aria-label="Site web">
              <Globe size={17} />
            </a>
          </div>
        </div>

        {/* GROUP LINKS */}
        <div className="footer-links-column">
          <h3>Navigation</h3>

          {footerLinks.groupe.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        {/* INFORMATION LINKS */}
        <div className="footer-links-column">
          <h3>EXPLORER</h3>

          {footerLinks.informations.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        {/* CONTACT */}
        <div className="footer-contact-column">
          <h3>CONTACT</h3>

          <a href="mailto:contact@tillougroup.com">
            <Mail size={16} />
            contact@tillougroup.com
          </a>

          <a href="tel:+212000000000">
            <Phone size={16} />
            Nous contacter
          </a>

          <div className="footer-location">
            <MapPin size={16} />
            <span>Notre siège social</span>
          </div>

          <a href="/contact" className="footer-contact-link">
            Toutes les coordonnées
            <ArrowRight size={15} />
          </a>
        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Tillou Group.
          Tous droits réservés.
        </p>

        <div>
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/confidentialite">Confidentialité</a>
        </div>

        <a href="#home" className="back-to-top">
          Retour en haut ↑
        </a>
      </div>

    </footer>
  );
}
