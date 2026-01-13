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
          <span className={styles.icon} title="Visa"> 
            <svg width="48" height="16" viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="16" rx="2" fill="#0A4DA2"/></svg>
          </span>
          <span className={styles.icon} title="Mastercard">
            <svg width="36" height="16" viewBox="0 0 36 16"><rect width="36" height="16" rx="2" fill="#FF5F00"/></svg>
          </span>
          <span className={styles.icon} title="Maestro">
            <svg width="36" height="16" viewBox="0 0 36 16"><rect width="36" height="16" rx="2" fill="#0063A8"/></svg>
          </span>
          <span className={styles.icon} title="American Express">
            <svg width="48" height="16" viewBox="0 0 48 16"><rect width="48" height="16" rx="2" fill="#2E77BB"/></svg>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;