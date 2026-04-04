export default function Mecena() {
  const mecenes = [
    {
      name: "MBDA",
      image: "/images/mbda.jpg",
      url: "https://www.mbda-systems.com/",
      description: "Partenaire mécène de l’événement.",
    },
    {
      name: "Nom du mécène 2",
      image: "/images/mecene-2.png",
      url: "#",
      description: "Description courte du partenaire.",
    },
    {
      name: "Nom du mécène 3",
      image: "/images/mecene-3.png",
      url: "#",
      description: "Description courte du partenaire.",
    },
  ];

  return (
    <div className="mecena-page">
      <section className="mecena-hero">
        <div className="container">
          <span className="section-tag">Mécènes</span>
          <h1>Nos mécènes et partenaires</h1>
          <p className="mecena-intro">
            Le Championnat de France d’Aviron s’appuie sur le soutien de mécènes
            et partenaires engagés. Leur accompagnement contribue à la réussite
            de l’événement et au rayonnement de l’aviron.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mecena-grid">
            {mecenes.map((mecene) => (
              <article className="mecena-card" key={mecene.name}>
                <a
                  className="mecena-card-link"
                  href={mecene.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="mecena-logo-box">
                    <img src={mecene.image} alt={`Logo ${mecene.name}`} />
                  </div>

                  <div className="mecena-card-content">
                    <h2>{mecene.name}</h2>
                    <p>{mecene.description}</p>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}