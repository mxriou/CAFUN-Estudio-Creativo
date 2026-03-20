/*Este es el archivo que se ejecuta para que se pueda ver el proyecto en el navegador
  Es el lugar donde se renderiza el componente JSX
*/
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './contexts/CartContext';
 
/**
 * Creates a React root element for rendering the application.
 * @remarks
 * The root element is obtained from the DOM using `document.getElementById('root')`.
 * This assumes that an HTML element with id="root" exists in the index.html file.
 * @throws {Error} If the element with id 'root' is not found in the DOM.
 */
const root = createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
