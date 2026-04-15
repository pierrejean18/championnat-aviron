import "./Exposants.css";

export default function Exposants() {
  const exposants = [
    {
      name: "CREW LINE",
      description: "Équipement et matériel d’aviron.",
      url: "https://www.crewlinesports.com/fr",
      image: "/images/crewline.png",
      status: "confirmé",
    },
    {
      name: "SD Rowing FILIPPI",
      description: "Constructeur et matériel d’aviron.",
      url: "https://www.sd-rowing.com/",
      image: "/images/sdrowing.jfif",
      status: "confirmé",
    },
    {
      name: "Falcon",
      description: "Matériel et solutions pour l’aviron.",
      url: "https://falconracing-europe.com/fr",
      image: "/images/falcon.png",
      status: "confirmé",
    },
    {
      name: "AVE",
      description: "Exposant présent sur l’événement.",
      url: "",
      image: "",
      status: "à préciser",
    },
    {
      name: "WINTECH",
      description: "Constructeur / matériel d’aviron.",
      url: "https://wintechfrance.com/",
      image: "/images/wintech.png",
      status: "confirmé",
    },
    {
      name: "PYERO ILLUSTRATEUR",
      description: "Illustration et création graphique.",
      url: "https://www.facebook.com/p/Pyero-Illustrateur-100064020427879/",
      image: "/images/pyero.jpg",
      status: "confirmé",
    },
    {
      name: "IMSERCO NELO ROWING France",
      description: "Matériel et distribution pour l’aviron.",
      url: "https://www.imserco.fr/",
      image: "/images/nelo.avif",
      status: "confirmé",
    },
    {
      name: "L’ATELIER COMPOSITE",
      description: "Solutions composites et bateaux d’aviron.",
      url: "https://www.lateliercomposite.fr/",
      image: "/images/composite.png",
      status: "confirmé",
    },
    {
      name: "VEGA",
      description: "Présence en attente de confirmation.",
      url: "",
      image: "",
      status: "en attente",
    },
    {
      name: "SkyGear",
      description: "Équipement et accessoires.",
      url: "https://www.skygear.fr/",
      image: "/images/skygear.webp",
      status: "confirmé",
    },
    {
      name: "TECHNOGEAR",
      description: "Exposant présent sur l’événement.",
      url: "",
      image: "",
      status: "à préciser",
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
                  <div className="exposant-card-head">
                    <span
                      className={`exposant-badge ${
                        exposant.status === "confirmé"
                          ? "is-confirmed"
                          : exposant.status === "en attente"
                          ? "is-pending"
                          : "is-neutral"
                      }`}
                    >
                      {exposant.status}
                    </span>
                  </div>

                  <div className="exposant-image-wrap">
                    {hasImage ? (
                      <img
                        src={exposant.image}
                        alt={exposant.name}
                        className="exposant-image"
                      />
                    ) : (
                      <div className="exposant-placeholder">
                        Logo à venir
                      </div>
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