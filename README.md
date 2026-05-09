# CAFUN Estudio Creativo

CAFUN Estudio Creativo es el punto de encuentro entre el arte y el comercio. Una plataforma de **e-commerce colaborativo** donde artistas, productores y maquiladores transforman su talento en oportunidades reales de venta. En CAFUN, cada creación encuentra su mercado: desde nichos especializados hasta audiencias globales.

Este repositorio contiene el código fuente del frontend de la plataforma, desarrollado con **React + TypeScript** sobre Create React App.

---

## 📋 Requisitos previos

Antes de implementar el proyecto en tu entorno local, asegúrate de tener instalado:

- **Node.js** (versión 16 o superior) — [Descargar aquí](https://nodejs.org/)
- **npm** (incluido con Node.js) o **Yarn** (el repositorio incluye `yarn.lock`)
- **Git** para clonar el repositorio
- Un editor de código recomendado: **Visual Studio Code** (el repo incluye configuración `.vscode`)

---

## 🚀 Instalación paso a paso

Sigue estas indicaciones para levantar CAFUN Estudio Creativo en tu máquina:

### 1. Clonar el repositorio

```bash
git clone https://github.com/mxriou/CAFUN-Estudio-Creativo.git
cd CAFUN-Estudio-Creativo
```

### 2. Instalar las dependencias

Puedes usar **npm** o **yarn**. Como el proyecto incluye `yarn.lock`, se recomienda Yarn para mantener consistencia de versiones:

```bash
# Con Yarn (recomendado)
yarn install

# O con npm
npm install
```

### 3. Ejecutar el proyecto en modo desarrollo

```bash
yarn start
# o bien
npm start
```

Esto iniciará el servidor de desarrollo. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la plataforma de CAFUN funcionando.

La página se recargará automáticamente cada vez que guardes cambios y podrás ver los errores de lint directamente en la consola.

---

## 🛠️ Scripts disponibles

Dentro del directorio del proyecto puedes ejecutar los siguientes comandos:

### `npm start` o `yarn start`

Ejecuta la aplicación en **modo desarrollo** sobre [http://localhost:3000](http://localhost:3000). Ideal para trabajar en nuevas vistas del catálogo, secciones de artistas o flujos de compra del e-commerce.

### `npm test` o `yarn test`

Lanza el corredor de pruebas en modo interactivo. Útil para validar componentes críticos como el carrito, el checkout o los perfiles de creadores.

Más información en la [documentación de pruebas](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build` o `yarn build`

Genera la versión optimizada para **producción** dentro de la carpeta `build`. Empaqueta React en modo producción, minifica el código y agrega hashes a los archivos para un despliegue eficiente.

Una vez generado, la plataforma estará lista para subirse al servidor de hosting elegido. Consulta la [guía de despliegue](https://facebook.github.io/create-react-app/docs/deployment) para más detalles.

### `npm run eject`

**⚠️ Nota importante: esta es una operación irreversible. Una vez que ejecutes `eject`, no podrás volver atrás.**

Si necesitas un control total sobre la configuración (Webpack, Babel, ESLint, etc.), este comando copiará todos los archivos de configuración al proyecto. No es necesario usarlo a menos que el equipo de CAFUN requiera personalizaciones avanzadas en el build.

---

## 📁 Estructura del proyecto

```
CAFUN-Estudio-Creativo/
├── .vscode/          # Configuración recomendada del editor
├── public/           # Archivos estáticos (favicon, index.html, etc.)
├── src/              # Código fuente de la aplicación React + TypeScript
├── package.json      # Dependencias y scripts del proyecto
├── tsconfig.json     # Configuración de TypeScript
└── yarn.lock         # Versiones bloqueadas de dependencias
```

---

## 🎨 Sobre el proyecto

CAFUN Estudio Creativo busca conectar a **artistas, productores y maquiladores** con audiencias que valoran lo auténtico. La plataforma está pensada para:

- Visibilizar creadores independientes y darles un canal de venta directo.
- Facilitar la colaboración entre productores y maquiladores.
- Llevar productos de nichos especializados a mercados globales.

Si quieres contribuir al proyecto, abre un *issue* o envía un *pull request* describiendo tu propuesta.

---

## 📚 Recursos adicionales

- [Documentación de Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
- [Documentación oficial de React](https://reactjs.org/)
- [Documentación de TypeScript](https://www.typescriptlang.org/docs/)
