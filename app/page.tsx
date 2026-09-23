"use client";
import { useState, ReactNode } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import ContactForm from "@/components/ContactForm";
import Comb, { HexRect, NavItem } from "@/components/Comb";
import MorphPanel from "@/components/MorphPanel";
import { LangToggle, useT, useLang } from "@/components/Lang";

type Project = { href: string; download?: string; img: string; title: [string, string]; desc: [string, string]; chips: string[] };

const FOOTBALL: Project[] = [
  {
    href: "/pdf/MálagaCF.pdf",
    img: "/img/projects/malaga.png",
    title: ["Planificación temporada 26/27 del Málaga CF", "Málaga CF 26/27 season planning"],
    desc: [
      "Sistema de scouting basado en datos que planifica la plantilla del Málaga CF para 26/27. Extrae 119 métricas por jugador de Sofascore y valores de Transfermarkt sobre un mercado de 18 ligas, selecciona los KPIs clave por posición con Boruta y Random Forest, y puntúa el encaje de cada candidato por similitud coseno frente al arquetipo del puesto. El resultado es un plan de altas y bajas con ocho fichajes y un once titular proyectado.",
      "Data-driven scouting system that plans Málaga CF's 26/27 squad. It extracts 119 per-player metrics from Sofascore and Transfermarkt values across an 18-league market, selects the key KPIs per position with Boruta and Random Forest, and scores each candidate's fit by cosine similarity against the positional archetype. The result is an ins-and-outs plan with eight signings and a projected starting XI.",
    ],
    chips: ["Python", "Sofascore API"],
  },
  {
    href: "https://www.linkedin.com/posts/ruben-barona-alba_sisepuede-dataengineering-footballanalytics-activity-7440683801825103872-zjiS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-FBn4Bd72dnalFmFmiNqFtBFVKYWeY_XM",
    img: "/img/projects/cordoba.png",
    title: ["Análisis de temporada del Córdoba CF", "Córdoba CF season analysis"],
    desc: [
      "Pipeline que extrae +150 métricas de Sofascore jornada a jornada y las vuelca en un dashboard interactivo con tres vistas: KPIs de temporada, identidad táctica (radar, análisis por líneas y acciones defensivas) y comparativa Córdoba vs Liga. Incluye una simulación Monte Carlo de 100.000 escenarios con distribución de Poisson para proyectar la clasificación final.",
      "Pipeline that extracts 150+ Sofascore metrics matchday by matchday and feeds them into an interactive dashboard with three views: season KPIs, tactical identity (radar, line-by-line analysis and defensive actions) and Córdoba vs league comparison. Includes a 100,000-scenario Monte Carlo simulation with a Poisson distribution to project the final standings.",
    ],
    chips: ["Python", "HTML", "CSS", "JS", "Sofascore API"],
  },
  {
    href: "https://www.linkedin.com/posts/ruben-barona-alba_tras-varios-meses-de-trabajo-y-aprendizaje-activity-7375892886506176512-oCZD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-FBn4Bd72dnalFmFmiNqFtBFVKYWeY_XM",
    img: "/img/projects/tfm.png",
    title: [
      "Sistema de scouting inteligente para el RC Celta: evaluación de fichajes según el perfil táctico",
      "Intelligent scouting system for RC Celta: evaluating signings by tactical profile",
    ],
    desc: [
      "Diseño y desarrollo de una herramienta automatizada y escalable que evalúa el grado de adecuación táctica de jugadores externos al Real Club Celta de Vigo según su modelo de juego, a partir de un análisis exhaustivo de datos de rendimiento del club y de la aplicación de técnicas avanzadas de Machine Learning.",
      "Design and development of an automated, scalable tool that evaluates how well external players fit Real Club Celta de Vigo's playing model, based on an in-depth analysis of the club's performance data and advanced Machine Learning techniques.",
    ],
    chips: ["Python"],
  },
  {
    href: "/pdf/Montecarlo.pdf",
    download: "Simulacion-Montecarlo.pdf",
    img: "/img/projects/Montecarlo.png",
    title: ["Simulación de Montecarlo: Manchester City vs Chelsea", "Monte Carlo simulation: Manchester City vs Chelsea"],
    desc: [
      "Pipeline reproducible: lectura de datos, simulación de 1.000 partidos y análisis de resultado/xPoints.",
      "Reproducible pipeline: data loading, simulation of 1,000 matches and result/xPoints analysis.",
    ],
    chips: ["R", "dplyr", "ggplot2", "stats"],
  },
  {
    href: "/pdf/EDA_PCA.pdf",
    download: "EDA_PCA.pdf",
    img: "/img/projects/eda.png",
    title: ["EDA y PCA para defensas de LaLiga", "EDA and PCA for LaLiga defenders"],
    desc: [
      "Selección de métricas, normalización y comparación de perfiles en base a los componentes principales.",
      "Metric selection, normalization and profile comparison based on principal components.",
    ],
    chips: ["R", "EDA", "PCA"],
  },
  {
    href: "/pdf/Clusterdefensas.pdf",
    download: "Cluster_defensas.pdf",
    img: "/img/projects/clusterdefensas.png",
    title: ["Clusterización de defensas (LaLiga) con K-Means", "LaLiga defender clustering with K-Means"],
    desc: [
      "EDA, normalización Min-Max, método del codo y K-Means con visualización de clústeres.",
      "EDA, Min-Max normalization, elbow method and K-Means with cluster visualization.",
    ],
    chips: ["R", "caret", "factoextra", "kmeans"],
  },
  {
    href: "/pdf/PowerBI.pdf",
    download: "Dashboard-Sevilla.pdf",
    img: "/img/projects/sevilla.jpeg",
    title: ["Rendimiento de jugadores del Sevilla FC", "Sevilla FC player performance"],
    desc: [
      "Cuadro de mandos que compara los mediocentros defensivos y delanteros centro en sus distintas fases del juego en Power BI.",
      "Power BI dashboard comparing defensive midfielders and centre-forwards across the different phases of play.",
    ],
    chips: ["Power BI", "Python", "SQL Server"],
  },
  {
    href: "/pdf/Tableau.pdf",
    download: "Dashboard-Centrales.pdf",
    img: "/img/projects/tableau.png",
    title: ["Desempeño de los centrales de LaLiga", "LaLiga centre-back performance"],
    desc: [
      "Cuadro de mandos que compara la salida de balón de los centrales de LaLiga en Tableau.",
      "Tableau dashboard comparing the build-up play of LaLiga centre-backs.",
    ],
    chips: ["Tableau", "Python", "SQL Server"],
  },
  {
    href: "/pdf/Informe.pdf",
    download: "Informe-Panichelli.pdf",
    img: "/img/projects/informe.jpeg",
    title: ["Informe de Joaquín Panichelli", "Joaquín Panichelli report"],
    desc: [
      "Informe individual de Joaquín Panichelli, delantero del CD Mirandés.",
      "Individual report on Joaquín Panichelli, CD Mirandés striker.",
    ],
    chips: ["PowerPoint", "Python", "SQL Server"],
  },
  {
    href: "/pdf/1rfef.pdf",
    download: "Delanteros-1RFEF.pdf",
    img: "/img/projects/1rfef.png",
    title: ["Análisis de los delanteros de 1ª RFEF 2024/2025", "Primera RFEF 2024/2025 strikers analysis"],
    desc: [
      "Comparación del rendimiento ofensivo del top 20 delanteros de la categoría.",
      "Comparison of the attacking performance of the league's top 20 strikers.",
    ],
    chips: ["PowerPoint", "Python", "SQL Server"],
  },
  {
    href: "https://www.linkedin.com/posts/ruben-barona-alba_an%C3%A1lisis-fc-barcelona-vs-inter-de-mil%C3%A1n-activity-7326169053801201665-XMS8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-FBn4Bd72dnalFmFmiNqFtBFVKYWeY_XM",
    img: "/img/projects/hansi.jpg",
    title: ["Análisis FC Barcelona vs Inter de Milán", "FC Barcelona vs Inter Milan analysis"],
    desc: [
      "Informe visual con métricas clave del encuentro y grafo de pases del equipo.",
      "Visual report with the match's key metrics and the team's passing network.",
    ],
    chips: ["Python", "API Rest"],
  },
];

