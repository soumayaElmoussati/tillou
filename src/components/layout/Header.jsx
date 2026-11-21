
import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "News", href: "/actualite" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">

        <a href="/" className="brand">
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

        <nav className="desktop-navigation">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`nav-link ${
                item.label === "Accueil" ? "active" : ""
              }`}
            >
              {item.label}
              {item.dropdown && <ChevronDown size={13} />}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="/contact" className="header-contact">
            Nous contacter
            <ArrowUpRight size={16} />
          </a>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navigation.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {item.label}
                <ArrowUpRight size={16} />
              </motion.a>
            ))}

            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mobile-contact"
            >
              Nous contacter
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
