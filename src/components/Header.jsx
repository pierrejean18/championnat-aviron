export default function Header() {
  return (
    <header className="topbar">
      <div className="container topbar-content">
        <div className="brand-block">
          <img
            src="/images/logo_acb.png"
            alt="Logo Aviron Club de Bourges"
            className="brand-logo"
          />

          <a href="/" className="logo-text">
            <span className="logo-title">Championnat de France d’Aviron</span>
            <span className="logo-subtitle">
              Aviron adapté 5-6 juin • Sprint 7-8 juin 2026
            </span>
          </a>

          <img
            src="/images/ffa.png"
            alt="Logo Fédération Française d'Aviron"
            className="brand-logo"
          />
        </div>

        <nav className="topbar-actions">
          <a className="btn btn-primary btn-header" href="/repas">
            Repas
          </a>
          <a className="btn btn-primary btn-header" href="/hebergement">
            Hébergement
          </a>
          <a className="btn btn-primary btn-header" href="/exposants">
            Exposants
          </a>
          <a className="btn btn-primary btn-header" href="/mecena">
            Mécénat
          </a>
          <a className="btn btn-primary btn-header" href="/carte-site">
            Plan du site
          </a>
          <a className="btn btn-primary btn-header" href="/contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}