import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import Footer from '../../components/common/Footer';
import { getProducto, productos } from '../../data/productos';
import './PinturaDetallePage.css';

const PinturaDetallePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeImg, setActiveImg] = useState(0);
  const { addItem } = useCart();
  const navigate = useNavigate();

  const producto = slug ? getProducto(slug) : undefined;
  const relacionados = productos.filter((p) => p.slug !== slug).slice(0, 3);

  useEffect(() => {
    setActiveImg(0);
  }, [slug]);

  if (!producto) {
    return (
      <div className="detalle-root detalle-not-found">
        <p>Producto no encontrado.</p>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({ id: producto.slug, nombre: producto.nombre, precio: producto.precio });
  };

  return (
    <div className="detalle-root">
      {/* Breadcrumb */}
      <div className="detalle-breadcrumb">
        <span className="detalle-breadcrumb-left">
          <Link to="/">HOME</Link> / <Link to={`/${producto.categoria.toLowerCase()}`}>{producto.categoria.toUpperCase()}</Link>
        </span>
        <Link to={`/${producto.categoria.toLowerCase()}`} className="detalle-breadcrumb-right">← REGRESAR A TODOS LOS ARTÍCULOS</Link>
      </div>

      {/* Producto Detalle */}
      <div className="detalle-content">
        {/* Columna Izquierda */}
        <div className="detalle-galeria">
          <div className="detalle-galeria-inner">
            <div className="detalle-thumbnails">
              {producto.imagenes.map((img, i) => (
                <button
                  key={i}
                  className={`detalle-thumb${i === activeImg ? ' detalle-thumb--active' : ''}`}
                  onClick={() => setActiveImg(i)}
                >
                  <img src={img} alt={`Vista ${i + 1}`} />
                </button>
              ))}
            </div>
            <img
              src={producto.imagenes[activeImg]}
              alt={producto.nombre}
              className="detalle-img-principal"
            />
          </div>
        </div>

        {/* Columna Derecha */}
        <div className="detalle-info">
          <h1 className="detalle-titulo">{producto.nombre}</h1>
          <div className="detalle-specs">
            {producto.dimensiones && <p>{producto.dimensiones}</p>}
            {producto.formato && <p>{producto.formato}</p>}
            {producto.material && <p>{producto.material}</p>}
            {producto.certificado && <p>Certificado de Autenticidad</p>}
            {producto.disponibles !== undefined && <p>{producto.disponibles} disponibles</p>}
          </div>
          <hr className="detalle-hr" />
          {producto.descripcion && <p className="detalle-descripcion">{producto.descripcion}</p>}
          <hr className="detalle-hr" />
          <p className="detalle-precio">${producto.precio.toLocaleString('es-MX')} MXN</p>
          <div className="detalle-envio-info">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Entregas en toda la República Mexicana</span>
          </div>
          <button className="detalle-btn-carrito" onClick={handleAddToCart}>
            Agregar al carrito
          </button>
          <div className="detalle-notas">
            <p>Tiempo estimado de entrega de 3-7 días dentro del país</p>
            <p>Se aplicarán impuestos y tarifas de envío al finalizar la compra</p>
          </div>
        </div>
      </div>

      {/* Relacionados */}
      {relacionados.length > 0 && (
        <section className="relacionados-section">
          <h2 className="relacionados-titulo">RELACIONADOS</h2>
          <div className="relacionados-grid">
            {relacionados.map((item) => (
              <div
                key={item.slug}
                className="relacionado-card"
                onClick={() => { window.scrollTo(0, 0); navigate(`/producto/${item.slug}`); }}
              >
                <img src={item.imagenes[0]} alt={item.nombre} className="relacionado-img" />
                <p className="relacionado-nombre">{item.nombre.toUpperCase()}</p>
                {item.material && <p className="relacionado-tecnica">{item.material}</p>}
                <p className="relacionado-precio">${item.precio.toLocaleString('es-MX')} MXN</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Subscribirse */}
      <section className="subscribe-section">
        <h2 className="subscribe-titulo">SUBSCRIBIRSE</h2>
        <p className="subscribe-subtitulo">
          Suscríbete a nuestra lista de correo para enterarte<br />
          sobre lanzamientos de nuevas colecciones
        </p>
        <hr className="subscribe-hr" />
        <button className="subscribe-btn">Suscribirse</button>
      </section>

      <Footer />
    </div>
  );
};

export default PinturaDetallePage;
