import ThemeToggle from "@/components/ThemeToggle";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import MotionCard from "@/components/MotionCard";
import Link from "next/link";

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
            <Link className="btn" href="#inicio">Inicio</Link>
            <Link className="btn" href="#sobre-mi">Sobre mí</Link>
            <Link className="btn" href="#proyectos">Proyectos</Link>
            <Link className="btn" href="#contacto">Contacto</Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero" id="inicio">
        <Reveal>
          <section className="hero-inner">
            <h1 className="hero-title">Hola, soy Rubén Barona</h1>
            <p className="hero-desc">
              Transformo el dato en conocimiento útil para la toma de decisiones en el fútbol profesional. 
              Experiencia en análisis, visualización e implementación de soluciones digitales 
              para entornos de scouting y dirección deportiva.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-lg" href="#proyectos" prefetch={false} >Ver proyectos</Link>
              <a className="btn btn-ghost btn-lg" href="cv/CV_RubénBaronaAlba.pdf" type="application/pdf" rel="nooponer" download>Descargar CV</a>
            </div>
          </section>
        </Reveal>
      </header>

      <main className="container">
        <section id="sobre-mi" style={{ marginTop: 36 }}>
          <Reveal>
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
                    <span className="chip"><img src="/img/js.svg" alt="JavaScript" className="stack-icon" />JavaScript</span>
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
          </Reveal>
        </section>

        <section id="proyectos">
          <h3 className="section-title">Proyectos</h3>
          <p className="muted" style={{ margin: "8px 0 18px" }}>
            Selección de trabajos representativos. Cada tarjeta enlaza a un PDF o enlace con la tarea.
          </p>

          <Reveal delay={0.05}>
            <div className="projects-list">
              <a href="https://www.linkedin.com/posts/ruben-barona-alba_tras-varios-meses-de-trabajo-y-aprendizaje-activity-7375892886506176512-oCZD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-FBn4Bd72dnalFmFmiNqFtBFVKYWeY_XM" target="_blank" rel="noopener noreferrer" className="card-link">         
                <MotionCard>
                  <div className="project-media" role="img" aria-label="Sistema de scouting inteligente">
                    <Image
                      src="/img/projects/tfm.png"
                      alt="Vista previa del sistema de scouting"
                      fill
                      priority={false}
                      sizes="(max-width: 980px) 100vw, 220px"
                      className="media-img"
                    />
                  </div>
                  <div className="project-content">
                    <h4>Sistema de scouting inteligente para el RC Celta: evaluación de fichajes según el perfil táctico</h4>
                    <p className="muted">Diseño y desarrollo de una herramienta automatizada y escalable que evalúa el grado de adecuación táctica de jugadores externos al Real Club Celta de Vigo según su modelo de juego, 
                      a partir de un análisis exhaustivo de datos de rendimiento del club y de la aplicación de técnicas avanzadas de Machine Learning</p>
                    <div className="chips">
                      <span className="chip">Python</span>
                    </div>
                  </div>
                </MotionCard>
              </a>

              <a
                href="pdf/Montecarlo.pdf"
                download="Simulacion-Montecarlo.pdf"
                className="card-link"
                aria-label="Descargar PDF: Simulación de Montecarlo"
              >
                <MotionCard>
                  <div className="project-media" role="img" aria-label="Simulación de Montecarlo: Manchester City vs Chelsea">
                    <Image
                      src="/img/projects/Montecarlo.png"
                      alt="Vista previa de la simulación de Montecarlo"
                      fill
                      priority={false}
                      sizes="(max-width: 980px) 100vw, 220px"
                      className="media-img"
                    />
                  </div>
                  <div className="project-content">
                    <h4>Simulación de Montecarlo: Manchester City vs Chelsea</h4>
                    <p className="muted">Pipeline reproducible: lectura de datos, simulación de 1.000 partidos y análisis de resultado/xPoints.</p>
                    <div className="chips">
                      <span className="chip">R</span>
                      <span className="chip">dplyr</span>
                      <span className="chip">ggplot2</span>
                      <span className="chip">stats</span>
                    </div>
                  </div>
                </MotionCard>
              </a>

              <a
                href="pdf/EDA_PCA.pdf"
                download="EDA_PCA.pdf"
                className="card-link"
                aria-label="Descargar PDF: EDA y PCA para defensas de LaLiga"
              >
                <MotionCard>
                  <div className="project-media" role="img" aria-label="EDA y PCA para defensas de LaLiga">
                    <Image
                      src="/img/projects/eda.png"
                      alt="Vista previa del gráfico"
                      fill
                      priority={false}
                      sizes="(max-width: 980px) 100vw, 220px"
                      className="media-img"
                    />
                  </div>
                  <div className="project-content">
                    <h4>EDA y PCA para defensas de LaLiga</h4>
                    <p>Selección de métricas, normalización y comparacion de perfiles en base a los componentes principales.</p>
                    <div className="chips">
                      <span className="chip">R</span>
                      <span className="chip">EDA</span>
                      <span className="chip">PCA</span>
                    </div>
                  </div>
                </MotionCard>
              </a>

              <a
                href="pdf/Clusterdefensas.pdf"
                download="Cluster_defensas.pdf"
                className="card-link"
                aria-label="Descargar PDF: Clusterización de defensas"
              >
                <MotionCard>
                  <div className="project-media" role="img" aria-label="Clusterización de defensas de LaLiga (K-Means)">
                    <Image
                      src="/img/projects/clusterdefensas.png"
                      alt="Vista previa del gráfico"
                      fill
                      priority={false}
                      sizes="(max-width: 980px) 100vw, 220px"
                      className="media-img"
                    />
                  </div>
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
                </MotionCard>
              </a>

              <a
                href="pdf/PowerBI.pdf"
                download="Dashboard-Sevilla.pdf"
                className="card-link"
                aria-label="Descargar PDF: Rendimiento de jugadores del Sevilla FC"
              >
                <MotionCard>
                  <div className="project-media" role="img" aria-label="Rendimiento de jugadores del Sevilla FC">
                    <Image
                      src="/img/projects/sevilla.jpeg"
                      alt="Vista previa del tablero"
                      fill
                      priority={false}
                      sizes="(max-width: 980px) 100vw, 220px"
                      className="media-img"
                    />
                  </div>
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
                </MotionCard>
              </a>

              <a
                href="pdf/Tableau.pdf"
                download="Dashboard-Centrales.pdf"
                className="card-link"
                aria-label="Descargar PDF: Salida de balón de los centrales de LaLiga"
              >
                <MotionCard>
                  <div className="project-media" role="img" aria-label="Desempeño de los centrales de LaLiga">
                    <Image
                      src="/img/projects/tableau.png"
                      alt="Vista previa del informe"
                      fill
                      priority={false}
                      sizes="(max-width: 980px) 100vw, 220px"
                      className="media-img"
                    />
                  </div>
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
                </MotionCard>
              </a>

              <a
                href="pdf/Informe.pdf"
                download="Informe-Panichelli.pdf"
                className="card-link"
                aria-label="Descargar PDF: Informe de Joaquín Panichelli"
              >
                <MotionCard>
                  <div className="project-media" role="img" aria-label="Informe de Joaquín Panichelli">
                    <Image
                      src="/img/projects/informe.jpeg"
                      alt="Vista previa del informe"
                      fill
                      priority={false}
                      sizes="(max-width: 980px) 100vw, 220px"
                      className="media-img"
                    />
                  </div>
                  <div className="project-content">
                    <h4>Informe de Joaquín Panichelli</h4>
                    <p className="muted">
                      Informe individual de Joaquín Panichelli, delantero del CD Mirandés.
                    </p>
                    <div className="chips">
                      <span className="chip">PowerPoint</span>
                      <span className="chip">Python</span>
                      <span className="chip">SQL Server</span>
                    </div>
                  </div>
                </MotionCard>
              </a>

              <a
                href="pdf/1rfef.pdf"
                download="Delanteros-1RFEF.pdf"
                className="card-link"
                aria-label="Descargar PDF: Análisis de delanteros 1ª RFEF"
              >
                <MotionCard>
                  <div className="project-media" role="img" aria-label="Análisis de los delanteros de 1ª RFEF 2024/2025">
                    <Image
                      src="/img/projects/1rfef.png"
                      alt="Vista previa del informe"
                      fill
                      priority={false}
                      sizes="(max-width: 980px) 100vw, 220px"
                      className="media-img"
                    />
                  </div>
                  <div className="project-content">
                    <h4>Análisis de los delanteros de 1ª RFEF 2024/2025</h4>
                    <p className="muted">
                      Comparación del rendimiento ofensivo del top 20 delanteros de la categoría.
                    </p>
                    <div className="chips">
                      <span className="chip">PowerPoint</span>
                      <span className="chip">Python</span>
                      <span className="chip">SQL Server</span>
                    </div>
                  </div>
                </MotionCard>
              </a>

              <a
                href="https://www.linkedin.com/posts/ruben-barona-alba_an%C3%A1lisis-fc-barcelona-vs-inter-de-mil%C3%A1n-activity-7326169053801201665-XMS8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-FBn4Bd72dnalFmFmiNqFtBFVKYWeY_XM"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                <MotionCard>
                  <div className="project-media" role="img" aria-label="Informe del FC Barcelona: estructura de pases">
                    <Image
                      src="/img/projects/hansi.jpg"
                      alt="Vista previa del informe del FC Barcelona"
                      fill
                      priority={false}
                      sizes="(max-width: 980px) 100vw, 220px"
                      className="media-img"
                    />
                  </div>
                  <div className="project-content">
                    <h4>Análisis FC Barcelona vs Inter de Milán</h4>
                    <p className="muted">
                      Informe visual con métricas clave del encuentro y grafo de pases del equipo.
                    </p>
                    <div className="chips">
                      <span className="chip">Python</span>
                      <span className="chip">API Rest</span>
                    </div>
                  </div>
                </MotionCard>
              </a>
            </div>
          </Reveal>
        </section>

        {/* CONTACTO */}
        <section style={{ marginTop: 36 }} id="contacto">
          <Reveal>
            <h3 className="section-title">¿Te interesa hablar?</h3>
            <ContactForm />
          </Reveal>
        </section>
      </main>

      <footer>
        © <span>{year}</span> Rubén Barona Alba | Software Engineer @ ICCA | Football Data Analyst
      </footer>
    </>
  );
}
