import "./Repas.css";

export default function Repas() {
  return (
    <div className="page page-repas">
      <section className="repas-hero">
        <div className="container">
          <div className="repas-hero-panel">
            <span className="section-tag">Restauration</span>
            <h1>Réservation des repas</h1>
            <p className="repas-hero-intro">
              Retrouvez ici les prestations repas proposées pour le Championnat
              de France Sport Adapté et le Championnat National Sprint à
              Bourges.
            </p>
          </div>
        </div>
      </section>

      <section className="section repas-section">
        <div className="container repas-layout">
          <article className="repas-card repas-card-adapte">
            <div className="repas-card-top">
              <span className="section-tag">
                Championnat de France Sport Adapté
              </span>
              <h2>Prestations repas proposées</h2>
              <p className="repas-lead">
                Une restauration simple, directe et sur site, sous barnum à la
                buvette du club.
              </p>
            </div>

            <div className="repas-info-grid repas-info-grid-small">
              <div className="repas-info-box">
                <h3>Lieu</h3>
                <p>
                  La restauration des athlètes et des encadrants aura lieu sous
                  barnum à la buvette du club.
                </p>
              </div>

              <div className="repas-info-box">
                <h3>Organisation</h3>
                <p>
                  Les horaires de service sont adaptés aux horaires de courses.
                </p>
              </div>
            </div>

            <div className="repas-block">
              <h3>Repas proposés</h3>
              <ul className="repas-list">
                <li>
                  <strong>Déjeuner jeudi 4 juin</strong> (sous barnum à la
                  buvette du club)
                  <span className="repas-menu">
                    Menu prévu : tomate mozzarella, rougail riz, fromage, fruit
                    et petit gâteau sec.
                  </span>
                </li>
                <li>
                  <strong>Déjeuner vendredi 5 juin</strong> (sous barnum à la
                  buvette du club)
                  <span className="repas-menu">
                    Menu prévu : carotte râpée, pâte bolognaise, fromage à pâte
                    dure et gâteau.
                  </span>
                </li>
                <li>Repas froid à emporter</li>
              </ul>
            </div>

            <div className="repas-download">
              <a
                className="btn btn-primary"
                href="/documents/Reservation-repas-championnats-de-France-Sport-Adapte-Bourges-2026.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Télécharger la fiche Sport Adapté
              </a>
            </div>
          </article>

          <article className="repas-card repas-card-sprint">
            <div className="repas-card-top">
              <span className="section-tag">Championnat National Sprint</span>
              <h2>Prestations repas proposées</h2>
              <p className="repas-lead">
                Une offre complète pensée pour les athlètes et les encadrants,
                avec restauration principale au Quai d’Auron.
              </p>
            </div>

            <div className="repas-info-grid">
              <div className="repas-info-box">
                <h3>Lieu</h3>
                <p>
                  La restauration des athlètes et des encadrants aura lieu au
                  Quai d’Auron à Bourges, comme en 2022.
                </p>
              </div>

              <div className="repas-info-box">
                <h3>Accès</h3>
                <p>
                  L’accès est facile en véhicules légers depuis le bassin, avec
                  une distance de 3 km et environ 8 minutes de trajet.
                </p>
              </div>

              <div className="repas-info-box">
                <h3>Stationnement</h3>
                <p>
                  Un grand parking gratuit est à votre disposition pour
                  stationner.
                </p>
              </div>

              <div className="repas-info-box">
                <h3>Qualité</h3>
                <p>
                  Niveau menu, rien ne change, ni la quantité, ni la qualité :
                  les repas seront préparés par le même chef.
                </p>
              </div>
            </div>

            <div className="repas-note">
              <strong>Composition des repas :</strong> entrée, plat principal,
              laitage, dessert et fruit. Menu détaillé à venir.
            </div>

            <div className="repas-note repas-note-soft">
              Les horaires de service sont adaptés aux horaires de courses.
            </div>

            <div className="repas-block">
              <h3>Repas proposés</h3>
              <ul className="repas-list">
                <li>Dîner vendredi 5 juin (au Quai d’Auron)</li>
                <li>
                  Petit-déjeuner samedi 6 juin (sous barnum à la buvette du
                  club)
                </li>
                <li>Déjeuner samedi 6 juin (au Quai d’Auron)</li>
                <li>Dîner samedi 6 juin (au Quai d’Auron)</li>
                <li>
                  Petit-déjeuner dimanche 7 juin (sous barnum à la buvette du
                  club)
                </li>
                <li>Déjeuner dimanche 7 juin (au Quai d’Auron)</li>
                <li>Repas froid à emporter</li>
              </ul>
            </div>

            <div className="repas-download">
              <a
                className="btn btn-primary"
                href="/documents/Reservation-repas-championnats-nationaux-sprint-Bourges-2026.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Télécharger la fiche Sprint
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}