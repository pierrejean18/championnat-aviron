import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Base+d%27Aviron+Alice+Milliat,+Chem.+du+Grand+Mazi%C3%A8res,+18000+Bourges";

  const articles = useMemo(
    () => [
      {
        title:
          "L’AC Bourges sera représenté par Maxime Vervisch et Jean Graviou aux championnats de France d’aviron",
        source: "Le Berry Républicain",
        date: "Article de presse",
        url: "https://www.leberry.fr/bourges-18000/sports/l-ac-bourges-sera-represente-par-maxime-vervisch-et-jean-graviou-aux-championnats-de-france-d-aviron_14942774/",
        image: "/images/2023_04_16_regate-Bourges-242.jpg",
        excerpt:
          "Un focus sur les représentants de l’AC Bourges engagés aux championnats de France d’aviron.",
      },
      {
        title:
          "Ce qu’il faut retenir des championnats de France d’aviron à Bourges",
        source: "Le Berry Républicain",
        date: "Article de presse",
        url: "https://www.leberry.fr/bourges-18000/sports/ce-qu-il-faut-retenir-des-championnats-de-france-d-aviron-a-bourges_13580030/",
        image: "/images/France_Bourges_2019-76.jpg",
        excerpt:
          "Un résumé des temps forts, des performances et de l’ambiance autour de l’événement à Bourges.",
      },
      {
        title:
          "Les algues troublent les championnats de France J16-U23 d’aviron de Bourges",
        source: "Le Berry Républicain",
        date: "Article de presse",
        url: "https://www.leberry.fr/bourges-18000/sports/les-algues-troublent-les-championnats-de-france-j16-u23-d-aviron-de-bourges_14154576/",
        image: "/images/France_Bourges_2019-32.jpg",
        excerpt:
          "Un article sur les difficultés rencontrées pendant la compétition et les conditions sur le bassin.",
      },
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrevArticle = () => {
    setCurrentIndex((prev) => (prev === 0 ? articles.length - 1 : prev - 1));
  };

  const goNextArticle = () => {
    setCurrentIndex((prev) => (prev === articles.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === articles.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [articles.length]);

  return (
    <div className="home">
      <section
        className="hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.68)), url('/images/2023_04_16_regate-Bourges-75.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay">
          <div className="container hero-content">
            <p className="hero-kicker">Événement national</p>
            <h1>Championnat de France d’Aviron</h1>
            <p className="hero-date">
              Aviron adapté 5-6 juin 2026 • Sprint 7-8 juin 2026 à Bourges
            </p>

            <div className="hero-actions">
              <a className="btn btn-secondary" href="#localisation">
                Voir la localisation
              </a>
              <a className="btn btn-secondary" href="#plans">
                Voir les plans
              </a>
              <a className="btn btn-secondary" href="/resultats">
                Résultats
              </a>
              <a
                className="btn btn-secondary"
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Y aller
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="presentation" className="section">
        <div className="container presentation-grid">
          <div className="text-block">
            <span className="section-tag">Présentation</span>
            <h2>Un rendez-vous majeur de l’aviron français</h2>
            <p>
              Le Championnat de France d’Aviron se déroulera à Bourges du 5 au 8
              juin 2026 sur la base d’Aviron Alice Milliat. Le 5 et le 6 juin
              seront consacrés à l’aviron adapté, puis le 7 et le 8 juin au
              sprint. Pendant quatre jours, le site accueillera les compétiteurs,
              les accompagnateurs, les bénévoles et le public autour d’un
              événement national majeur.
            </p>
          </div>

          <div className="photo-placeholder photo-large">
            <span>Emplacement photo principale</span>
          </div>
        </div>
      </section>

      <section id="galerie" className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Galerie</span>
            <h2>Photos et ambiance</h2>
          </div>

          <div className="gallery-grid">
            <div className="photo-medium real-photo">
              <img
                src="/images/2023_04_16_regate-Bourges-242.jpg"
                alt="Régate à Bourges"
              />
            </div>

            <div className="photo-medium real-photo">
              <img
                src="/images/France_Bourges_2019-76.jpg"
                alt="Championnat de France à Bourges"
              />
            </div>

            <div className="photo-medium real-photo">
              <img
                src="/images/France_Bourges_2019-32.jpg"
                alt="Ambiance du championnat à Bourges"
              />
            </div>

            <div className="photo-placeholder photo-medium">
              <span>Photo 4</span>
            </div>
          </div>
        </div>
      </section>

      <section id="articles" className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Presse</span>
            <h2>Articles autour de l’événement</h2>
            <p className="section-intro">
              Les articles défilent automatiquement avec un effet de glissement.
            </p>
          </div>

          <div className="article-slider-shell">
            <button
              type="button"
              className="article-nav-arrow left"
              onClick={goPrevArticle}
              aria-label="Article précédent"
            >
              ‹
            </button>

            <div className="article-slider-window">
              <div
                className="article-slider-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {articles.map((article, index) => (
                  <article
                    className="article-slide"
                    key={`${article.title}-${index}`}
                  >
                    <div className="article-slide-image">
                      <img src={article.image} alt={article.title} />
                      <div className="article-slide-overlay" />
                    </div>

                    <div className="article-slide-content">
                      <div className="article-slide-meta">
                        <span>{article.source}</span>
                        <span>•</span>
                        <span>{article.date}</span>
                      </div>

                      <h3>{article.title}</h3>
                      <p>{article.excerpt}</p>

                      <div className="article-slide-actions">
                        <a
                          className="btn btn-primary"
                          href={article.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Lire l’article
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="article-nav-arrow right"
              onClick={goNextArticle}
              aria-label="Article suivant"
            >
              ›
            </button>
          </div>

          <div className="article-dots">
            {articles.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`article-dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Voir l’article ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="plans" className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Plans</span>
            <h2>Documents utiles</h2>
            <p className="section-intro">
              Les documents PDF seront bientôt disponibles avec une visualisation
              directe et une ouverture au clic.
            </p>
          </div>

          <div className="pdf-grid">
            <div className="pdf-preview-card">
              <div className="pdf-preview-visual">
                <span>Aperçu du PDF à venir</span>
              </div>

              <div className="pdf-preview-content">
                <h3>Plan du bassin de compétition</h3>
                <p>
                  Ce document présentera le plan détaillé du bassin de
                  compétition.
                </p>
                <p className="muted">
                  Une visualisation sera ajoutée dès que le PDF sera disponible.
                </p>

                <div className="pdf-preview-actions">
                  <a
                    className="btn btn-primary disabled-btn"
                    href="/"
                    onClick={(e) => e.preventDefault()}
                  >
                    Document bientôt disponible
                  </a>
                </div>
              </div>
            </div>

            <div className="pdf-preview-card">
              <div className="pdf-preview-visual">
                <span>Aperçu du PDF à venir</span>
              </div>

              <div className="pdf-preview-content">
                <h3>Plan d’accès au bassin</h3>
                <p>
                  Ce document présentera les accès, les zones de circulation et
                  les repères utiles pour rejoindre le site.
                </p>
                <p className="muted">
                  Une visualisation sera ajoutée dès que le PDF sera disponible.
                </p>

                <div className="pdf-preview-actions">
                  <a
                    className="btn btn-primary disabled-btn"
                    href="/"
                    onClick={(e) => e.preventDefault()}
                  >
                    Document bientôt disponible
                  </a>
                </div>
              </div>
            </div>

            <div className="pdf-preview-card">
              <div className="pdf-preview-visual">
                <span>Aperçu du PDF à venir</span>
              </div>

              <div className="pdf-preview-content">
                <h3>Plan des installations à terre</h3>
                <p>
                  Ce document présentera l’organisation des installations à
                  terre et les repères utiles sur site.
                </p>
                <p className="muted">
                  Une visualisation sera ajoutée dès que le PDF sera disponible.
                </p>

                <div className="pdf-preview-actions">
                  <a
                    className="btn btn-primary disabled-btn"
                    href="/"
                    onClick={(e) => e.preventDefault()}
                  >
                    Document bientôt disponible
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="localisation" className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Localisation</span>
            <h2>Accéder au site</h2>
          </div>

          <div className="location-card">
            <div className="location-text">
              <h3>Adresse</h3>
              <p>
                Base d'Aviron Alice Milliat, Chemin du Grand Mazières, 18000
                Bourges
              </p>
              <p className="muted">
                Clique sur le bouton pour ouvrir directement l’itinéraire dans
                Google Maps.
              </p>

              <a
                className="btn btn-primary"
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Y aller
              </a>
            </div>

            <div className="map-box">
              <div className="map-header">Point Google Maps</div>
              <iframe
                title="Carte - Base d'Aviron Alice Milliat Bourges"
                src="https://www.google.com/maps?q=Base%20d%27Aviron%20Alice%20Milliat,%20Chem.%20du%20Grand%20Mazi%C3%A8res,%2018000%20Bourges&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}