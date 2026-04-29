import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import Peluditos from "./assets/Peluditos.webp";
import DentIA from "./assets/DentIA.webp";
import GatsVet from "./assets/GatsVet.webp";
import CVmalvarosa from "./assets/CVmalvarosa.webp";
import ClaraAlcolado from "./assets/ClaraAlcolado.webp";
import DoncelAbogados from "./assets/DoncelAbogados.webp";
import techDivider from "./assets/tech-divider.webp";

function App() {
  return (
    <>
      <header className="hero fade-in">
        <h1>Carolina Villamar G.</h1>
        <p>Desarrolladora Web | SEO | Marketing Digital</p>

      <div className="hero-buttons">
  <a href="#proyectos" className="btn">
    Ver proyectos
  </a>

  <a
    href="/cv-carolina-villamar.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-secondary"
  >
    Descargar CV
  </a>
</div>
      </header>

      <main>
        <section className="fade-in">
          <h2>Sobre mí</h2>

          <p>
            Soy Carolina Villamar, desarrolladora web en formación con experiencia
            real en creación y optimización de páginas web para clientes.
          </p>

          <p>
            He trabajado con WordPress, Divi y GoHighLevel (GHL), además de gestión
            de redes sociales con Metricool, SEO y herramientas como Google
            Analytics y Search Console.
          </p>

          <p>
            Actualmente desarrollo mi proyecto final en Laravel, aplicando backend,
            bases de datos y arquitectura MVC en una aplicación web real.
          </p>

          <p>
            Busco seguir creciendo profesionalmente dentro del desarrollo web y el
            entorno digital.
          </p>
        </section>

        <section id="proyectos" className="fade-in">
          <h2>Proyectos</h2>

          <div className="projects">
            <div className="card main-project">
              <img
                src={Peluditos}
                alt="Peluditos al Cuidado"
                className="project-img"
              />

              <h3>Peluditos al Cuidado</h3>
              <span className="tagline">Laravel · MVC · SQLite</span>

              <p>
                Proyecto final de grado desarrollado en Laravel. Incluye sistema
                completo con base de datos, panel de administración, blog dinámico y
                gestión de servicios.
              </p>

              <span>Proyecto en desarrollo</span>
            </div>

            <div className="card">
              <img
                src={DoncelAbogados}
                alt="Doncel Abogados"
                className="project-img"
              />

              <h3>Doncel Abogados</h3>
              <span className="tagline">WordPress · Divi · SEO</span>

              <p>
                Diseño y desarrollo de página web profesional para despacho de
                abogados. Optimización visual, estructura web y experiencia de
                usuario.
              </p>

              <a
                href="https://doncelabogados.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver proyecto
              </a>
            </div>

            <div className="card">
              <img
                src={ClaraAlcolado}
                alt="Abogada en Alcorcón"
                className="project-img"
              />

              <h3>Abogada en Alcorcón</h3>
              <span className="tagline">GHL · Landing Page · Conversión</span>

              <p>
                Creación de landing page optimizada en GHL, enfocada en captación de
                clientes y conversión.
              </p>

              <a
                href="https://abogadaenalcorcon.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver proyecto
              </a>
            </div>

            <div className="card">
              <img
                src={CVmalvarosa}
                alt="CV Malvarrosa"
                className="project-img"
              />

              <h3>CV Malvarrosa</h3>
              <span className="tagline">GHL · Responsive · UX</span>

              <p>
                Desarrollo de página web para clínica veterinaria, con estructura
                clara y diseño adaptado a usuarios.
              </p>

              <a
                href="https://cvmalvarrosa.com/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver proyecto
              </a>
            </div>

            <div className="card">
              <img
                src={GatsVet}
                alt="Gats Vet Domicili"
                className="project-img"
              />

              <h3>Gats Vet Domicili</h3>
              <span className="tagline">GHL · Accesibilidad · Diseño</span>

              <p>
                Diseño web orientado a servicios veterinarios a domicilio, con
                enfoque en experiencia de usuario y accesibilidad.
              </p>

              <a
                href="https://gatsvetdomicili.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver proyecto
              </a>
            </div>

            <div className="card">
              <img
                src={DentIA}
                alt="Software DentIA"
                className="project-img"
              />

              <h3>Software DentIA</h3>
              <span className="tagline">GHL · Landing Page · Diseño Web</span>

              <p>
                Desarrollo de página web orientada al sector dental, con diseño
                moderno, estructura clara y enfoque en presentación profesional de
                servicios.
              </p>

              <a
                href="https://softwaredentia.com/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver proyecto
              </a>
            </div>
          </div>
        </section>

  <section className="fade-in">
  <h2>Habilidades</h2>

  <h3 className="skills-title">Técnicas</h3>
  <div className="skills">
    <span>HTML</span>
    <span>CSS</span>
    <span>JavaScript</span>
    <span>React</span>
    <span>WordPress</span>
    <span>Divi</span>
    <span>GHL</span>
    <span>Laravel</span>
    <span>SEO</span>
    <span>Google Analytics</span>
    <span>Search Console</span>
    <span>Metricool</span>
  </div>

  <h3 className="skills-title soft-title">Profesionales</h3>
  <div className="skills">
    <span>Adaptabilidad</span>
    <span>Compromiso</span>
    <span>Aprendizaje continuo</span>
    <span>Comunicación clara</span>
    <span>Organización</span>
    <span>Atención al detalle</span>
    <span>Trabajo en equipo</span>
    <span>Autonomía</span>
  </div>
</section>

        <section className="fade-in">
          <h2>Contacto</h2>

          <p>¿Te interesa mi perfil o quieres colaborar conmigo?</p>

          <div className="contact-buttons">
            <a
              href="mailto:carolina.villamar.dev@gmail.com"
              className="gmail-btn"
            >
              <SiGmail />
              Gmail
            </a>

            <a
              href="https://www.linkedin.com/in/cvillamargarzon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <h3>Carolina Villamar G.</h3>
        <p>Desarrolladora Web · SEO · Marketing Digital</p>
        <span>© 2026 Carolina Villamar. Todos los derechos reservados.</span>
      </footer>
    </>
  );
}

export default App;