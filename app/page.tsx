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

            <article className="project-card card">
              <div className="project-media" role="img" aria-label="Simulación de Montecarlo: Manchester City vs Chelsea" />
              <div className="project-content">
                <h4>Simulación de Montecarlo: Manchester City vs Chelsea</h4>
                <p className="muted">Pipeline reproducible: lectura de datos, simulación de 1.000 partidos y análisis de resultado/xPoints.</p>
                <div className="chips">
                  <span className="chip">R</span>
                  <span className="chip">dplyrP</span>
                  <span className="chip">ggplot2</span>
                  <span className="chip">stats</span>
                </div>
              </div>
            </article>

            <article className="project-card card">
              <div className="project-media" role="img" aria-label="EDA y PCA para defensas de LaLiga"></div>
              <div className="project-content">
                <h4>EDA y PCA para defensa de LaLiga</h4>
                <p>Selección de métricas, normalización y comparacion de perfiles en base a los componentes principales.</p>
                <div className="chips">
                  <span className="chip">R</span>
                  <span className="chip">EDA</span>
                  <span className="chip">PCA</span>
                </div>
              </div>
            </article>

            <article className="project-card card">
              <div className="project-media" role="img" aria-label="Clusterización de defensas LaLiga (K-Means)" />
              <div className="project-content">
                <h4>Clusterización de defensas (LaLiga) con K-Means</h4>
                <p className="muted">
                  EDA, normalización Min-Max, método del codo y K-Means con visualización de clústeres.
                </p>
                <div className="chips">
                  <span className="chip">R</span>
                  <span className="chip">caret</span>
                  <span className="chip">factoextra</span>
                  <span className="chip">kmeans</span>
                </div>
              </div>
            </article>

            <article className="project-card card">
              <div className="project-media" role="img" aria-label="Clusterización de jugadores con K-Means y PCA (Python)" />
              <div className="project-content">
                <h4>Clusterización de jugadores con K-Means</h4>
                <p className="muted">
                  Limpieza y transformación de datos, elección del clúster óptimo y aplicación de K-Means con múltiples inicializaciones y visualización de clústeres en PCA.
                </p>
                <div className="chips">
                  <span className="chip">Python</span>
                  <span className="chip">pandas</span>
                  <span className="chip">scikit-learn</span>
                  <span className="chip">KMeans</span>
                  <span className="chip">PCA</span>
                  <span className="chip">StandardScaler</span>
                  <span className="chip">matplotlib</span>
                  <span className="chip">seaborn</span>
                </div>
              </div>
            </article>

            <article className="project-card card">
              <div className="project-media" role="img" aria-label="Rendimiento de jugadores del Sevilla FC" />
              <div className="project-content">
                <h4>Rendimiento de jugadores del Sevilla FC</h4>
                <p className="muted">
                  Cuadro de mandos que compara los mediocentros defensivos y delanteros centro en sus distintas fases del juego en Power BI.
                </p>
                <div className="chips">
                  <span className="chip">Power BI</span>
                  <span className="chip">Python</span>
                  <span className="chip">SQL Server</span>
                </div>
              </div>
            </article>

            <article className="project-card card">
              <div className="project-media" role="img" aria-label="Desempeño de los centrales de LaLiga" />
              <div className="project-content">
                <h4>Desempeño de los centrales de LaLiga</h4>
                <p className="muted">
                  Cuadro de mandos que compara la salida de balón de los centrales de LaLiga en Tableau.
                </p>
                <div className="chips">
                  <span className="chip">Tableau</span>
                  <span className="chip">Python</span>
                  <span className="chip">SQL Server</span>
                </div>
              </div>
            </article>

            <article className="project-card card">
              <div className="project-media" role="img" aria-label="Informe de Joaquín Panichelli" />
              <div className="project-content">
                <h4>Informe de Joaquín Panichelli</h4>
                <p className="muted">
                  Informe individual de Joaquín Panichelli, delantero del CD Mirandés.
                </p>
                <div className="chips">
                  <span className="chip">Power Point</span>
                  <span className="chip">Python</span>
                  <span className="chip">SQL Server</span>
                </div>
              </div>
            </article>

            <article className="project-card card">
              <div className="project-media" role="img" aria-label="Análisis de los delanteros de 1ª RFEF 2024/2025" />
              <div className="project-content">
                <h4>Análisis de los delanteros de 1ª RFEF 2024/2025</h4>
                <p className="muted">
                  Comparación del rendimiento ofensivo del top 20 delanteros de la categoría.
                </p>
                <div className="chips">
                  <span className="chip">Power Point</span>
                  <span className="chip">Python</span>
                  <span className="chip">SQL Server</span>
                </div>
              </div>
            </article>

            <article className="project-card card">
              <div className="project-media" role="img" aria-label="FBRef LaLiga 20/21: EDA + 3D Scatter + Radar"/>
              <div className="project-content">
                <h4>FBRef LaLiga 20/21: EDA + 3D y Radar</h4>
                <p className="muted">
                  Notebook en Python: carga de CSV, EDA, scatter 3D de jugadores del Barcelona y radar Messi–Benzema.
                </p>
                <div className="chips">
                  <span className="chip">Python</span>
                  <span className="chip">pandas</span>
                  <span className="chip">matplotlib</span>
                  <span className="chip">soccerplots</span>
                </div>
              </div>
            </article>



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