const WEB: Project[] = [
  {
    href: "https://espaliuheritage.com",
    img: "/img/projects/espaliuheritage.jpg",
    title: ["Espaliú Heritage", "Espaliú Heritage"],
    desc: [
      "Web y tienda online de aceite de oliva virgen extra de Córdoba, de recolección temprana y producción limitada en Castro del Río. Incluye la historia de la marca, catálogo con compra online, reseñas de clientes y diario.",
      "Website and online store for an early-harvest, limited-production extra virgin olive oil from Castro del Río, Córdoba. Includes the brand story, a shoppable catalogue, customer reviews and a journal.",
    ],
    chips: ["WordPress", "WooCommerce"],
  },
  {
    href: "https://aldebarancollection.com",
    img: "/img/projects/aldebarancollection.jpg",
    title: ["Aldebarán Collection", "Aldebarán Collection"],
    desc: [
      "Tienda online de moda femenina de una marca cordobesa con más de 15 años de trayectoria: catálogo por categorías, novedades y rebajas, cuenta de cliente y checkout.",
      "Online store for a Córdoba-based women's fashion brand with over 15 years of history: catalogue by category, new arrivals and sales, customer accounts and checkout.",
    ],
    chips: ["Shopify", "E-commerce"],
  },
];

const STACK: [string, string][] = [
  ["Angular", "angular.svg"], ["React", "react.svg"], ["TypeScript", "typescript.svg"], ["JavaScript", "js.svg"],
  ["HTML", "html.svg"], ["CSS", "css.svg"], ["RxJS", "rxjs.svg"], ["Jest", "jest.svg"], ["C#", "csharp.svg"],
  ["Python", "python.svg"], ["R", "r.svg"], ["SQL Server", "sqlserver.svg"], ["PostgreSQL", "postgresql.svg"],
  ["InfluxDB", "influxdb.svg"], ["Grafana", "grafana.svg"], ["Power BI", "powerbi.png"], ["Tableau", "tableau.svg"],
  ["Wyscout", "wyscout.jpeg"], ["Nacsport", "nacsport.jpeg"], ["WinCC OA", "winccoa.png"], ["Git", "git.svg"],
];

