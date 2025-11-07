import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const galleryImages = [
    '/gallery1.jpg',
    '/gallery2.jpg',
    '/gallery3.jpg',
    '/gallery4.jpg',
];

const artistas = [
    { nombre: 'Artista 1', imagen: '/artist1.jpg' },
    { nombre: 'Artista 2', imagen: '/artist2.jpg' },
    { nombre: 'Artista 3', imagen: '/artist3.jpg' },
    { nombre: 'Artista 4', imagen: '/artist4.jpg' },
    { nombre: 'Artista 5', imagen: '/artist5.jpg' }
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
                    <h2>PINTURAS</h2>
                    <div className="piintura-destacada">
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
                <footer className="footer-section">
                    <div className="footer-columns">
                        <div>
                            <h4>Servicio al Cliente</h4>
                            <ul>
                                 <li><a href="">Preguntas Frecuentes (FAQ)</a></li>
                                <li><a href="">Preguntas Frecuentes</a></li>
                                <li><a href="">Envíos y Devoluciones</a></li>
                                <li><a href="">Términos y Condiciones</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4>Sobre Nosotros</h4>
                            <ul>
                                <li>Sobre CAFUN ARTIST</li>
                                <li>Equipo</li>
                            </ul>
                        </div>

                        <div>
                            <h4>SIGUENOS</h4>
                            <ul>
                                <li>Instragram</li>
                                <li>Facebook</li>
                            </ul>
                        </div>
                        <div>
                            <h4>INFORMACION</h4>
                            <ul>
                                <li>Términos y Condiciones</li>
                                <li>Política de Privacidad</li>
                                <li>Comercialización ICON</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="footer-bottom">
                        <span>MEXICO (MXN $)</span>
                        <span>© 2025 CAFUN ARTIST</span>
                        <div className="footer-payments">
                            <img src="/visa.svg" alt="Visa" />
                            <img src="/mastercard.svg" alt="Mastercard" />
                            <img src="/amex.svg" alt="Amex" />
                            <img src="/paypal.svg" alt="Paypal" />
                        </div>
                    </div>
                </footer>
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