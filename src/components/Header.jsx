import { useEffect, useState } from "react";
import "./Header.css";

const navItems = [
  { href: "/repas", label: "Repas", icon: "🍽️" },
  { href: "/hebergement", label: "Hébergement", icon: "🛏️" },
  { href: "/exposants", label: "Exposants", icon: "🏁" },
  { href: "/mecena", label: "Mécénat", icon: "🤝" },
  { href: "/carte-site", label: "Plan du site", icon: "🗺️" },
  { href: "/contact", label: "Contact", icon: "✉️" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="topbar">
        <div className="header-container">
          <div className="header-desktop">
            <a href="/" className="header-branding">
              <img
                src="/images/logo_acb.png"
                alt="Logo Aviron Club de Bourges"
                className="brand-logo brand-logo-acb"
              />

              <div className="brand-text">
                <span className="logo-title">Championnat de France d’Aviron</span>
                <span className="logo-subtitle">
                  Aviron adapté 5-6 juin • Sprint 7-8 juin 2026
                </span>
              </div>

              <img
                src="/images/ffa.png"
                alt="Logo Fédération Française d'Aviron"
                className="brand-logo brand-logo-ffa"
              />
            </a>

            <nav className="topbar-actions desktop-nav" aria-label="Navigation principale">
              {navItems.map((item) => (
                <a key={item.href} className="btn btn-primary btn-header" href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="header-mobile">
            <a href="/" className="mobile-brand">
              <img
                src="/images/logo_acb.png"
                alt="Logo Aviron Club de Bourges"
                className="brand-logo mobile-logo"
              />

              <div className="mobile-brand-text">
                <span className="logo-title">Championnat de France d’Aviron</span>
                <span className="logo-subtitle">5 au 8 juin 2026</span>
              </div>
            </a>

            <button
              type="button"
              className="mobile-menu-btn"
              aria-label="Ouvrir le menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="mobile-menu-btn-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? "open" : ""}`}
        onClick={closeMenu}
      />

      <aside className={`mobile-sidebar ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-sidebar-header">
          <div className="mobile-sidebar-brand">
            <span className="mobile-sidebar-title">Championnat de France d’Aviron</span>
            <span className="mobile-sidebar-subtitle">
              Aviron adapté 5-6 juin • Sprint 7-8 juin 2026
            </span>
          </div>

          <button
            type="button"
            className="mobile-sidebar-close"
            aria-label="Fermer le menu"
            onClick={closeMenu}
          >
            ×
          </button>
        </div>

        <nav className="mobile-sidebar-nav" aria-label="Navigation mobile">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              <span className="mobile-nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}