export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-left">
          <p className="footer-title">Championnat de France d’Aviron</p>
          <p className="footer-subtitle">Bourges · Base d'Aviron Alice Milliat</p>
        </div>

        <div className="footer-right">
          <p className="footer-contact-label">Contact</p>
          <a className="footer-link" href="mailto:contact@aviron-bourges.org">
            contact@aviron-bourges.org
          </a>
        </div>
      </div>
    </footer>
  );
}