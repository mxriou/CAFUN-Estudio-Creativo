import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import pinturasBg from '../../assets/images/pinturas1-bg.jpg';
import Footer from '../../components/common/Footer';

const galleryImages = [
    '/Gallery/gallery1.jpg',
    '/Gallery/gallery2.jpg',
    '/Gallery/gallery3.jpg',
    '/Gallery/Gallery4.jpg',
];

const artistas = [
    { id: 'artista1', nombre: 'Artista 1', imagen: '/Artistas/artista1.jpg' },
    { id: 'artista2', nombre: 'Artista 2', imagen: 'Artistas//artista2.jpg' },
    { id: 'artista3', nombre: 'Artista 3', imagen: '/Artistas/artista3.jpg' },
    { id: 'artista4', nombre: 'Artista 4', imagen: '/Artistas/artista4.jpg' },
];  

const chamarras =[
    { nombre: 'Chamarra de Meclilla', precio:'$4,500 MXN', imagen: '/Chamarras/chamarra1.jpg', disponibles: 8},
    { nombre: 'Chamarra 2', precio: '$4,500 MXN', imagen: '/Chamarras/chamarra2.jpg', disponibles: 5 },
    { nombre: 'Chamarra 3', precio: '$4,500 MXN', imagen: '/Chamarras/chamarra3.jpg', disponibles: 10 },
];

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    return(
        <div className="landing-root">
            {/* HERO PRINCIPAL */}
            <section className="hero-section">
                <img src="/main-landing-page.svg" alt="Fondo Hero" className="hero-bg"/>
                <div className="hero-content">
                    <img src="/logo-cafun.svg" alt="Logo Cafun" className="hero-logo" />
                </div>
            </section>

            {/* RESTO DEL CONTENIDO agrupado */}
            <section className="main-content">
                {/* COLECCIÓN DESTACADA */}
                <section className="coleccion-section">
                    <div className="coleccion-chamarras">
                        {
                            chamarras.map((chamarra, index) => (
                                <article className="chamarra-card" key={index}>
                                    <div className="img-wrapper">
                                        <img src={chamarra.imagen} alt={chamarra.nombre} className="chamarra-img"/>
                                    </div>
                                    <div className="chamarra-info">
                                        <h3 className="chamarra-nombre">{chamarra.nombre}</h3>
                                        <div className="chamarra-precio">{chamarra.precio}</div>
                                        <div className="chamarra-disponibles">Disponibles: {chamarra.disponibles}</div>
                                        <button className="chamarra-btn" onClick={() => navigate('/chamarras')}>Agregar al carrito</button>
                                    </div>
                                </article>
                            ))
                        }
                    </div>
                </section>
                {/* Pinturas destacadas */}
                <section className="pinturas-section">
                    {/* capa de fondo: imagen + blur (no afectará al contenido) */}
                    <div
                        className="pinturas-bg-layer"
                        style={{
                            backgroundImage: `url(${pinturasBg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                        aria-hidden="true"
                    />
                    <h2>PINTURAS</h2>
                    <div className="pintura-destacada">
                        <img src="/Pinturas/pinturas1.jpg" alt="Rosa de Media Luna" className="pintura-img"/>
                        <div className="pintura-info">
                            <div className="pintura-nombre">Rosa de Media Luna</div>
                            <div className="pintura-precio">$50,000</div>
                            <button className="pintura-btn" onClick={() => navigate('/pinturas')}>Ver Pinturas</button>
                        </div>
                    </div>
                </section>
                {/*Artistas*/}
                <section className="artistas-section">
                    <h2>ARTISTAS</h2>
                    <div className="artistas-grid">
                        {
                            artistas.map((artista, index) => (
                                <div className="artista-card" key={index}>
                                    <img src={artista.imagen} alt={artista.nombre} />
                                    <div className="artista-nombre">{artista.nombre}</div>
                               </div>       
                            ))
                        }
                    </div>
                </section>

                {/*Galeria*/}
                <section className="galeria-section">
                    <h2>Galeria</h2>
                    <div className="galeria-carousel">
                        {
                            galleryImages.map((img, index ) => (
                                <img src={img} alt={`Galeria ${index + 1}`} key={index} className="galeria-img"/>
                            ))
                        }
                    </div>
                </section>
                {/*Aqui puedes agregar un carrusel funcional con los puntos*/}
                {/*Suscripcion*/}
                <section className="suscripcion-section">
                    <h2>SUBSCRIBIRSE</h2>
                    <p>Suscribete para recibir las últimas noticias y eventos exclusivos.</p>
                    <form className="suscripcion-form">
                        <input type="email" placeholder="Tu correo electrónico" required />
                        <button type="submit">Suscribirse</button>
                    </form>
                </section>

                {/*Footer=*/}
                    <Footer />
                </section>
        </div>
    );
};

export default LandingPage;

/*
Las imagenes deben estar dentro de public o assets y las rutas deben de coincidir 
Para navegacion se usa useNavigate de react-router-dom
Los botones "Agregar al carrito" y "Suscribirse" pueden conectarse a la logica real posteriormente 
Crea el archivo LandingPage.css para los estilos personalizados 
Puedes mejorar la galeria con un carrusel de imagenes usando una libreria como Swiper o react-slick
 */
