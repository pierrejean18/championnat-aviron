export default function Equipiers() {
  return (
    <div className="equipiers-page">
      <section className="sub-hero">
        <div className="container">
          <p className="hero-kicker">Bourges 2026</p>
          <h1>Équipiers</h1>
          <p className="hero-description dark-text">
            Toute l’équipe du Comité d’Organisation est ravie de vous annoncer
            deux événements d’ampleur nationale qui vont se dérouler sur le Lac
            d’Auron de Bourges.
          </p>
        </div>
      </section>

      <section id="evenements" className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Événements</span>
            <h2>Deux rendez-vous nationaux à Bourges</h2>
          </div>

          <div className="event-grid">
            <article className="info-box">
              <h3>Championnats Nationaux Sprint</h3>
              <p>U19, U23, Masters et para-aviron</p>
              <p>
                <strong>Samedi 6 juin 2026</strong> et{" "}
                <strong>dimanche 7 juin 2026</strong>
              </p>
            </article>

            <article className="info-box">
              <h3>Championnats de France Sport Adapté</h3>
              <p>
                <strong>Jeudi 4 juin 2026</strong> et{" "}
                <strong>vendredi 5 juin 2026</strong>
              </p>
            </article>
          </div>

          <div className="content-card">
            <p>
              Pour accueillir près de 3000 personnes dont près de 1000 athlètes
              et créer un événement exceptionnel, nous avons besoin de vous.
            </p>
            <p>
              Rejoignez la Team des <strong>ÉQUIPIER BOURGES 2026</strong>,
              composée d’une centaine de bénévoles, et devenez un maillon actif
              de cet événement sportif.
            </p>
            <p>
              Vous intégrerez une équipe expérimentée et motivée pour offrir les
              meilleures conditions aux athlètes.
            </p>
            <p>
              Apportez votre énergie, votre bonne humeur et vos compétences.
              Ensemble, écrivons la réussite de cette 26ème organisation
              nationale.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-columns">
          <div className="content-card">
            <span className="section-tag">Inscription</span>
            <h2>Comment rejoindre l’aventure</h2>
            <p>
              Le formulaire d’inscription ci-dessous vous permettra de commencer
              l’aventure avec nous.
            </p>
            <p>
              Pour vous aider à le remplir, consultez le descriptif des postes
              disponibles ci-après.
            </p>
            <p>
              Une fois rempli, vous pouvez nous le déposer au club ou nous le
              transmettre par mail ou par courrier.
            </p>
            <p>
              <strong>Important :</strong> partagez massivement cette invitation
              à vos amis et offrez-leur l’opportunité de vivre ce moment unique
              avec vous.
            </p>

            <div className="download-list">
              <a
                className="btn btn-primary"
                href="/documents/2026-FORMULAIRE-INSCRIPTION-EQUIPIER.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Télécharger le formulaire PDF
              </a>
              <a
                className="btn btn-secondary-dark"
                href="/documents/2026-FORMULAIRE-INSCRIPTION-EQUIPIER.docx"
                target="_blank"
                rel="noreferrer"
              >
                Télécharger le formulaire Word
              </a>
            </div>
          </div>

          <div className="content-card">
            <span className="section-tag">Informations</span>
            <h2>Contacts et réunion d’information</h2>
            <p>
              Une réunion d’information pour les équipiers aura lieu au club 15
              jours avant l’événement.
            </p>
            <p>
              <strong>Date :</strong> à venir prochainement
            </p>
            <p>
              <strong>Courriel :</strong> equipier@aviron-bourges.org
            </p>
            <p>
              <strong>Contact :</strong> Hervé au 06.13.18.78.20
            </p>
          </div>
        </div>
      </section>

      <section id="postes" className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Postes à pourvoir</span>
            <h2>Descriptif des missions bénévoles</h2>
            <p className="section-intro">
              Les horaires sont donnés à titre indicatif. Ils sont susceptibles
              de changer en fonction des horaires de courses.
            </p>
          </div>

          <div className="jobs-grid">
            <article className="job-card">
              <h3>Accueil / Secrétariat</h3>
              <p className="job-time">
                Du mercredi 14h au dimanche fin d’après-midi
              </p>
              <ul>
                <li>Préparer et assurer l’accueil des équipes.</li>
                <li>Remettre programmes et tickets repas.</li>
                <li>Afficher et distribuer les résultats.</li>
                <li>Préparer et assister la réunion des délégués.</li>
              </ul>
            </article>

            <article className="job-card">
              <h3>Accueil / Parking</h3>
              <p className="job-time">Du mercredi 14h au dimanche</p>
              <ul>
                <li>Orienter les véhicules vers leurs parkings respectifs.</li>
                <li>
                  Veiller à ce que l’accès entre le poste de secours et la voie
                  publique reste libre.
                </li>
              </ul>
            </article>

            <article className="job-card">
              <h3>Accueil / Stand club</h3>
              <p className="job-time">
                Jeudi 8h au dimanche fin d’après-midi
              </p>
              <ul>
                <li>Assurer la promotion du club.</li>
                <li>Renseigner le public.</li>
                <li>Assurer la vente d’articles de la boutique du club.</li>
                <li>Être majeur.</li>
              </ul>
            </article>

            <article className="job-card">
              <h3>Buvette / Restauration</h3>
              <p className="job-time">Du mercredi 14h au dimanche soir</p>
              <ul>
                <li>Assurer la vente des boissons et produits.</li>
                <li>Être majeur.</li>
                <li>
                  Assurer le service de restauration pour les équipiers et le
                  staff fédéral.
                </li>
                <li>
                  Participer à l’ouverture et à la fermeture de la restauration
                  des athlètes.
                </li>
              </ul>
            </article>

            <article className="job-card">
              <h3>Grillades</h3>
              <p className="job-time">Du jeudi au dimanche – 10h à 15h</p>
              <ul>
                <li>Préparer les grillades et les frites.</li>
                <li>Assurer la vente des produits.</li>
                <li>Être majeur.</li>
              </ul>
            </article>

            <article className="job-card">
              <h3>Bassin pilote</h3>
              <p className="job-time">
                Sécurité et catamaran du mercredi 16h au dimanche 19h
              </p>
              <ul>
                <li>Conduire les bateaux arbitres et/ou de sécurité.</li>
                <li>Être titulaire du permis bateau ou plaisance adapté.</li>
                <li>Savoir nager et fournir la copie du permis.</li>
                <li>
                  Une formation à la conduite des bateaux pourra être organisée.
                </li>
              </ul>
            </article>

            <article className="job-card">
              <h3>Bassin assistant sécurité</h3>
              <p className="job-time">
                Du mercredi 16h au dimanche fin des courses
              </p>
              <ul>
                <li>Assurer avec le pilote l’assistance aux embarcations.</li>
                <li>Participer à la circulation sur le lac.</li>
                <li>Si possible être plongeur et/ou titulaire du BNSSA.</li>
                <li>Savoir nager.</li>
              </ul>
            </article>

            <article className="job-card">
              <h3>Bassin vidéo départ</h3>
              <p className="job-time">
                Du jeudi 7h30 au dimanche fin des courses
              </p>
              <ul>
                <li>Assurer la mise en œuvre du système de vidéo départ.</li>
                <li>Assister l’arbitre aligneur.</li>
              </ul>
            </article>

            <article className="job-card">
              <h3>Bassin teneur bateau</h3>
              <p className="job-time">
                Du jeudi 7h30 au dimanche fin des courses
              </p>
              <ul>
                <li>Assurer l’alignement des bateaux au ponton de départ.</li>
                <li>Être aux ordres de l’arbitre aligneur par radio.</li>
                <li>Mission accessible à partir de 14 ans.</li>
                <li>
                  Une formation de teneur de bateaux sera organisée avant la
                  compétition.
                </li>
              </ul>
            </article>

            <article className="job-card">
              <h3>Zone d’arrivée</h3>
              <p className="job-time">
                Du mercredi 14h au dimanche fin des courses
              </p>
              <ul>
                <li>Assister les secouristes du poste de secours.</li>
                <li>Assister les VIP, arbitres, chronométreurs et la sono.</li>
              </ul>
            </article>

            <article className="job-card">
              <h3>Zone protocole</h3>
              <p className="job-time">
                Fins de demi-journées du samedi au dimanche
              </p>
              <ul>
                <li>Aider à la préparation des cérémonies protocolaires.</li>
                <li>Porte-coussin, stand FFA, VIP.</li>
              </ul>
            </article>

            <article className="job-card">
              <h3>Soutien logistique</h3>
              <p className="job-time">
                Montage/démontage avant et/ou après la compétition
              </p>
              <ul>
                <li>
                  Aider au montage des barnums, barrières, banderoles et
                  équipements.
                </li>
                <li>
                  Participer à l’installation du bassin et du réseau électrique.
                </li>
                <li>
                  Aider au démontage et au rangement après la compétition.
                </li>
                <li>
                  Le démontage commence dès la fin de la dernière course du
                  dimanche et peut se terminer le lundi soir.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

<section id="contact" className="section section-alt">
  <div className="container">
    <div className="contact-card">
      <div className="contact-header">
        <span className="section-tag">Nous contacter</span>
        <h2>Aviron Club de Bourges</h2>
        <p className="contact-intro">
          Toutes les informations utiles pour joindre le club et retrouver
          l’adresse du site.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-block">
          <h3>Adresse</h3>
          <p>Base d'Aviron Alice Milliat</p>
          <p>Chemin du Grand Mazières</p>
          <p>18000 Bourges</p>
        </div>

        <div className="contact-block">
          <h3>Contact</h3>
          <p>
            <a href="mailto:contact@aviron-bourges.org">
              contact@aviron-bourges.org
            </a>
          </p>
          <p>
            <a href="tel:+33248679446">02 48 67 94 46</a>
          </p>
          <p>
            <a href="tel:+33783962373">07 83 96 23 73</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}