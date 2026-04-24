import "./Exposants.css";

export default function Exposants() {
  const exposants = [
    {
      name: "CREW LINE",
      description: "Équipement et matériel d’aviron.",
      url: "https://www.crewlinesports.com/fr",
      image: "/images/crewline.png",
    },
    {
      name: "SD Rowing FILIPPI",
      description: "Constructeur et matériel d’aviron.",
      url: "https://www.sd-rowing.com/",
      image: "/images/sdrowing.jfif",
    },
    {
      name: "Falcon",
      description: "Matériel et solutions pour l’aviron.",
      url: "https://falconracing-europe.com/fr",
      image: "/images/falcon.png",
    },
    {
      name: "AVE Rowing Boats",
      description: "Constructeur d’embarcations d’aviron.",
      url: "https://averowingboats.com/en/",
      image: "/images/AVE.jpeg",
    },
    {
      name: "WINTECH",
      description: "Constructeur / matériel d’aviron.",
      url: "https://wintechfrance.com/",
      image: "/images/wintech.png",
    },
    {
      name: "PYERO ILLUSTRATEUR",
      description: "Illustration et création graphique.",
      url: "https://www.facebook.com/p/Pyero-Illustrateur-100064020427879/",
      image: "/images/pyero.jpg",
    },
    {
      name: "IMSERCO NELO ROWING France",
      description: "Matériel et distribution pour l’aviron.",
      url: "https://www.imserco.fr/",
      image: "/images/nelo.avif",
    },
    {
      name: "L’ATELIER COMPOSITE",
      description: "Solutions composites et bateaux d’aviron.",
      url: "https://www.lateliercomposite.fr/",
      image: "/images/composite.png",
    },
{
  name: "VEGA",
  description: "Solutions composites pour l’aviron.",
  url: "https://www.vega-composites.com/",
  image: "/images/VEGA.jpg",
},
    {
      name: "SkyGear",
      description: "Équipement et accessoires.",
      url: "https://www.skygear.fr/",
      image: "/images/skygear.webp",
    },
{
  name: "TECHNOGEAR",
  description: "Équipement et matériel.",
  url: "https://technogearshop.com/fr/",
  image: "/images/technogear.jpg",
},
    {
      name: "Stand ACB",
      description: "Stand du club organisateur.",
      url: "https://www.aviron-bourges.org/",
      image: "/images/acb.png",
    },
    {
      name: "Stand Triinc & Bourges Plus",
      description: "Partenaires et promotion du territoire.",
      url: "https://triinc.fr/",
      image: "/images/triinc.png",
    },
    {
      name: "Centre social",
      description: "Animation et accompagnement social.",
      url: "https://www.ville-bourges.fr/site/centres-sociaux",
      image: "/images/bourges.png",
    },
    {
      name: "Stand Cancer",
      description: "Ligue contre le cancer.",
      url: "https://www.ligue-cancer.net/18-cher",
      image: "/images/cancer.png",
    },
    {
      name: "Stand ergo",
      description: "Ergomètres et animation.",
      url: "https://www.aviron-bourges.org/",
      image: "/images/acb.png",
    },
    {
      name: "CGP",
      description: "Conseil et accompagnement.",
      url: "https://www.cgp-berry.com/",
      image: "/images/CGP.avif",
    },
  ];

  return (
    <main className="page exposants-page">
      <section className="exposants-hero">
        <div className="container">
          <div className="exposants-hero-panel">
            <span className="section-tag">Exposants</span>
            <h1>Exposants présents</h1>
            <p className="exposants-hero-intro">
              Retrouvez les exposants du Championnat de France d’Aviron à Bourges.
            </p>
          </div>
        </div>
      </section>

      <section className="section exposants-list-section">
        <div className="container">
          <div className="exposants-grid">
            {exposants.map((exposant) => {
              const hasImage = Boolean(exposant.image);
              const hasUrl = Boolean(exposant.url);

              return (
                <article
                  className={`exposant-card ${
                    !hasUrl ? "exposant-card-static" : ""
                  }`}
                  key={exposant.name}
                >
                  <div className="exposant-image-wrap">
                    {hasImage ? (
                      <img
                        src={exposant.image}
                        alt={exposant.name}
                        className="exposant-image"
                      />
                    ) : (
                      <div className="exposant-placeholder">Logo à venir</div>
                    )}
                  </div>

                  <h3>{exposant.name}</h3>
                  <p>{exposant.description}</p>

                  {hasUrl ? (
                    <a
                      href={exposant.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      Voir le site
                    </a>
                  ) : (
                    <span className="exposant-soon">
                      Informations à venir
                    </span>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}