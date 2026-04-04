export default function Exposants() {
  return (
    <main className="page page-exposants">
      <section className="sub-hero">
        <div className="container">
          <p className="hero-kicker">Visibilité et soutien</p>
          <h1>Exposants / Partenaires</h1>
          <p className="hero-description dark-text">
            Retrouvez ici les informations utiles pour les exposants et les
            partenaires de l’événement.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-columns">
          <div className="content-card">
            <span className="section-tag">Contact</span>
            <h2>Demande de stand ou de visibilité</h2>
            <p>
              Pour bénéficier d’un stand et/ou d’une banderole sur site, d’un
              encart publicitaire dans le programme digital ou pour toute autre
              demande, contactez :
            </p>

            <p>
              <strong>Brigitte BLAISE</strong>
            </p>
            <p>
              <strong>Téléphone portable :</strong> 06 95 25 22 24
            </p>
            <p>
              <strong>Courriel :</strong>{" "}
              <a href="mailto:brigitte.blaise@ffaviron.fr">
                brigitte.blaise@ffaviron.fr
              </a>
            </p>
          </div>

          <div className="content-card">
            <span className="section-tag">Informations</span>
            <h2>Présence sur l’événement</h2>
            <p>
              Cette page accueillera la liste des exposants présents ainsi que
              les partenaires qui soutiennent l’événement.
            </p>
            <p>
              Les informations pourront être enrichies progressivement :
              présentation, logo, lien utile, emplacement ou domaine
              d’activité.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Exposants</span>
            <h2>Exposants présents</h2>
            <p className="section-intro">
              La liste des exposants sera ajoutée ici au fur et à mesure.
            </p>
          </div>

          <div className="exposants-empty-state">
            <h3>Liste en cours de préparation</h3>
            <p>
              Aucun exposant n’est affiché pour le moment. Cette section sera
              mise à jour dès que les informations seront disponibles.
            </p>
          </div>

          {/*
          Exemple futur :
          <div className="exposants-grid">
            <article className="exposant-card">
              <h3>Nom de l’exposant</h3>
              <p>Description ou activité</p>
            </article>
          </div>
          */}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Partenaires</span>
            <h2>Partenaires de l’événement</h2>
            <p className="section-intro">
              Les partenaires soutenant l’organisation seront présentés dans
              cette section.
            </p>
          </div>

          <div className="exposants-empty-state">
            <h3>Liste en cours de préparation</h3>
            <p>
              Les partenaires seront ajoutés ici avec, si besoin, leur logo,
              leur nom et leur rôle dans le soutien de l’événement.
            </p>
          </div>

          {/*
          Exemple futur :
          <div className="partenaires-grid">
            <article className="partenaire-card">
              <h3>Nom du partenaire</h3>
              <p>Type de soutien ou présentation</p>
            </article>
          </div>
          */}
        </div>
      </section>
    </main>
  );
}