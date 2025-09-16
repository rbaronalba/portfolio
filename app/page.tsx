// app/page.tsx
import ThemeToggle from "@/components/ThemeToggle";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip-link" href="#proyectos">Saltar al contenido</a>

      <nav>
        <div className="nav-inner">
          <div className="brand">
            <img src="/img/selfie.jpeg" alt="Selfie" className="avatar" />
            <p className="site-title" aria-label="Rubén Barona">Rubén Barona</p>
          </div>
          <div className="nav-right">
            <a className="btn" href="#inicio">Inicio</a>
            <a className="btn" href="#sobre-mi">Sobre mí</a>
            <a className="btn" href="#proyectos">Proyectos</a>
            <a className="btn" href="#contacto">Contacto</a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero" id="inicio">
        <section className="hero-inner">
          <h1 className="hero-title">Hola, soy Rubén Barona</h1>
          <p className="hero-desc">
            Transformo el dato en conocimiento útil para la toma de decisiones en el fútbol profesional. 
            Experiencia en análisis, visualización e implementación de soluciones digitales 
            para entornos de scouting y dirección deportiva.
          </p>
          <div className="hero-cta">
            <a className="btn btn-lg" href="#proyectos">Ver proyectos</a>
            <a className="btn btn-ghost btn-lg" href="/cv/CV_RubénBaronaAlba.pdf" download>Descargar CV</a>
          </div>
        </section>
      </header>

      <main className="container">
        <section id="sobre-mi" style={{ marginTop: 36 }}>
          <div className="about-grid">
            <div>
              <h3 className="section-title">Sobre mí</h3>
              <article style={{ padding: 20 }}>
                <p>
                  Ingeniero informático especializado en desarrollo de software y análisis de datos, orientado a crear soluciones digitales eficientes y sostenibles.
                  He finalizado el Máster en Big Data aplicado al Scouting en Fútbol, donde apliqué análisis, visualización y machine learning para apoyar la toma de decisiones deportivas basada en datos.
                  Creo en el aprendizaje continuo, la calidad técnica y la entrega de valor. 
                  Mi objetivo es seguir creciendo como ingeniero de software en proyectos que integren desarrollo, datos y tecnología aplicada.
                </p>
              </article>
            </div>
            <div>
              <h3 className="section-title">Tecnologías</h3>
                <div className="chips">
                  <span className="chip"><img src="/img/html.svg" alt="HTML" className="stack-icon" />HTML</span>
                  <span className="chip"><img src="/img/css.svg" alt="CSS" className="stack-icon" />CSS</span>
                  <span className="chip"><img src="/img/js.svg" alt="Javascript" className="stack-icon" />JavaScript</span>
                  <span className="chip"><img src="/img/csharp.svg" alt="C#" className="stack-icon" />C#</span>
                  <span className="chip"><img src="/img/python.svg" alt="Python" className="stack-icon" />Python</span>
                  <span className="chip"><img src="/img/angular.svg" alt="Angular" className="stack-icon" />Angular</span>
                  <span className="chip"><img src="/img/r.svg" alt="R" className="stack-icon" />R</span>
                  <span className="chip"><img src="/img/sqlserver.svg" alt="SQL Server" className="stack-icon" />SQL Server</span>
                  <span className="chip"><img src="/img/postgresql.svg" alt="PostgreSQL" className="stack-icon" />PostgreSQL</span>
                  <span className="chip"><img src="/img/influxdb.svg" alt="InfluxDB" className="stack-icon" />InfluxDB</span>
                  <span className="chip"><img src="/img/grafana.svg" alt="Grafana" className="stack-icon" />Grafana</span>
                  <span className="chip"><img src="/img/powerbi.png" alt="Power BI" className="stack-icon" />Power BI</span>
                  <span className="chip"><img src="/img/tableau.svg" alt="Tableau" className="stack-icon" />Tableau</span>
                  <span className="chip"><img src="/img/wyscout.jpeg" alt="Wyscout" className="stack-icon" />Wyscout</span>
                  <span className="chip"><img src="/img/nacsport.jpeg" alt="Nacsport" className="stack-icon" />Nacsport</span>
                  <span className="chip"><img src="/img/winccoa.png" alt="Win CC OA" className="stack-icon" />Win CC OA</span>
                  <span className="chip"><img src="/img/git.svg" alt="GitHub" className="stack-icon" />GitHub</span>
                  <span className="chip"><img src="/img/vscode.svg" alt="Visual Studio Code" className="stack-icon" />Visual Studio Code</span>
                </div>

            </div>
          </div>
        </section>

        <section id="proyectos">
          <h3 className="section-title">Proyectos</h3>
          <p className="muted" style={{ margin: "8px 0 18px" }}>
            Selección de trabajos representativos. Cada tarjeta enlaza a repositorios, demos o PDFs.
          </p>

          <div className="projects-list">
            <article className="project-card card">
              <div className="project-media" role="img" aria-label="Sistema de scouting inteligente" />
              <div className="project-content">
                <h4>Sistema de Scouting Inteligente · RC Celta</h4>
                <p className="muted">Evaluación de fichajes según encaje táctico. Pipeline con selección de KPIs, PCA/UMAP, clustering y similitud (coseno).</p>
                <div className="chips">
                  <span className="chip">Boruta</span>
                  <span className="chip">PCA/UMAP</span>
                  <span className="chip">Cosine Similarity</span>
                  <span className="chip">Streamlit</span>
                </div>
              </div>
            </article>
            {/* Resto de cards igual */}
          </div>
        </section>

        {/* CONTACTO */}
        <section style={{ marginTop: 36 }}>
          <h3 className="section-title">¿Te interesa hablar?</h3>
          <ContactForm />
        </section>
      </main>

      <footer>
        © <span>{year}</span> Rubén Barona Alba | Software Engineer at ICCA | Football Data Analyst - Sports Tech & Big
      </footer>
    </>
  );
}
