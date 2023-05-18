import React from 'react'

export default function Projets() {
  const projets = [
    {
      title: "Projet de fin d'année: gestion des demandes de documents des étudiants ",
      description: "Application desktop et mobile avec PHP pour faciliter le processus de  demande de documents des étudiants",
      

    },
    {
      title: "Projet de classe: localisation des pharmacies",
      description: "Application desktop avec ReactJs  ",
      

    },
    {
      title: "Realisation d'un site web avec Wordpress",
      description: "Un site web pour la faculté polydisciplinaire de Sidi Benoour",
      
    },
    {
      title: "Projet de classe: gestion des salles et machines",
      description: "Application web  avec LARAVEL",
      
    }
    
  ];

  return (
    <div style={{ paddingTop: '5vh' }}>
      <section className="row justify-content-center" style={{ padding: '10vh 10vh 10vh 10vh' }}>
        {projets.map((projet, index) => (
          <div key={index} className="col-sm-6 col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{projet.title}</h5>
                <p className="card-text">{projet.description}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
