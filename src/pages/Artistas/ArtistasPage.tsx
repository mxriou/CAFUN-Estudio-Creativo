import React from 'react';
import Footer from '../../components/common/Footer';
import './ArtistasPage.css';

type Artista = {
    id: string;
    nombre: string;
    disciplina: string;
    bio: string;
    imagen: string;
};

const artistas: Artista[] = [
    {
        id: 'artista1',
        nombre: 'Artista 1',
        disciplina: 'Pintura — Técnica mixta',
        bio: 'Explora la materialidad del color y el gesto a través de obras que dialogan con el imaginario contemporáneo mexicano.',
        imagen: '/Artistas/artista1.jpg',
    },
    {
        id: 'artista2',
        nombre: 'Artista 2',
        disciplina: 'Pintura figurativa',
        bio: 'Su trabajo cuestiona la representación del cuerpo y la identidad en el arte urbano.',
        imagen: '/Artistas/artista2.jpg',
    },
    {
        id: 'artista3',
        nombre: 'Artista 3',
        disciplina: 'Ilustración y collage',
        bio: 'Crea narrativas visuales que entrelazan referencias del cómic, la moda y la cultura pop.',
        imagen: '/Artistas/artista3.jpg',
    },
    {
        id: 'artista4',
        nombre: 'Artista 4',
        disciplina: 'Arte digital',
        bio: 'Investiga la frontera entre el medio analógico y la imagen generada por algoritmo.',
        imagen: '/Artistas/artista4.jpg',
    },
];

const ArtistasPage: React.FC = () => {
    return (
        <div className="artistas-page-root">
            <header className="artistas-page-hero">
                <h1 className="artistas-page-title">ARTISTAS</h1>
                <p className="artistas-page-subtitle">Colectivo CAFUN — 2026</p>
                <div className="artistas-page-line" />
                <p className="artistas-page-intro">
                    Un colectivo de creadores cuyas prácticas convergen en CAFUN ARTIST.
                    Cada obra es una conversación entre disciplinas, materiales y miradas.
                </p>
            </header>

            <section className="artistas-page-grid">
                {artistas.map((a) => (
                    <article key={a.id} className="artistas-page-card">
                        <div className="artistas-page-card-img">
                            <img src={a.imagen} alt={a.nombre} />
                        </div>
                        <div className="artistas-page-card-body">
                            <h2 className="artistas-page-card-name">{a.nombre}</h2>
                            <p className="artistas-page-card-disciplina">{a.disciplina}</p>
                            <p className="artistas-page-card-bio">{a.bio}</p>
                        </div>
                    </article>
                ))}
            </section>

            <Footer />
        </div>
    );
};

export default ArtistasPage;
