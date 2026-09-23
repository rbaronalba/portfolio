"use client";
import ThemeToggle from "@/components/ThemeToggle";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import MotionCard from "@/components/MotionCard";
import Link from "next/link";
import { LangToggle, useT } from "@/components/Lang";
import { useState } from "react";

export default function Home() {
  const year = new Date().getFullYear();
  const t = useT();
  const [tab, setTab] = useState<"futbol" | "web">("futbol");

  return (
    <>
      <a className="skip-link" href="#proyectos">{t("Saltar al contenido", "Skip to content")}</a>

      <nav>
        <div className="nav-inner">
          <div className="brand">
            <img src="img/selfie.jpeg" alt="Selfie" className="avatar" />
            <p className="site-title" aria-label="Rubén Barona">Rubén Barona</p>
          </div>

          {/* Toggle accesible sin JS */}
          <input id="nav-toggle" type="checkbox" className="nav-toggle" aria-label={t("Abrir menú", "Open menu")} />
          <label htmlFor="nav-toggle" className="icon-btn hamburger" aria-controls="primary-menu" aria-expanded="false">
            {/* puedes sustituir por un SVG si quieres */}
            ☰
          </label>

          <div id="primary-menu" className="nav-right">
            <Link className="btn" href="#inicio">{t("Inicio", "Home")}</Link>
            <Link className="btn" href="#sobre-mi">{t("Sobre mí", "About me")}</Link>
            <Link className="btn" href="#proyectos">{t("Proyectos", "Projects")}</Link>
            <Link className="btn" href="#contacto">{t("Contacto", "Contact")}</Link>
            <ThemeToggle />
            <LangToggle />
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero" id="inicio">
        <Reveal>
          <section className="hero-inner">
            <div className="headline">
              <h1 className="hero-title">{t("Hola, soy Rubén Barona", "Hi, I'm Rubén Barona")}</h1>
              <a
                className="status-badge"
                href="https://www.linkedin.com/in/ruben-barona-alba/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="badge-dot" aria-hidden="true" />
                <span>{t("Conectemos", "Let's connect")}</span>
              </a>
            </div>

            <p className="hero-desc">
              {t(
                "Transformo el dato en conocimiento útil para la toma de decisiones en el fútbol profesional. Experiencia en análisis, visualización e implementación de soluciones digitales para entornos de scouting y dirección deportiva.",
                "I turn data into useful knowledge for decision-making in professional football. Experienced in analysis, visualization and building digital solutions for scouting and sporting-direction environments."
              )}
            </p>

            <div className="hero-cta">
              <Link className="btn btn-lg" href="#proyectos" prefetch={false}>{t("Ver proyectos", "View projects")}</Link>
              <a
                className="btn btn-ghost btn-lg"
                href={t("cv/CV_RubenBaronaAlba.pdf", "cv/RubenBaronaAlba_CV.pdf")}
                type="application/pdf"
                rel="noopener"
                download
              >
                {t("Descargar CV", "Download CV")}
              </a>
            </div>
          </section>
        </Reveal>
      </header>

      <main className="container">
        <section id="sobre-mi" style={{ marginTop: 36 }}>
          <Reveal>
            <div className="about-grid">
              <div>
                <h3 className="section-title">{t("Sobre mí", "About me")}</h3>
                <article style={{ padding: 0 }}>
                  <p>
                    {t(
                      "Ingeniero informático especializado en desarrollo frontend con Angular y TypeScript, con experiencia construyendo interfaces escalables para aplicaciones de datos en tiempo real. Combino el desarrollo de software con el análisis de datos - completé el Máster en Big Data aplicado al Scouting en Fútbol, donde diseñé un sistema de evaluación táctica procesando datos de eventos y vídeo con Python, R y algoritmos de clustering. Me interesa especialmente la intersección entre frontend engineering y sports tech: construir productos donde el código y los datos aporten valor real. Abierto a oportunidades en desarrollo frontend y análisis de datos en el ámbito del deporte.",
                      "Computer engineer specialized in frontend development with Angular and TypeScript, with experience building scalable interfaces for real-time data applications. I combine software development with data analysis - I completed a Master's Degree in Big Data applied to Football Scouting, where I designed a tactical evaluation system processing event and video data with Python, R and clustering algorithms. I'm especially interested in the intersection of frontend engineering and sports tech: building products where code and data deliver real value. Open to opportunities in frontend development and data analysis in sport."
                    )}
                  </p>
                </article>
              </div>
              <div>
                <h3 className="section-title">{t("Tecnologías", "Tech stack")}</h3>
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
          <h3 className="section-title">{t("Proyectos", "Projects")}</h3>
          <div className="tabs" role="group" aria-label={t("Tipo de proyecto", "Project type")}>
            <button type="button" className={tab === "futbol" ? "btn" : "btn btn-ghost"} aria-pressed={tab === "futbol"} onClick={() => setTab("futbol")}>
              ⚽ {t("Fútbol y datos", "Football & data")}
            </button>
            <button type="button" className={tab === "web" ? "btn" : "btn btn-ghost"} aria-pressed={tab === "web"} onClick={() => setTab("web")}>
              💻 {t("Frontend y web", "Frontend & web")}
            </button>
          </div>
          <p className="muted" style={{ margin: "8px 0 18px" }}>
            {tab === "futbol"
              ? t(
                  "Selección de trabajos representativos. Cada tarjeta enlaza a un PDF o enlace con la tarea.",
                  "A selection of representative work. Each card links to a PDF or a post about the project."
                )
              : t(
                  "Actualmente trabajo como Frontend Engineer en ICCA, desarrollando con Angular y TypeScript la plataforma del Centro de Gestión y Control del Transporte Público de Andalucía. Además, diseño y desarrollo tiendas online para marcas.",
                  "I currently work as a Frontend Engineer at ICCA, building the Andalusia Public Transport Control & Management Center platform with Angular and TypeScript. I also design and build online stores for brands."
                )}
          </p>

          <Reveal delay={0.05}>
            {tab === "web" && (
            <div className="projects-list">
              <a href="https://espaliuheritage.com" target="_blank" rel="noopener noreferrer" className="card-link">
                <MotionCard>
                  <div className="project-media" role="img" aria-label="Espaliú Heritage">
                    <Image
                      src="/img/projects/espaliuheritage.jpg"
                      alt={t("Portada de la web de Espaliú Heritage", "Espaliú Heritage website homepage")}
                      fill
                      priority={false}
                      sizes="(max-width: 980px) 100vw, 220px"
                      className="media-img"
                    />
                  </div>
                  <div className="project-content">
                    <h4>Espaliú Heritage</h4>
                    <p className="muted">{t(
                      "Web y tienda online de aceite de oliva virgen extra de Córdoba, de recolección temprana y producción limitada en Castro del Río. Incluye la historia de la marca, catálogo con compra online, reseñas de clientes y diario.",
                      "Website and online store for an early-harvest, limited-production extra virgin olive oil from Castro del Río, Córdoba. Includes the brand story, a shoppable catalogue, customer reviews and a journal."
                    )}</p>
                    <div className="chips">
                      <span className="chip">WordPress</span>
                      <span className="chip">WooCommerce</span>
                    </div>
                  </div>
                </MotionCard>
              </a>

              <a href="https://aldebarancollection.com" target="_blank" rel="noopener noreferrer" className="card-link">
                <MotionCard>
                  <div className="project-media" role="img" aria-label="Aldebarán Collection">
                    <Image
                      src="/img/projects/aldebarancollection.jpg"
                      alt={t("Portada de la web de Aldebarán Collection", "Aldebarán Collection website homepage")}
                      fill
                      priority={false}
                      sizes="(max-width: 980px) 100vw, 220px"
                      className="media-img"
                    />
                  </div>
                  <div className="project-content">
                    <h4>Aldebarán Collection</h4>
                    <p className="muted">{t(
                      "Tienda online de moda femenina de una marca cordobesa con más de 15 años de trayectoria: catálogo por categorías, novedades y rebajas, cuenta de cliente y checkout.",
                      "Online store for a Córdoba-based women's fashion brand with over 15 years of history: catalogue by category, new arrivals and sales, customer accounts and checkout."
                    )}</p>
                    <div className="chips">
                      <span className="chip">Shopify</span>
                      <span className="chip">E-commerce</span>
                    </div>
                  </div>
                </MotionCard>
              </a>
            </div>
            )}

            {tab === "futbol" && (
            <div className="projects-list">
                            <a href="/pdf/MálagaCF.pdf" target="_blank" rel="noopener noreferrer" className="card-link">
                <MotionCard>
                  <div className="project-media" role="img" aria-label={t("Planificación de la temporada 26/27 del Málaga CF", "Málaga CF 26/27 season planning")}>
                    <Image
                      src="/img/projects/malaga.png"
                      alt={t("Temporada 26/27 Málaga CF", "Málaga CF 26/27 season")}
                      fill
                      priority={false}
                      sizes="(max-width: 980px) 100vw, 220px"
                      className="media-img"
                    />
                  </div>
                  <div className="project-content">
                    <h4>{t("Planificación temporada 26/27 del Málaga CF", "Málaga CF 26/27 season planning")}</h4>
                    <p className="muted">{t(
                      "Sistema de scouting basado en datos que planifica la plantilla del Málaga CF para 26/27. Extrae 119 métricas por jugador de Sofascore y valores de Transfermarkt sobre un mercado de 18 ligas, selecciona los KPIs clave por posición con Boruta y Random Forest, y puntúa el encaje de cada candidato por similitud coseno frente al arquetipo del puesto. El resultado es un plan de altas y bajas con ocho fichajes y un once titular proyectado.",
                      "Data-driven scouting system that plans Málaga CF's 26/27 squad. It extracts 119 per-player metrics from Sofascore and Transfermarkt values across an 18-league market, selects the key KPIs per position with Boruta and Random Forest, and scores each candidate's fit by cosine similarity against the positional archetype. The result is an ins-and-outs plan with eight signings and a projected starting XI."
                    )}</p>
                    <div className="chips">
                      <span className="chip">Python</span>
                      <span className="chip">Sofascore API</span>
                    </div>
                  </div>
                </MotionCard>
              </a>

              <a href="https://www.linkedin.com/posts/ruben-barona-alba_sisepuede-dataengineering-footballanalytics-activity-7440683801825103872-zjiS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-FBn4Bd72dnalFmFmiNqFtBFVKYWeY_XM" target="_blank" rel="noopener noreferrer" className="card-link">
                <MotionCard>
                  <div className="project-media" role="img" aria-label={t("Análisis del Córdoba CF: simulación Monte Carlo de clasificación", "Córdoba CF analysis: Monte Carlo league table simulation")}>
                    <Image
                      src="/img/projects/cordoba.png"
                      alt={t("Dashboard de análisis del Córdoba CF", "Córdoba CF analysis dashboard")}
                      fill
                      priority={false}
                      sizes="(max-width: 980px) 100vw, 220px"
                      className="media-img"
                    />
                  </div>
                  <div className="project-content">
                    <h4>{t("Análisis de temporada del Córdoba CF", "Córdoba CF season analysis")}</h4>
                    <p className="muted">{t(
                      "Pipeline que extrae +150 métricas de Sofascore jornada a jornada y las vuelca en un dashboard interactivo con tres vistas: KPIs de temporada, identidad táctica (radar, análisis por líneas y acciones defensivas) y comparativa Córdoba vs Liga. Incluye una simulación Monte Carlo de 100.000 escenarios con distribución de Poisson para proyectar la clasificación final.",
                      "Pipeline that extracts 150+ Sofascore metrics matchday by matchday and feeds them into an interactive dashboard with three views: season KPIs, tactical identity (radar, line-by-line analysis and defensive actions) and Córdoba vs league comparison. Includes a 100,000-scenario Monte Carlo simulation with a Poisson distribution to project the final standings."
                    )}</p>
                    <div className="chips">
                      <span className="chip">Python</span>
                      <span className="chip">HTML</span>
                      <span className="chip">CSS</span>
                      <span className="chip">JS</span>
                      <span className="chip">Sofascore API</span>
                    </div>
                  </div>
                </MotionCard>
              </a>

              <a href="https://www.linkedin.com/posts/ruben-barona-alba_tras-varios-meses-de-trabajo-y-aprendizaje-activity-7375892886506176512-oCZD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-FBn4Bd72dnalFmFmiNqFtBFVKYWeY_XM" target="_blank" rel="noopener noreferrer" className="card-link">
                <MotionCard>
                  <div className="project-media" role="img" aria-label={t("Sistema de scouting inteligente", "Intelligent scouting system")}>
                    <Image
                      src="/img/projects/tfm.png"
                      alt={t("Vista previa del sistema de scouting", "Scouting system preview")}
                      fill
                      priority={false}
                      sizes="(max-width: 980px) 100vw, 220px"
                      className="media-img"
                    />
                  </div>
                  <div className="project-content">
                    <h4>{t(
                      "Sistema de scouting inteligente para el RC Celta: evaluación de fichajes según el perfil táctico",
                      "Intelligent scouting system for RC Celta: evaluating signings by tactical profile"
                    )}</h4>
                    <p className="muted">{t(
                      "Diseño y desarrollo de una herramienta automatizada y escalable que evalúa el grado de adecuación táctica de jugadores externos al Real Club Celta de Vigo según su modelo de juego, a partir de un análisis exhaustivo de datos de rendimiento del club y de la aplicación de técnicas avanzadas de Machine Learning",
                      "Design and development of an automated, scalable tool that evaluates how well external players fit Real Club Celta de Vigo's playing model, based on an in-depth analysis of the club's performance data and advanced Machine Learning techniques."
                    )}</p>
                    <div className="chips">
                      <span className="chip">Python</span>
                    </div>
                  </div>
                </MotionCard>
              </a>

              <a
                href="/pdf/Montecarlo.pdf"
                download="Simulacion-Montecarlo.pdf"
                className="card-link"
                aria-label={t("Descargar PDF: Simulación de Montecarlo", "Download PDF: Monte Carlo simulation")}
              >
                <MotionCard>
                  <div className="project-media" role="img" aria-label={t("Simulación de Montecarlo: Manchester City vs Chelsea", "Monte Carlo simulation: Manchester City vs Chelsea")}>
                    <Image
                      src="/img/projects/Montecarlo.png"
                      alt={t("Vista previa de la simulación de Montecarlo", "Monte Carlo simulation preview")}
                      fill
                      priority={false}
                      sizes="(max-width: 980px) 100vw, 220px"
                      className="media-img"
                    />
                  </div>
                  <div className="project-content">
                    <h4>{t("Simulación de Montecarlo: Manchester City vs Chelsea", "Monte Carlo simulation: Manchester City vs Chelsea")}</h4>
                    <p className="muted">{t(
                      "Pipeline reproducible: lectura de datos, simulación de 1.000 partidos y análisis de resultado/xPoints.",
                      "Reproducible pipeline: data loading, simulation of 1,000 matches and result/xPoints analysis."
                    )}</p>
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
                href="/pdf/EDA_PCA.pdf"
                download="EDA_PCA.pdf"
                className="card-link"
                aria-label={t("Descargar PDF: EDA y PCA para defensas de LaLiga", "Download PDF: EDA and PCA for LaLiga defenders")}
              >
                <MotionCard>
                  <div className="project-media" role="img" aria-label={t("EDA y PCA para defensas de LaLiga", "EDA and PCA for LaLiga defenders")}>
                    <Image
                      src="/img/projects/eda.png"
                      alt={t("Vista previa del gráfico", "Chart preview")}
                      fill
                      priority={false}
                      sizes="(max-width: 980px) 100vw, 220px"
                      className="media-img"
                    />
                  </div>
                  <div className="project-content">
                    <h4>{t("EDA y PCA para defensas de LaLiga", "EDA and PCA for LaLiga defenders")}</h4>
                    <p>{t(
                      "Selección de métricas, normalización y comparacion de perfiles en base a los componentes principales.",
                      "Metric selection, normalization and profile comparison based on principal components."
                    )}</p>
                    <div className="chips">
                      <span className="chip">R</span>
                      <span className="chip">EDA</span>
                      <span className="chip">PCA</span>
                    </div>
                  </div>
                </MotionCard>
              </a>

              <a
                href="/pdf/Clusterdefensas.pdf"
                download="Cluster_defensas.pdf"
                className="card-link"
                aria-label={t("Descargar PDF: Clusterización de defensas", "Download PDF: Defender clustering")}
              >
                <MotionCard>
                  <div className="project-media" role="img" aria-label={t("Clusterización de defensas de LaLiga (K-Means)", "LaLiga defender clustering (K-Means)")}>
                    <Image
                      src="/img/projects/clusterdefensas.png"
                      alt={t("Vista previa del gráfico", "Chart preview")}
                      fill
                      priority={false}
                      sizes="(max-width: 980px) 100vw, 220px"
                      className="media-img"
                    />
                  </div>
                  <div className="project-content">
                    <h4>{t("Clusterización de defensas (LaLiga) con K-Means", "LaLiga defender clustering with K-Means")}</h4>
                    <p className="muted">
                      {t(
                        "EDA, normalización Min-Max, método del codo y K-Means con visualización de clústeres.",
                        "EDA, Min-Max normalization, elbow method and K-Means with cluster visualization."
                      )}
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
                href="/pdf/PowerBI.pdf"
                download="Dashboard-Sevilla.pdf"
                className="card-link"
                aria-label={t("Descargar PDF: Rendimiento de jugadores del Sevilla FC", "Download PDF: Sevilla FC player performance")}
              >
                <MotionCard>
                  <div className="project-media" role="img" aria-label={t("Rendimiento de jugadores del Sevilla FC", "Sevilla FC player performance")}>
                    <Image
                      src="/img/projects/sevilla.jpeg"
                      alt={t("Vista previa del tablero", "Dashboard preview")}
                      fill
                      priority={false}
                      sizes="(max-width: 980px) 100vw, 220px"
                      className="media-img"
                    />
                  </div>
                  <div className="project-content">
                    <h4>{t("Rendimiento de jugadores del Sevilla FC", "Sevilla FC player performance")}</h4>
                    <p className="muted">
                      {t(
                        "Cuadro de mandos que compara los mediocentros defensivos y delanteros centro en sus distintas fases del juego en Power BI.",
                        "Power BI dashboard comparing defensive midfielders and centre-forwards across the different phases of play."
                      )}
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
                href="/pdf/Tableau.pdf"
                download="Dashboard-Centrales.pdf"
                className="card-link"
                aria-label={t("Descargar PDF: Salida de balón de los centrales de LaLiga", "Download PDF: LaLiga centre-backs' ball progression")}
              >
                <MotionCard>
                  <div className="project-media" role="img" aria-label={t("Desempeño de los centrales de LaLiga", "LaLiga centre-back performance")}>
                    <Image
                      src="/img/projects/tableau.png"
                      alt={t("Vista previa del informe", "Report preview")}
                      fill
                      priority={false}
                      sizes="(max-width: 980px) 100vw, 220px"
                      className="media-img"
                    />
                  </div>
                  <div className="project-content">
                    <h4>{t("Desempeño de los centrales de LaLiga", "LaLiga centre-back performance")}</h4>
                    <p className="muted">
                      {t(
                        "Cuadro de mandos que compara la salida de balón de los centrales de LaLiga en Tableau.",
                        "Tableau dashboard comparing the build-up play of LaLiga centre-backs."
                      )}
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
                href="/pdf/Informe.pdf"
                download="Informe-Panichelli.pdf"
                className="card-link"
                aria-label={t("Descargar PDF: Informe de Joaquín Panichelli", "Download PDF: Joaquín Panichelli report")}
              >
                <MotionCard>
                  <div className="project-media" role="img" aria-label={t("Informe de Joaquín Panichelli", "Joaquín Panichelli report")}>
                    <Image
                      src="/img/projects/informe.jpeg"
                      alt={t("Vista previa del informe", "Report preview")}
                      fill
                      priority={false}
                      sizes="(max-width: 980px) 100vw, 220px"
                      className="media-img"
                    />
                  </div>
                  <div className="project-content">
                    <h4>{t("Informe de Joaquín Panichelli", "Joaquín Panichelli report")}</h4>
                    <p className="muted">
                      {t(
                        "Informe individual de Joaquín Panichelli, delantero del CD Mirandés.",
                        "Individual report on Joaquín Panichelli, CD Mirandés striker."
                      )}
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
                href="/pdf/1rfef.pdf"
                download="Delanteros-1RFEF.pdf"
                className="card-link"
                aria-label={t("Descargar PDF: Análisis de delanteros 1ª RFEF", "Download PDF: Primera RFEF strikers analysis")}
              >
                <MotionCard>
                  <div className="project-media" role="img" aria-label={t("Análisis de los delanteros de 1ª RFEF 2024/2025", "Primera RFEF 2024/2025 strikers analysis")}>
                    <Image
                      src="/img/projects/1rfef.png"
                      alt={t("Vista previa del informe", "Report preview")}
                      fill
                      priority={false}
                      sizes="(max-width: 980px) 100vw, 220px"
                      className="media-img"
                    />
                  </div>
                  <div className="project-content">
                    <h4>{t("Análisis de los delanteros de 1ª RFEF 2024/2025", "Primera RFEF 2024/2025 strikers analysis")}</h4>
                    <p className="muted">
                      {t(
                        "Comparación del rendimiento ofensivo del top 20 delanteros de la categoría.",
                        "Comparison of the attacking performance of the league's top 20 strikers."
                      )}
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
                  <div className="project-media" role="img" aria-label={t("Informe del FC Barcelona: estructura de pases", "FC Barcelona report: passing structure")}>
                    <Image
                      src="/img/projects/hansi.jpg"
                      alt={t("Vista previa del informe del FC Barcelona", "FC Barcelona report preview")}
                      fill
                      priority={false}
                      sizes="(max-width: 980px) 100vw, 220px"
                      className="media-img"
                    />
                  </div>
                  <div className="project-content">
                    <h4>{t("Análisis FC Barcelona vs Inter de Milán", "FC Barcelona vs Inter Milan analysis")}</h4>
                    <p className="muted">
                      {t(
                        "Informe visual con métricas clave del encuentro y grafo de pases del equipo.",
                        "Visual report with the match's key metrics and the team's passing network."
                      )}
                    </p>
                    <div className="chips">
                      <span className="chip">Python</span>
                      <span className="chip">API Rest</span>
                    </div>
                  </div>
                </MotionCard>
              </a>
            </div>
            )}
          </Reveal>
        </section>

        {/* CONTACTO */}
        <section style={{ marginTop: 36 }} id="contacto">
          <Reveal>
            <h3 className="section-title">{t("¿Te interesa hablar?", "Want to talk?")}</h3>
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
