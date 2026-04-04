export default function Repas() {
  return (
    <div className="page page-repas">
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">Restauration</span>
          <h1>Réservation des repas</h1>
          <p className="page-intro">
            Retrouvez ici les prestations repas proposées pour le Championnat
            National Sprint et le Championnat de France Sport Adapté.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container repas-layout">
          <article className="repas-card">
            <span className="section-tag">Championnat National Sprint</span>
            <h2>Prestations repas proposées</h2>

            <p>
              Cette année la restauration des athlètes et des encadrants aura
              lieu au quai d’Auron à Bourges, comme en 2022. L’accès est facile
              en véhicules légers depuis le bassin, avec une distance de 3 km et
              environ 8 minutes de trajet. Un grand parking gratuit est à votre
              disposition pour stationner.
            </p>

            <p>
              Niveau menu, rien ne change, ni la quantité, ni la qualité : les
              repas seront préparés par le même chef.
            </p>

            <p>
              Les repas du midi et du soir sont composés d’une entrée, d’un plat
              principal, d’un laitage, d’un dessert et d’un fruit. Menu à venir.
            </p>

            <p>
              Bien entendu, les horaires de services sont adaptés aux horaires
              de courses.
            </p>

            <div className="repas-block">
              <h3>Repas proposés</h3>
              <ul className="repas-list">
                <li>Dîner vendredi 5 juin (au quai d’Auron)</li>
                <li>
                  Petit-déjeuner samedi 6 juin (sous barnum à la buvette du club)
                </li>
                <li>Déjeuner samedi 6 juin (au quai d’Auron)</li>
                <li>Dîner samedi 6 juin (au quai d’Auron)</li>
                <li>
                  Petit-déjeuner dimanche 7 juin (sous barnum à la buvette du
                  club)
                </li>
                <li>Déjeuner dimanche 7 juin (au quai d’Auron)</li>
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

          <article className="repas-card">
            <span className="section-tag">Championnat de France Sport Adapté</span>
            <h2>Prestations repas proposées</h2>

            <p>
              La restauration des athlètes et des encadrants aura lieu sous
              barnum à la buvette du club.
            </p>

            <p>
              Bien entendu, les horaires de services sont adaptés aux horaires
              de courses.
            </p>

            <div className="repas-block">
              <h3>Repas proposés</h3>
              <ul className="repas-list">
                <li>
                  Déjeuner jeudi 4 juin (sous barnum à la buvette du club)
                  <br />
                  <span className="muted">
                    Menu prévu : tomate mozzarella, rougail riz, fromage, fruit
                    et petit gâteau sec.
                  </span>
                </li>
                <li>
                  Déjeuner vendredi 5 juin (sous barnum à la buvette du club)
                  <br />
                  <span className="muted">
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
        </div>
      </section>
    </div>
  );
}