import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.subscribe}>
        <h2 className={styles.title}>SUBSCRIBIRSE</h2>
        <p className={styles.subtitle}>Suscríbete a nuestra lista de correo para enterarte sobre lanzamientos de nuevas colecciones</p>
        <hr className={styles.rule} />

        <form className={styles.form} onSubmit={(e) => e.preventDefault()} aria-label="Formulario de suscripción">
          <label htmlFor="footer-email" className={styles.srOnly}>Correo electrónico</label>
          <input id="footer-email" type="email" placeholder="tu@correo.com" className={styles.input} />
          <button className={styles.subscribeBtn}>Suscribirse</button>
        </form>
      </div>

      <hr className={styles.divider} />

      <div className={styles.columns}>
        <div className={styles.col}>
          <h4 className={styles.colTitle}>SERVICIO AL CLIENTE</h4>
          <ul className={styles.list}>
            <li><a href="#">Preguntas Frecuentes (FAQ)</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Envío y Entrega</a></li>
            <li><a href="#">Devoluciones y Cambios</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>SOBRE NOSOTROS</h4>
          <ul className={styles.list}>
            <li><a href="#">Sobre CAFUN ARTIST</a></li>
            <li><a href="#">Nuestra Tienda</a></li>
            <li><a href="#">Editorial</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>SÍGUENOS</h4>
          <ul className={styles.list}>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">TikTok</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>INFORMACIÓN</h4>
          <ul className={styles.list}>
            <li><a href="#">Términos y Condiciones</a></li>
            <li><a href="#">Métodos de Pago</a></li>
            <li><a href="#">Política de Privacidad</a></li>
            <li><a href="#">Cumplimiento CCPA</a></li>
          </ul>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.bottom}>
        <div className={styles.left}>MÉXICO (MXN $)</div>
        <div className={styles.center}>© 2024 - CAFUN ARTIST</div>
        <div className={styles.right} aria-hidden>
          <img src="/visa-logo.svg" alt="Visa" title="Visa" className={styles.cardLogo} />
          <img src="/mastercard-logo.svg" alt="Mastercard" title="Mastercard" className={styles.cardLogo} />
          <img src="/logo-maestro.png" alt="Maestro" title="Maestro" className={styles.cardLogo} />
          <img src="/american-express-logo.png" alt="AmericaExpress" title="AmericaExpress" className={styles.cardLogo} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;