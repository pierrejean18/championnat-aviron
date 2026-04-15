import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <span className="footer-tag">Organisation</span>
          <p className="footer-title">Championnat de France d’Aviron</p>
          <p className="footer-subtitle">
            Bourges · Base d&apos;Aviron Alice Milliat
          </p>
          <p className="footer-text">
            Événement organisé par l’Aviron Club de Bourges au Lac d’Auron.
          </p>
        </div>

        <div className="footer-column">
          <p className="footer-heading">Contact</p>
          <a className="footer-link" href="mailto:contact@aviron-bourges.org">
            contact@aviron-bourges.org
          </a>
          <a className="footer-link" href="tel:0248679446">
            02 48 67 94 46
          </a>
          <a className="footer-link" href="tel:0783962373">
            07 83 96 23 73
          </a>
        </div>

        <div className="footer-column">
          <p className="footer-heading">Adresse</p>
          <p className="footer-text">
            Aviron Club de Bourges
            <br />
            Base d&apos;Aviron Alice Milliat
            <br />
            Chemin du Grand Mazières
            <br />
            18000 Bourges
          </p>
        </div>

        <div className="footer-column">
          <p className="footer-heading">Liens utiles</p>
          <a className="footer-link" href="/contact">
            Page contact
          </a>
          <a className="footer-link" href="/hebergement">
            Hébergement
          </a>
          <a className="footer-link" href="/carte-site">
            Plan du site
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Aviron Club de Bourges · Tous droits réservés</p>
      </div>
    </footer>
  );
}