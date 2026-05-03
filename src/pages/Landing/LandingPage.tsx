import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import './LandingPage.css';
import pinturasBg from '../../assets/images/pinturas1-bg.jpg';
import Footer from '../../components/common/Footer';
import HeroBg from '../../assets/images/main-landing-page.svg';
import WinterCollection from '../../components/common/WinterCollection';
import GaleriaCoverflow from '../../components/common/GaleriaCoverflow';

const galleryImages = [
  '/Gallery/gallery1.jpg',
  '/Gallery/gallery2.jpg',
  '/Gallery/gallery3.jpg',
  '/Gallery/gallery4.jpg',
];

const artistas = [
  { id: 'artista1', nombre: 'Artista 1', imagen: '/Artistas/artista1.jpg' },
  { id: 'artista2', nombre: 'Artista 2', imagen: '/Artistas/artista2.jpg' },
  { id: 'artista3', nombre: 'Artista 3', imagen: '/Artistas/artista3.jpg' },
  { id: 'artista4', nombre: 'Artista 4', imagen: '/Artistas/artista4.jpg' },
];

const chamarras = [
  { id: 'chamarra-landing-1', slug: 'chamarra-mezclilla', nombre: 'Chamarra de Mezclilla', precio: 4500, imagen: '/Chamarras/chamarra1.png', disponibles: 8 },
  { id: 'chamarra-landing-2', slug: 'chamarra-2', nombre: 'Chamarra 2', precio: 4500, imagen: '/Chamarras/chamarra2.png', disponibles: 5 },
  { id: 'chamarra-landing-3', slug: 'chamarra-3', nombre: 'Chamarra 3', precio: 4500, imagen: '/Chamarras/chamarra3.png', disponibles: 10 },
];

const pinturas = [
  { id: 'pintura-landing-1', nombre: 'Rosa de Media Luna', precio: 50000, imagen: '/Pinturas/pinturas1.jpg' },
];

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { addItem } = useCart();

  const handleAddToCart = (item: { id: string; nombre: string; precio: number }) => {
    addItem({
      id: item.id,
      nombre: item.nombre,
      precio: item.precio,
    });
    alert(`✓ ${item.nombre} agregado al carrito`);
  };

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.querySelector('input[type="email"]') as HTMLInputElement;
    if (input && input.value) {
      console.log('Suscripción:', input.value);
      input.value = '';
      alert('¡Gracias por suscribirte!');
    }
  };

  return (
    <div className="landing-root">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-layer" style={{backgroundImage: `url(${HeroBg})`}} aria-hidden="true" />
        <div className="hero-content">
          <img src="/logo-cafun.png" alt="Cafun Estudio Creativo" className="hero-logo" onClick={() => { window.scrollTo(0, 0); navigate('/'); }} style={{ cursor: 'pointer' }} />
          <button className="hero-btn" onClick={() => navigate('/colecciones')}>
            Ver Colecciones
          </button>
        </div>
      </section>

      {/* Winter Collection Banner */}
      <section className="black-box-coleccion">
      </section>
      <WinterCollection />

      {/* Chamarras Section */}
      <section className="coleccion-chamarras">
        <div className="section-header" onClick={() => { window.scrollTo(0, 0); navigate('/colecciones'); }} style={{ cursor: 'pointer' }}>
          <h2>CHAMARRAS</h2>
          <p>Descubre nuestras mejores chamarras</p>
        </div>
        <div className="chamarras-grid">
          {chamarras.map((chamarra) => (
            <article className="chamarra-card" key={chamarra.id}>
              <Link to={`/producto/${chamarra.slug}`} onClick={() => window.scrollTo(0, 0)}>
                <div className="chamarra-img-wrapper">
                  <img src={chamarra.imagen} alt={chamarra.nombre} className="chamarra-img" />
                </div>
              </Link>
              <div className="chamarra-info">
                <h3 className="chamarra-nombre">{chamarra.nombre}</h3>
                <p className="chamarra-precio">${chamarra.precio.toLocaleString('es-MX')} MXN</p>
                <p className="chamarra-disponibles">{chamarra.disponibles} DISPONIBLES</p>
                <button 
                  className="chamarra-btn"
                  onClick={() => handleAddToCart({ id: chamarra.id, nombre: chamarra.nombre, precio: chamarra.precio })}
                >
                  Agregar al carrito
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Pinturas Section */}
      <section className="pinturas-section">
        <div
          className="pinturas-bg-layer"
          style={{
            backgroundImage: `url(${pinturasBg})`,
          }}
          aria-hidden="true"
        />
        <div className={'pinturas-header'} onClick={() => { window.scrollTo(0, 0); navigate('/pinturas'); }} style={{ cursor: 'pointer' }}>
            <h2>PINTURAS</h2>
            <p>Obras maestras destacadas</p>
        </div>
        <div className="pinturas-content">
          <div className="pintura-destacada">
            <Link to="/producto/rosa-de-media-luna" onClick={() => window.scrollTo(0, 0)}>
              <img src="/Pinturas/pinturas1.jpg" alt="Rosa de Media Luna" className="pintura-img" />
            </Link>
            <div className="pintura-info">
              <h3 className="pintura-nombre">Rosa de Media Luna</h3>
              <p className="pintura-precio">$50,000 MXN</p>
              <button 
                className="pintura-btn" 
                onClick={() => handleAddToCart({ id: 'pintura-landing-1', nombre: 'Rosa de Media Luna', precio: 50000 })}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Artistas Section */}
      <section className="artistas-section">
        <div className="artistas-header-block">
          <h2 className="artistas-title" onClick={() => { window.scrollTo(0, 0); navigate('/artistas'); }} style={{ cursor: 'pointer' }}>ARTISTAS</h2>
          <div className="artistas-names-bar">
            {artistas.map((a) => (
              <Link key={a.id} to={`/artistas/`} className="artistas-name-label">
                {a.nombre}
              </Link>
            ))}
          </div>
        </div>
        <div className="artistas-masonry">
          {artistas.map((artista, i) => (
            <Link to="" className={`artista-cell artista-cell-${i + 1}`} key={artista.id}>
              <img src={artista.imagen} alt={artista.nombre} />
            </Link>
          ))}
        </div>
      </section>

      {/* Galería Section */}
      <section className="galeria-section">
        <div className="section-header" onClick={() => { window.scrollTo(0, 0); navigate('/galeria'); }} style={{ cursor: 'pointer' }}>
          <h2>GALERÍA</h2>
          <p>Mira nuestra colección completa</p>
        </div>
        <GaleriaCoverflow images={galleryImages} />
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
