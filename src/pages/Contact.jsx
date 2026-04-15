import "./Contact.css";

export default function Contact() {
  const contactBlocks = [
    {
      title: "Accueil / Secrétariat",
      referent: "Claire Martin",
      role: "Référente accueil",
      phone: "06 11 22 33 44",
      email: "accueil@bourges2026.fr",
      description:
        "Coordination de l’accueil des équipes, informations générales, résultats et orientation des délégations.",
    },
    {
      title: "Parking / Circulation",
      referent: "Julien Bernard",
      role: "Référent circulation",
      phone: "06 22 33 44 55",
      email: "parking@bourges2026.fr",
      description:
        "Gestion des accès, orientation des véhicules, remorques, minibus, bus et circulation sur site.",
    },
    {
      title: "Buvette / Restauration",
      referent: "Sophie Lambert",
      role: "Référente restauration",
      phone: "06 33 44 55 66",
      email: "restauration@bourges2026.fr",
      description:
        "Organisation de la buvette, du service restauration équipiers et de la coordination avec les prestataires.",
    },
    {
      title: "Grillades",
      referent: "Nicolas Petit",
      role: "Référent grillades",
      phone: "06 44 55 66 77",
      email: "grillades@bourges2026.fr",
      description:
        "Gestion du stand grillades, préparation, vente et coordination de l’équipe sur les créneaux du midi.",
    },
    {
      title: "Bassin / Sécurité",
      referent: "Hervé Dubois",
      role: "Référent sécurité bassin",
      phone: "06 55 66 77 88",
      email: "bassin@bourges2026.fr",
      description:
        "Organisation des moyens de sécurité sur l’eau, pilotes, assistants sécurité et coordination des embarcations.",
    },
    {
      title: "Zone d’arrivée / Protocole",
      referent: "Camille Moreau",
      role: "Référente protocole",
      phone: "06 66 77 88 99",
      email: "protocole@bourges2026.fr",
      description:
        "Suivi de la zone d’arrivée, accompagnement des officiels et préparation des cérémonies protocolaires.",
    },
    {
      title: "Logistique / Montage",
      referent: "Thomas Leroy",
      role: "Référent logistique",
      phone: "06 77 88 99 00",
      email: "logistique@bourges2026.fr",
      description:
        "Montage, démontage, installation des barnums, balisage, barrières et organisation technique du site.",
    },
    {
      title: "Équipiers / Bénévoles",
      referent: "Emma Roux",
      role: "Référente bénévoles",
      phone: "06 88 99 00 11",
      email: "equipiers@bourges2026.fr",
      description:
        "Suivi des inscriptions bénévoles, répartition sur les postes et informations pratiques avant l’événement.",
    },
  ];

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <span className="section-tag">Contact</span>
          <h1>Les référents de l’événement</h1>
          <p className="contact-intro">
            Retrouvez ici les référents de chaque pôle d’organisation pour le
            Championnat de France d’Aviron à Bourges. Les coordonnées ci-dessous
            sont actuellement présentées à titre indicatif.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {contactBlocks.map((item, index) => (
              <article className="contact-card" key={index}>
                <div className="contact-card-top">
                  <span className="contact-card-badge">Référent</span>
                  <h2>{item.title}</h2>
                </div>

                <p className="contact-description">{item.description}</p>

                <div className="contact-person">
                  <p className="contact-name">{item.referent}</p>
                  <p className="contact-role">{item.role}</p>
                </div>

                <div className="contact-details">
                  <a href={`tel:${item.phone.replace(/\s/g, "")}`}>
                    {item.phone}
                  </a>
                  <a href={`mailto:${item.email}`}>{item.email}</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      
    </main>
  );
}