import { useEffect, useMemo, useState } from "react";
import "./Home.css";

export default function Home() {
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Base+d%27Aviron+Alice+Milliat,+Chem.+du+Grand+Mazi%C3%A8res,+18000+Bourges";

  const eventDate = useMemo(() => new Date("2026-06-04T08:00:00"), []);

  const calendarItems = useMemo(
    () => [
      {
        day: "Lundi 11 mai",
        time: "08h00",
        label: "Ouverture des inscriptions sur intranet.ffaviron.fr",
      },
      {
        day: "Mardi 26 mai",
        time: "14h00",
        label: "Clôture des inscriptions",
      },
      {
        day: "Mardi 26 mai",
        time: "17h00",
        label: "Consultation des inscriptions sur ffaviron.fr",
      },
      {
        day: "Vendredi 29 mai",
        time: "17h00",
        label: "Consultation de l’ordre des départs sur ffaviron.fr",
      },
      {
        day: "Vendredi 05 juin",
        time: "18h00",
        label:
          "Réunion des délégués (sous réserve de la modification du programme définitif des épreuves)",
      },
    ],
    []
  );

  const raceBlocks = useMemo(
    () => [
      {
        title: "Samedi 06 juin 2026",
        subtitle: "Matin et après-midi • Distance de course : 500 m – National",
        races: [
          "Matin",
          "U19F1x — 1 rameuse en couple",
          "U19H2- — 2 rameurs en pointe",
          "U19F4- — 4 rameuses en pointe sans barreur",
          "U19H2x — 2 rameurs en couple",
          "M40H2x — 2 rameurs en couple",
          "M40F4x — 4 rameuses en couple",
          "SH2x — 2 rameurs en couple",
          "SF8+ — 8 rameuses en pointe",
          "SF4x — 4 rameuses en couple",
          "SH1x — 1 rameur en couple",
          "SF1x PR1 — 1 rameuse en couple classifiée PR1",
          "SH1x PR1 — 1 rameur en couple classifié PR1",
          "SF1x PR2 — 1 rameuse en couple classifiée PR2",
          "SH1x PR2 — 1 rameur en couple classifié PR2",
          'SF1x PR3 — 1 rameuse en couple classifiée PR3 "pointe et couple" et "pointe"',
          'SH1x PR3 — 1 rameur en couple classifié PR3 "pointe et couple" et "pointe"',
          "",
          "Après-midi",
          "U19H4x — 4 rameurs en couple",
          "U19H8+ — 8 rameurs en pointe avec barreur",
          "U19F2- — 2 rameuses en pointe sans barreur",
          "U19F2x — 2 rameuses en couple",
          "M40F2x — 2 rameuses en couple",
          "M40H4x — 4 rameurs en couple",
          "SF1x — 1 rameuse en couple",
          "SF2- — 2 rameuses en pointe sans barreur",
          "SH4x — 4 rameurs en couple",
          "SH2- — 2 rameurs en pointe sans barreur",
        ],
      },
      {
        title: "Dimanche 07 juin 2026",
        subtitle: "Matin et après-midi • Distance de course : 500 m – National",
        races: [
          "Matin",
          "SF2x PR — 2 rameuses en couple classifiées PR1, et/ou PR2 et/ou PR3",
          "SH2x PR — 2 rameurs en couple classifiés PR1, et/ou PR2 et/ou PR3",
          "U19H4- — 4 rameurs en pointe sans barreur",
          "U19F8+ — 8 rameuses en pointe",
          "U19H1x — 1 rameur en couple",
          "U19F4x — 4 rameuses en couple",
          "M40M2x — 1 rameuse et 1 rameur en couple",
          "M40M4x — 2 rameuses et 2 rameurs en couple",
          "SH8+ — 8 rameurs en pointe avec barreur",
          "SF2x — 2 rameuses en couple",
          "SF4- — 4 rameuses en pointe sans barreur",
          "SH4- — 4 rameurs en pointe sans barreur",
          "",
          "Après-midi",
          "U23M2x — 1 rameuse et 1 rameur en couple",
          "U19M2x — 1 rameuse et 1 rameur en couple",
          "U19M4x — 2 rameuses et 2 rameurs en couple",
          "U19M8+ — 4 rameuses et 4 rameurs en pointe avec barreur",
          "M40M8+ — 4 rameuses et 4 rameurs en pointe avec barreur",
          "SM2x — 1 rameuse et 1 rameur en couple",
          "SM4x — 2 rameuses et 2 rameurs en couple",
          "SM8+ — 4 rameuses et 4 rameurs en pointe avec barreur",
        ],
      },
    ],
    []
  );

  const regulationCards = useMemo(
    () => [
      {
        title: "Participation",
        items: [
          "Les épreuves sont ouvertes aux équipages homogènes de club.",
          "La participation des rameuses et rameurs des collectifs nationaux est soumise au respect des restrictions prévues dans les Règles de sélection.",
          "Les rameuses et rameurs Master doivent avoir 40 ans ou plus dans l’année en cours.",
        ],
      },
      {
        title: "Engagements",
        items: [
          "Les engagements sont libres.",
          "Ils se font uniquement sur intranet.ffaviron.fr par chaque club.",
        ],
      },
      {
        title: "Para-aviron",
        items: [
          "Les rameuses et rameurs para-aviron doivent être titulaires du Brevet de rameur d’accès à la compétition handicaps.",
          "Les rameurs peuvent participer aux épreuves en 1x du samedi et aux épreuves en 2x le dimanche.",
          "Les épreuves du dimanche en 2x sont ouvertes aux équipages homogènes et mixtes de clubs composés en totalité de rameurs classifiés.",
          "Les rameurs PR3 classifiés en pointe sont autorisés à participer aux épreuves en 1x et 2x.",
          "Un rameur para classifié peut ramer uniquement dans une classe supérieure.",
          "En fonction du nombre d’engagés, la DTN pourra proposer des regroupements d’épreuves.",
        ],
      },
      {
        title: "Classification et programme",
        items: [
          "Une session de classification pour les handicaps physiques aura lieu sur place le vendredi 5 juin, sur rendez-vous préalable auprès de la FFAviron.",
          "La prise de rendez-vous et le formulaire sont à demander par mail : handicaps@ffaviron.fr",
          "Les horaires définitifs seront établis en fonction du nombre d’engagés.",
          "Des finales C peuvent être organisées pour les épreuves à plus de 24 partants selon la grille horaire.",
          "Le programme prévisionnel prévoit matin et après-midi : séries qualificatives puis finales B et A.",
        ],
      },
    ],
    []
  );

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

  const getTimeLeft = () => {
    const now = new Date();
    const diff = eventDate.getTime() - now.getTime();

    if (diff <= 0) {
      return {
        expired: true,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      expired: false,
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

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
            <p className="hero-kicker">Bourges accueille l’aviron national</p>
            <h1>Quatre jours de compétition, de performance et de convivialité</h1>

            <div className="hero-official-mention">
  <img
    src="/images/ffa.png"
    alt="Logo Fédération Française d'Aviron"
    className="hero-official-logo"
  />
  <span>Événement organisé sous l’égide de la Fédération Française d’Aviron</span>
</div>

            <div className="hero-countdown">
              <p className="hero-countdown-title">
                Compte à rebours avant l’événement
              </p>

              {timeLeft.expired ? (
                <p className="hero-countdown-ended">L’événement a commencé</p>
              ) : (
                <div className="hero-countdown-grid">
                  <div className="hero-countdown-box">
                    <strong>{String(timeLeft.days).padStart(2, "0")}</strong>
                    <span>Jours</span>
                  </div>
                  <div className="hero-countdown-box">
                    <strong>{String(timeLeft.hours).padStart(2, "0")}</strong>
                    <span>Heures</span>
                  </div>
                  <div className="hero-countdown-box">
                    <strong>{String(timeLeft.minutes).padStart(2, "0")}</strong>
                    <span>Minutes</span>
                  </div>
                  <div className="hero-countdown-box">
                    <strong>{String(timeLeft.seconds).padStart(2, "0")}</strong>
                    <span>Secondes</span>
                  </div>
                </div>
              )}
            </div>

  

            <div className="hero-actions">
              <a className="btn btn-primary" href="#programme">
                Voir le programme
              </a>
              <a className="btn btn-secondary" href="#plans">
                Voir les plans
              </a>
              <a
                className="btn btn-secondary"
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Y aller
              </a>
              <a className="btn btn-secondary" href="#localisation">
                Voir la localisation
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
              Le Championnat de France d’Aviron se déroulera à Bourges du 4 au 7
              juin 2026 sur la Base d’Aviron Alice Milliat. Les 4 et 5 juin
              seront consacrés à l’aviron adapté, puis les 6 et 7 juin aux
              championnats nationaux sprint. Pendant quatre jours, le site
              accueillera les compétiteurs, les accompagnateurs, les bénévoles
              et le public autour d’un événement national majeur.
            </p>
          </div>

          <div className="photo-large real-photo">
            <img
              src="/images/brigitte.jpg"
              alt="Site de la base d’aviron de Bourges"
            />
          </div>
        </div>
      </section>

      <section id="calendrier" className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Calendrier</span>
            <h2>Dates clés à retenir</h2>
            <p className="section-intro">
              Retrouvez ici les principales échéances administratives et
              sportives avant le championnat.
            </p>
          </div>

          <div className="timeline-grid">
            {calendarItems.map((item, index) => (
              <article
                className="timeline-card"
                key={`${item.day}-${item.time}-${index}`}
              >
                <div className="timeline-date">{item.day}</div>
                <div className="timeline-time">{item.time}</div>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="programme" className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Épreuves sprint</span>
            <h2>Programme sportif prévisionnel</h2>
            <p className="section-intro">
              Les courses sprint des samedi 6 et dimanche 7 juin sont prévues
              sur une distance de 500 mètres. Les horaires précis seront établis
              en fonction du nombre d’engagés.
            </p>
          </div>

          <div className="race-blocks">
            {raceBlocks.map((block) => (
              <article className="race-card" key={block.title}>
                <div className="race-card-header">
                  <h3>{block.title}</h3>
                  <p>{block.subtitle}</p>
                </div>

                <ul className="race-list">
                  {block.races.map((race, index) => {
                    if (race === "") {
                      return (
                        <li
                          key={`${block.title}-${index}`}
                          className="race-separator"
                        />
                      );
                    }

                    if (race === "Matin" || race === "Après-midi") {
                      return (
                        <li
                          key={`${block.title}-${index}`}
                          className="race-period-title"
                        >
                          {race}
                        </li>
                      );
                    }

                    return <li key={`${block.title}-${index}`}>{race}</li>;
                  })}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="galerie" className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Galerie</span>
            <h2>Photos et ambiance</h2>
            <p className="section-intro">
              Découvrez l’atmosphère du bassin, des courses et du site à travers
              quelques images marquantes.
            </p>
          </div>

          <div className="gallery-grid">
            <article className="gallery-card gallery-card-large real-photo">
              <img
                src="/images/2023_04_16_regate-Bourges-242.jpg"
                alt="Régate à Bourges"
              />
              <div className="gallery-overlay">
                <span className="gallery-badge">Régate</span>
                <h3>Une ambiance sportive au cœur du bassin</h3>
              </div>
            </article>

            <article className="gallery-card real-photo">
              <img
                src="/images/France_Bourges_2019-76.jpg"
                alt="Championnat de France à Bourges"
              />
              <div className="gallery-overlay">
                <span className="gallery-badge">Championnat</span>
                <h3>Des courses nationales à Bourges</h3>
              </div>
            </article>

            <article className="gallery-card real-photo">
              <img
                src="/images/France_Bourges_2019-32.jpg"
                alt="Ambiance du championnat à Bourges"
              />
              <div className="gallery-overlay">
                <span className="gallery-badge">Ambiance</span>
                <h3>Public, rameurs et intensité de course</h3>
              </div>
            </article>

            <article className="gallery-card gallery-card-wide real-photo">
              <img
                src="/images/aerienbourges.png"
                alt="Vue aérienne de Bourges"
              />
              <div className="gallery-overlay">
                <span className="gallery-badge">Site</span>
                <h3>Un cadre idéal pour accueillir l’événement</h3>
              </div>
            </article>
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
              Retrouvez les principaux plans utiles pour préparer votre venue sur
              le site de la compétition.
            </p>
          </div>

          <div className="pdf-grid">
            <div className="pdf-preview-card">
              <div className="pdf-preview-visual real-photo">
                <img
                  src="/images/Plan_bassin.jpg"
                  alt="Plan du bassin de compétition"
                />
              </div>

              <div className="pdf-preview-content">
                <h3>Plan du bassin de compétition</h3>
                <p>
                  Visualisez l’organisation générale du bassin et les principaux
                  repères de la zone de compétition.
                </p>

                <div className="pdf-preview-actions">
                  <a
                    className="btn btn-primary"
                    href="/images/Plan_bassin.jpg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ouvrir le plan
                  </a>
                </div>
              </div>
            </div>

            <div className="pdf-preview-card">
              <div className="pdf-preview-visual real-photo">
                <img
                  src="/images/Plan_autoroute.png"
                  alt="Plan d’accès au bassin"
                />
              </div>

              <div className="pdf-preview-content">
                <h3>Plan d’accès au bassin</h3>
                <p>
                  Retrouvez les accès principaux, les axes de circulation et les
                  repères utiles pour rejoindre le site.
                </p>

                <div className="pdf-preview-actions">
                  <a
                    className="btn btn-primary"
                    href="/images/Plan_autoroute.png"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ouvrir le plan
                  </a>
                </div>
              </div>
            </div>

            <div className="pdf-preview-card">
              <div className="pdf-preview-visual real-photo">
                <img
                  src="/images/Plan_terre.png"
                  alt="Plan des installations à terre"
                />
              </div>

              <div className="pdf-preview-content">
                <h3>Plan des installations à terre</h3>
                <p>
                  Consultez l’organisation des installations à terre et les
                  différents espaces utiles sur site.
                </p>

                <div className="pdf-preview-actions">
                  <a
                    className="btn btn-primary"
                    href="/images/Plan_terre.png"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ouvrir le plan
                  </a>
                </div>
              </div>
            </div>

            <div className="pdf-preview-card">
              <div className="pdf-preview-visual real-photo">
                <img
                  src="/images/reglementation-ffa-2026.jpg"
                  alt="Aperçu de la réglementation sportive FFA 2026"
                />
              </div>

              <div className="pdf-preview-content">
                <h3>Réglementation sportive FFA 2026</h3>
                <p>
                  Consultez la réglementation sportive officielle de la
                  Fédération Française d’Aviron pour l’année 2026.
                </p>

                <div className="pdf-preview-actions">
                  <a
                    className="btn btn-primary"
                    href="/documents/ffaviron-reglementation-sportive-2026.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ouvrir le document
                  </a>
                </div>
              </div>
            </div>

            <div className="pdf-preview-card">
              <div className="pdf-preview-visual real-photo">
                <img
                  src="/images/programme-bientot-disponible.jpg"
                  alt="Programme officiel bientôt disponible"
                />
              </div>

              <div className="pdf-preview-content">
                <h3>Programme officiel</h3>
                <p>
                  Le programme officiel détaillé avec horaires sera mis en ligne
                  dès sa publication.
                </p>

                <div className="pdf-preview-actions">
                  <span className="btn btn-disabled">Bientôt disponible</span>
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