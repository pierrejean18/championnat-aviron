import "./Organisation.css";

export default function Organisation() {
  const organisationBlocks = [
    {
      title: "Président",
      contacts: [
        {
          name: "Serge TIRAN",
          phone: "06 37 47 81 18",
          email: "serge.tiran@aviron-bourges.org",
        },
      ],
    },
    {
      title: "Secrétaire",
      contacts: [
        {
          name: "Patrice BAILLY",
          phone: "06 37 01 04 44",
          email: "patrice.bailly18@orange.fr",
        },
      ],
    },
    {
      title: "Trésorière",
      contacts: [
        {
          name: "Marion POUSSIN",
          phone: "06 33 03 74 65",
          email: "marion.poussin@aviron-bourges.org",
        },
      ],
    },
    {
      title: "Responsable organisation",
      contacts: [
        {
          name: "Hervé BLAISE",
          phone: "06 13 18 78 20",
          email: "hblaise18@gmail.com",
        },
      ],
    },
    {
      title: "Responsable plan d’eau et sécurité eau",
      contacts: [
        {
          name: "Christian BREUILLE",
          phone: "07 89 25 22 79",
          email: "lesmondors@gmail.com",
        },
      ],
    },
    {
      title: "Responsable installations à terre",
      contacts: [
        {
          name: "Richard ASPORD",
          phone: "06 80 33 08 17",
          email: "richard.aspord@aviron-bourges.org",
        },
      ],
    },
    {
      title: "Responsable reprographie",
      contacts: [
        {
          name: "Véronique BAILLY",
          phone: "06 08 81 78 77",
          email: "patrice.bailly18@orange.fr",
        },
      ],
    },
    {
      title: "Responsable communication",
      contacts: [
        {
          name: "Brigitte BLAISE",
          phone: "09 95 25 22 24",
          email: "brigitte.blaise@ffaviron.fr",
        },
      ],
    },
    {
      title: "Responsable protocole",
      contacts: [
        {
          name: "Brigitte BLAISE",
          phone: "09 95 25 22 24",
          email: "brigitte.blaise@ffaviron.fr",
        },
      ],
    },
    {
      title: "Responsable sonorisation",
      contacts: [
        {
          name: "Richard ASPORD",
          phone: "06 80 33 08 17",
          email: "richard.aspord@aviron-bourges.org",
        },
      ],
    },
    {
      title: "Référent développement durable",
      contacts: [
        {
          name: "Dominique BARDARY",
          phone: "06 48 49 53 79",
          email: "domi.bad@orange.fr",
        },
      ],
    },
    {
      title: "Référent hébergement restauration",
      contacts: [
        {
          name: "Christian SIBUET",
          phone: "06 89 87 65 12",
          email: "sibuet.christian@orange.fr",
        },
      ],
    },
    {
      title: "Responsable des secours",
      contacts: [
        {
          name: "Dimitri BINEAU",
          phone: "07 70 05 60 73",
          email: "bineau.dimitri@orange.fr",
        },
      ],
    },
    {
      title: "Responsable buvette restauration sur site",
      contacts: [
        {
          name: "Dominique BARDARY",
          phone: "06 48 49 53 79",
          email: "domi.bad@orange.fr",
        },
        {
          name: "Daniel GUIGUON",
          phone: "06 70 92 23 40",
          email: "mbank@orange.fr",
        },
      ],
    },
  ];

  const totalContacts = organisationBlocks.reduce(
    (sum, block) => sum + block.contacts.length,
    0
  );

  return (
    <main className="organisation-page">


      <section className="organisation-section">
        <div className="container">
          <div className="organisation-grid">
            {organisationBlocks.map((block, index) => (
              <article className="organisation-card" key={index}>
                <div className="organisation-card-top">
                  <div className="organisation-card-headline">
                    <span className="organisation-card-badge">Référent</span>
                    <h2>{block.title}</h2>
                  </div>
                </div>

                <div className="organisation-contacts">
                  {block.contacts.map((contact, contactIndex) => (
                    <div className="organisation-person-block" key={contactIndex}>
                      <div className="organisation-person-header">
                        <p className="organisation-name">{contact.name}</p>
                      </div>

                      <div className="organisation-contact-actions">
                        <a
                          className="organisation-action-link"
                          href={`tel:${contact.phone.replace(/\s/g, "")}`}
                          aria-label={`Appeler ${contact.name}`}
                        >
                          <span className="organisation-action-icon">☎</span>
                          <span className="organisation-action-text">
                            <span className="organisation-action-label">
                              Téléphone
                            </span>
                            <span className="organisation-action-value">
                              {contact.phone}
                            </span>
                          </span>
                        </a>

                        <a
                          className="organisation-action-link"
                          href={`mailto:${contact.email}`}
                          aria-label={`Envoyer un email à ${contact.name}`}
                        >
                          <span className="organisation-action-icon">✉</span>
                          <span className="organisation-action-text">
                            <span className="organisation-action-label">
                              Courriel
                            </span>
                            <span className="organisation-action-value">
                              {contact.email}
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}