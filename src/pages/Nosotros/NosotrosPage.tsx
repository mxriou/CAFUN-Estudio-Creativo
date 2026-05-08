import React from 'react';
import './NosotrosPage.css';

const NosotrosPage: React.FC = () => {

    const members = [
        {
            name: 'Carlos Fuentes',
            role: 'CEO — Dirección General',
            desc:
                'Responsable de la toma de decisiones estratégicas y de la dirección general de CAFUN Estudio Creativo.',
        },
        {
            name: 'Mario Uriel',
            role: 'Director de Tecnología y Desarrollo',
            desc:
                'Responsable de la creación y mantenimiento de las plataformas web y tecnologías; supervisa e implementa soluciones tecnológicas para la empresa.',
        },
        {
            name: 'Santiago Sanchez',
            role: 'Director de Área — Ciudad de México',
            desc:
                'Responsable de la gestión y operación de la sede en CDMX; coordina equipos para asegurar la calidad y eficiencia de los proyectos.',
        },
        {
            name: 'Alejandra Pineda',
            role: 'Directora de Museografía y Estética',
            desc:
                'Responsable de la creación y diseño de exposiciones y eventos; supervisa la estética y presentación de los proyectos y eventos de CAFUN.',
        },
        {
            name: 'Iván Lázaro',
            role: 'Director de Fotografía y Video',
            desc:
                'Responsable de la creación de contenido visual y de coordinar la producción de fotografía y video para los proyectos de CAFUN.',
        },
    ];

    return (
        <main className="nosotros-container">
            <header className="nosotros-header">
                <h1 className="nosotros-title">NOSOTROS</h1>
                <p className="nosotros-subtitle">Estudio Creativo — 2026</p>
                <div className="nosotros-line" />
                <p className="nosotros-hero">
                    CAFUN Estudio Creativo desarrolla un ecosistema en el que el arte no compite,
                    sino que se expande: un espacio donde múltiples talentos convergen para
                    producir, exhibir y distribuir belleza en formatos contemporáneos y accesibles.
                </p>
            </header>

            <section className="nosotros-section" aria-labelledby="mision-heading">
                <h2 id="mision-heading" className="nosotros-section-title">Misión</h2>
                <p className="nosotros-section-body">
                    Nuestra misión es potenciar prácticas creativas colaborativas que amplifiquen el
                    alcance del arte y lo hagan accesible. Creamos conexiones entre artistas,
                    curadores, productores y audiencias para transformar ideas en experiencias
                    culturales relevantes y contemporáneas.
                </p>
            </section>

            <section className="nosotros-section" aria-labelledby="equipo-heading">
                <h2 id="equipo-heading" className="nosotros-section-title">Equipo</h2>
                <div className="team-grid">
                    {members.map((m) => (
                        <article key={m.name} className="team-card">
                            <h3 className="team-name">{m.name}</h3>
                            <p className="team-role">{m.role}</p>
                            <p className="team-desc">{m.desc}</p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default NosotrosPage;