// Iconos de trazo fino (24x24)
const icon = (d: ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);
const ICONS = {
  about: icon(<><circle cx="12" cy="8" r="4" /><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" /></>),
  futbol: icon(<><circle cx="12" cy="12" r="9" /><path d="M12 7.5l4 2.9-1.5 4.7h-5L8 10.4z" /><path d="M12 7.5V3M16 10.4l4.2-1.4M14.5 15.1l2.6 3.7M9.5 15.1l-2.6 3.7M8 10.4L3.8 9" /></>),
  web: icon(<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />),
  contact: icon(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3.5 6.5L12 13l8.5-6.5" /></>),
  linkedin: icon(<><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10.5V17M8 7.5v.01M12 17v-6.5M12 13.5c0-1.7 1.2-3 2.7-3s2.3 1 2.3 2.8V17" /></>),
  cv: icon(<><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M12 11v6M9.5 14.5L12 17l2.5-2.5" /></>),
};

function ProjectList({ items, lang }: { items: Project[]; lang: "es" | "en" }) {
  const k = lang === "en" ? 1 : 0;
  return (
    <div className="plist">
      {items.map((p) => (
        <a key={p.href} className="pitem card-link" href={p.href}
          {...(p.download ? { download: p.download } : { target: "_blank", rel: "noopener noreferrer" })}>
          <img src={p.img} alt="" loading="lazy" />
          <div>
            <h3>{p.title[k]}</h3>
            <p>{p.desc[k]}</p>
            <div className="chips">{p.chips.map((c) => <span key={c} className="chip">{c}</span>)}</div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default function Home() {
  const t = useT();
  const lang = useLang();
  const [open, setOpen] = useState<{ id: string; rect: HexRect } | null>(null);
  const [dim, setDim] = useState(false);

  // Orden del anillo: NE, E, SE, SO, O, NO
  const items: NavItem[] = [
    { id: "futbol", label: t("Fútbol", "Football"), icon: ICONS.futbol },
    { id: "web", label: "Web", icon: ICONS.web },
    { id: "contact", label: t("Contacto", "Contact"), icon: ICONS.contact },
    { id: "linkedin", label: "LinkedIn", icon: ICONS.linkedin, href: "https://www.linkedin.com/in/ruben-barona-alba/" },
    { id: "cv", label: "CV", icon: ICONS.cv, href: t("/cv/CV_RubenBaronaAlba.pdf", "/cv/RubenBaronaAlba_CV.pdf"), download: true },
    { id: "about", label: t("Sobre mí", "About"), icon: ICONS.about },
  ];

  const panels: Record<string, ReactNode> = {
    about: (
      <>
        <h2 id="panel-title">{t("Código, datos y fútbol", "Code, data and football")}</h2>
        <p>{t(
          "Soy ingeniero informático especializado en desarrollo frontend con Angular y TypeScript. Construyo interfaces escalables para aplicaciones de datos en tiempo real.",
          "I'm a computer engineer specialized in frontend development with Angular and TypeScript. I build scalable interfaces for real-time data applications."
        )}</p>
        <p>{t(
          "Combino el desarrollo de software con el análisis de datos: completé el Máster en Big Data aplicado al Scouting en Fútbol, donde diseñé un sistema de evaluación táctica procesando datos de eventos y vídeo con Python, R y algoritmos de clustering.",
          "I combine software development with data analysis: I completed a Master's Degree in Big Data applied to Football Scouting, where I designed a tactical evaluation system processing event and video data with Python, R and clustering algorithms."
        )}</p>
        <p>{t(
          "Me interesa la intersección entre frontend engineering y sports tech: productos donde el código y los datos aporten valor real. Abierto a oportunidades en desarrollo frontend y análisis de datos en el deporte.",
          "I'm drawn to the intersection of frontend engineering and sports tech: products where code and data deliver real value. Open to opportunities in frontend development and sports data analysis."
        )}</p>
        <ul className="tags">{STACK.map(([name, img]) => <li key={name}><img src={`/img/${img}`} alt="" />{name}</li>)}</ul>
      </>
    ),
    futbol: (
      <>
        <h2 id="panel-title">{t("Del dato a la decisión", "From data to decisions")}</h2>
        <p>{t(
          "Transformo el dato en conocimiento útil para la toma de decisiones en el fútbol profesional: análisis, visualización y soluciones digitales para scouting y dirección deportiva. Cada proyecto enlaza a su PDF o publicación.",
          "I turn data into useful knowledge for decision-making in professional football: analysis, visualization and digital solutions for scouting and sporting direction. Each project links to its PDF or post."
        )}</p>
        <ProjectList items={FOOTBALL} lang={lang} />
      </>
    ),
    web: (
      <>
        <h2 id="panel-title">{t("Interfaces que se usan", "Interfaces people use")}</h2>
        <p>{t(
          "Trabajo como Frontend Engineer en ICCA, desarrollando con Angular y TypeScript la plataforma del Centro de Gestión y Control del Transporte Público de Andalucía, incluido el módulo de información al viajero en tiempo real.",
          "I work as a Frontend Engineer at ICCA, building the Andalusia Public Transport Control & Management Center platform with Angular and TypeScript, including the real-time passenger information module."
        )}</p>
        <p>{t("Además, diseño y desarrollo tiendas online para marcas:", "I also design and build online stores for brands:")}</p>
        <ProjectList items={WEB} lang={lang} />
      </>
    ),
    contact: (
      <>
        <h2 id="panel-title">{t("¿Hablamos?", "Let's talk")}</h2>
        <p>{t(
          "Para proyectos web, oportunidades en frontend o análisis de datos en el deporte. También en ",
          "For web projects, frontend roles or sports data analysis. Also at "
        )}<a href="mailto:barona.ruben@gmail.com">barona.ruben@gmail.com</a>.</p>
        <ContactForm />
      </>
    ),
  };

  return (
    <div className="stage">
      <h1 className="sr-only">Rubén Barona Alba. Frontend Engineer & Football Data Analyst</h1>

      <Comb items={items} avatar="/img/selfie.jpeg" dim={dim} hiddenId={open?.id}
        onOpen={(id, rect) => { setOpen({ id, rect }); setDim(true); }} />
      <div className="sweep" aria-hidden="true" />

      <header className="brandblock">
        <p className="brand-name">Rubén <em>Barona</em></p>
      </header>

      <div className="toolbar">
        <ThemeToggle />
        <LangToggle />
      </div>

      <footer className="foot">
        © {new Date().getFullYear()} Rubén Barona Alba · Frontend Engineer · Football Data Analyst
      </footer>
      {open && (
        <MorphPanel rect={open.rect} closeLabel={t("Cerrar", "Close")}
          onClosing={() => setDim(false)}
          onClosed={() => {
            const id = open.id;
            setOpen(null);
            document.querySelector<HTMLElement>(`[data-id="${id}"]`)?.focus();
          }}>
          {panels[open.id]}
        </MorphPanel>
      )}
    </div>
  );
}
