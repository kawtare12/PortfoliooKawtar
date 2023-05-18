import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Experiences() {
    const experiences = [
    {
      company: 'Développement d applications web en utilisant plusieurs technologies:',
      technologies: ['J ai une expérience pratique dans la conception et la mise en œuvre de bases de données, l intégration de services Web, et la création des interfaces utilisateur conviviales et réactives. Je suis également familier avec les frameworks modernes tels que React et Angular, ce qui me permet de développer des applications web évolutives et performantes.'],
    },
    {
      company: "Développement côté serveur avec  :",
      technologies: [ 'PHP', 'AJAX', 'JAVASCRIPT'],
    },
    {
      
      company:"Manipulation de bases de données :",
      technologies: ['Je possède une experience dans la manipulation de bases de données telles que MongoDB et MySQL. Je suis capable de concevoir et de mettre en œuvre des schémas de bases de données efficaces et d assurer la sécurité et l intégrité des données. '],

    }
  ];

  const experienceCards = experiences.map((experience, index) => (
    <div key={index} className="shadow p-3 mb-3 bg-white rounded card">
      <div className="p-card-body">
        <div
          className="p-card-title"
          style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}
        >
          {experience.company}
        </div>
        <div className="p-card-subtitle">{experience.position}</div>
        <div className="p-card-content">
          {experience.technologies && (
            <div>
              <h5>
                <br />
                 
              </h5>
              <ul>
                {experience.technologies.map((technology, index) => (
                  <li key={index}>{technology}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="p-card-footer">{experience.date}</div>
      </div>
    </div>
  ));

  return (
    <section style={{ padding: '10vh 20vh 10vh 20vh', textAlign: 'left' }}>
      {experienceCards}
    </section>
  );
}
