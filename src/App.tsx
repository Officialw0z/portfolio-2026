import React, { useState } from "react";
import AnimatedBackground from "./AnimatedBackground";

// Image imports
import cashcurveImg from "./images/cashcurve.png";
import yumyumImg from "./images/yumyum.png";
import profileImg from "./images/profile.png";
import jonkenskaningardImg from "./images/jonkenskaningard.png";

interface Project {
  title: string;
  role: string;
  description: string;
  deepDive: string;
  techChoices: string;
  tags: string[];
  link?: string;
  image?: string;
  status: "Live" | "In Progress";
  imageClass?: string;
}

const projects: Project[] = [
  {
    title: "CashCurve",
    role: "Fullstackutvecklare och Arkitekt",
    description:
      "En komplett lösning för likviditetsprognoser som jag utvecklade under min tid hos CashCurve.",
    deepDive:
      "Jag ansvarade för arkitektur, integration av PostgreSQL och visualisering av finansiella data. Den största utmaningen var att hantera stora datamängder i realtid och se till att användargränssnittet förblev snabbt och responsivt.",
    techChoices:
      "Valet föll på TypeScript för att säkerställa typstabilitet genom hela applikationen. Vi använde Docker för att garantera en enhetlig miljö för både utveckling och produktion, vilket minimerade risken för miljöspecifika buggar.",
    tags: ["TypeScript", "Node.js", "PostgreSQL", "Docker", "React 19"],
    link: "https://cashcurve.se",
    image: cashcurveImg,
    status: "Live",
    imageClass: "aspect-video object-cover",
  },
  {
    title: "Jonkens Kaningård",
    role: "Fullstackutvecklare",
    description:
      "En skräddarsydd fullstack-applikation och e-handel för en nischad marknad inom kaninuppfödning.",
    deepDive:
      "Byggde en säker backend från grunden med Node.js och Express, komplett med hantering av sessioner, bildhantering via Multer och e-postintegration. Frontend hämtar och cachar data sömlöst med React Query.",
    techChoices:
      "Valde en renodlad Express-backend och direkt integration mot PostgreSQL för full kontroll över databasfrågor och prestanda. Klienten är byggd med React, Vite och Tailwind CSS, med driftsättning via Railway.",
    tags: ["React", "Express", "PostgreSQL", "Tailwind CSS", "Railway"],
    link: "https://jonkenskaningard.se",
    image: jonkenskaningardImg,
    status: "Live",
    imageClass: "aspect-video object-cover object-top",
  },
  {
    title: "YumYum",
    role: "Frontendutvecklare",
    description:
      "En modern plattform för matbeställning med fokus på ett tydligt gränssnitt och smidig hantering av API:er.",
    deepDive:
      "Här låg fokus på att bygga ett intuitivt flöde för användaren att söka och filtrera recept från externa källor. Utmaningen var att strukturera den asynkrona datan på ett logiskt sätt i applikationen.",
    techChoices:
      "Jag använde Redux Toolkit för att hantera applikationens globala tillstånd och Sass för att skapa en strukturerad och underhållsvänlig styling av komponenterna.",
    tags: ["React", "Redux Toolkit", "API", "Sass"],
    link: "https://yumyum-two.vercel.app/",
    image: yumyumImg,
    status: "Live",
    imageClass: "h-[400px] w-full object-cover object-top",
  },
];

const skills = [
  {
    category: "Frontend",
    items: ["React 19", "TypeScript", "Tailwind CSS", "Sass", "Recharts"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "Zod", "Auth0"],
  },
  { category: "Verktyg", items: ["Docker", "Git", "GitHub Projects", "Vite"] },
];

const App: React.FC = () => {
  const [isLightningEnabled, setIsLightningEnabled] = useState(false);

  return (
    <div className="min-h-screen bg-transparent text-neutral-300 selection:bg-orange-500/30 font-sans scroll-smooth relative">
      <AnimatedBackground enabled={isLightningEnabled} />

      <nav className="sticky top-0 z-50 bg-neutral-950/70 backdrop-blur-md border-b border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.1)] relative z-nav">
        <div className="max-w-6xl mx-auto p-6 flex justify-between items-center relative z-nav-content">
          <div className="text-white font-bold tracking-widest text-xl italic drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] relative z-logo">
            LS
            <span className="text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]">
              .
            </span>
          </div>

          <div className="flex items-center gap-8 relative z-nav-links">
            <div className="flex gap-8 text-xs uppercase tracking-widest font-bold relative z-links-container">
              <a
                href="#projects"
                className="hover:text-orange-400 hover:drop-shadow-[0_0_5px_rgba(249,115,22,0.6)] transition-all relative z-link-projects"
              >
                Projekt
              </a>
              <a
                href="#about"
                className="hover:text-orange-400 hover:drop-shadow-[0_0_5px_rgba(249,115,22,0.6)] transition-all relative z-link-about"
              >
                Erfarenhet
              </a>
              <a
                href="#skills"
                className="hover:text-orange-400 hover:drop-shadow-[0_0_5px_rgba(249,115,22,0.6)] transition-all relative z-link-skills"
              >
                Kompetens
              </a>
              <a
                href="#contact"
                className="hover:text-orange-400 hover:drop-shadow-[0_0_5px_rgba(249,115,22,0.6)] transition-all relative z-link-contact"
              >
                Kontakt
              </a>
            </div>

            <button
              onClick={() => setIsLightningEnabled(!isLightningEnabled)}
              title={
                isLightningEnabled
                  ? "Stäng av blixt-effekt"
                  : "Slå på blixt-effekt"
              }
              className="group relative z-lightning-toggle p-2 rounded-full transition-colors hover:bg-neutral-800 cursor-pointer"
            >
              {isLightningEnabled ? (
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-none stroke-[#FF6900] stroke-2 drop-shadow-[0_0_8px_rgba(255,105,0,0.8)]"
                >
                  <path
                    d="M13 2 L3 14 L12 14 L11 22 L21 10 L12 10 L13 2Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-none stroke-neutral-600 stroke-2"
                >
                  <path
                    d="M13 2 L3 14 L12 14 L11 22 L21 10 L12 10 L13 2Z"
                    strokeDasharray="4 4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-8 py-24 flex flex-col md:flex-row items-center gap-12 relative z-hero">
        <div className="flex-1">
          <h2 className="text-orange-500 font-mono mb-4 tracking-[0.3em] uppercase text-sm font-bold italic drop-shadow-[0_0_8px_rgba(249,115,22,0.5)] relative z-title-prefix">
            Fullstackutvecklare
          </h2>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-8 tracking-tighter overflow-visible p-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] relative z-title">
            LUCAS
            <span className="block text-[#FF6900] drop-shadow-[0_0_10px_rgba(255,105,0,0.6)] overflow-visible p-1 relative z-lastname">
              SÖDERLUND
            </span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-neutral-400 leading-relaxed border-l-2 border-orange-500/30 pl-6 italic font-medium mb-8 relative z-tagline">
            Jag skapar skalbara webbapplikationer med fokus på TypeScript och
            säkerhet. Med en bakgrund inom pedagogik är jag van att bryta ner
            komplexa problem och förklara dem på ett enkelt sätt.
          </p>
          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-neutral-900/80 hover:bg-orange-500 hover:text-white text-orange-400 border border-orange-500/50 px-6 py-3 rounded-full font-bold transition-all text-xs tracking-[0.2em] font-sans hover:shadow-[0_0_20px_rgba(249,115,22,0.6)] relative z-cv-button"
          >
            LADDA NER CV (PDF)
          </a>
        </div>

        <div className="w-64 h-64 md:w-80 md:h-80 relative group z-profile-container">
          <div className="absolute inset-0 bg-orange-500 rounded-3xl rotate-6 -z-10 shadow-[0_0_30px_rgba(249,115,22,0.4)] relative z-profile-bg" />
          <div className="w-full h-full bg-neutral-900 rounded-3xl overflow-hidden border-2 border-orange-500/30 relative z-profile-wrapper">
            <img
              src={profileImg}
              alt="Lucas Söderlund"
              className="w-full h-full object-cover relative z-profile-image"
            />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-main">
        {/* Projects Section */}
        <section
          id="projects"
          className="scroll-mt-28 max-w-6xl mx-auto px-8 py-20 relative z-projects-section"
        >
          <h2 className="text-2xl font-bold text-white mb-16 flex items-center gap-4 uppercase tracking-widest font-mono drop-shadow-[0_0_5px_rgba(255,255,255,0.3)] relative z-projects-title">
            Utvalda Projekt{" "}
            <span className="h-px flex-1 bg-neutral-800 relative z-projects-line"></span>
          </h2>

          <div className="space-y-40 relative z-projects-list">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-project-item"
              >
                <div className="space-y-8 order-2 lg:order-1 relative z-project-content">
                  <div className="relative z-project-header">
                    <div className="text-[#FF6900] font-mono text-xs mb-2 uppercase tracking-widest drop-shadow-[0_0_5px_rgba(255,105,0,0.5)] relative z-project-role">
                      {project.role}
                    </div>
                    <h3 className="text-4xl font-bold text-white tracking-tight drop-shadow-[0_0_5px_rgba(255,255,255,0.2)] relative z-project-title">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-lg text-neutral-200 leading-relaxed font-medium italic relative z-project-description">
                    {project.description}
                  </p>

                  <div className="space-y-4 bg-neutral-900/40 backdrop-blur-md border-l border-neutral-800 rounded-lg p-6 relative z-project-deepdive">
                    <h4 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2 relative z-deepdive-title">
                      Utmaning och Lösning
                    </h4>
                    <p className="text-neutral-400 leading-relaxed italic relative z-deepdive-text">
                      {project.deepDive}
                    </p>
                  </div>

                  <div className="space-y-4 bg-neutral-900/40 backdrop-blur-md border-l border-neutral-800 rounded-lg p-6 relative z-project-techchoices">
                    <h4 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2 relative z-techchoices-title">
                      Tekniska Val
                    </h4>
                    <p className="text-neutral-400 leading-relaxed italic relative z-techchoices-text">
                      {project.techChoices}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 relative z-project-tags">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-white bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full uppercase font-bold tracking-tighter shadow-[0_0_5px_rgba(255,105,0,0.2)] relative z-tag"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <div className="pt-6 relative z-project-link">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 text-white font-bold hover:text-orange-400 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] transition-all group tracking-widest text-xs relative z-link-text"
                      >
                        BESÖK PROJEKTET LIVE{" "}
                        <span className="group-hover:translate-x-2 transition-transform relative z-link-arrow">
                          →
                        </span>
                      </a>
                    </div>
                  )}
                </div>

                <div className="relative group overflow-hidden rounded-3xl border border-orange-500/20 bg-neutral-900/40 backdrop-blur-md shadow-[0_0_20px_rgba(249,115,22,0.1)] group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all duration-500 order-1 lg:order-2 z-project-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`${
                      project.imageClass || "w-full h-auto object-cover"
                    } transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 relative z-project-image`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent pointer-events-none z-image-overlay" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="scroll-mt-28 max-w-6xl mx-auto px-8 py-20 relative z-about-section"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative z-about-content">
            <div className="relative z-about-text-container">
              <h2 className="text-3xl font-bold text-white mb-6 italic tracking-tight uppercase drop-shadow-[0_0_5px_rgba(255,255,255,0.3)] relative z-about-title">
                Kompetens och Bakgrund
              </h2>
              <div className="space-y-4 text-neutral-400 leading-relaxed text-sm md:text-base font-medium relative z-about-paragraphs">
                <p className="relative z-about-paragraph-1">
                  Som utvecklare fokuserar jag på att bygga lösningar som inte
                  bara fungerar rent tekniskt utan också skapar tydligt värde
                  för slutanvändaren. Genom att kombinera en stark teknisk grund
                  med min erfarenhet inom pedagogik och ledarskap har jag en
                  unik förmåga att röra mig mellan komplex kod och mänsklig
                  interaktion.
                </p>
                <p className="relative z-about-paragraph-2">
                  Under min period med{" "}
                  <span className="text-orange-400 font-bold italic underline drop-shadow-[0_0_5px_rgba(249,115,22,0.4)] relative z-cashcurve-highlight">
                    CashCurve
                  </span>{" "}
                  arbetade jag med att ta fram och implementera deras plattform
                  för likviditetsprognoser. Där arbetade jag dagligen i en agil
                  miljö med Docker, avancerad validering av data och PostgreSQL.
                </p>
                <p className="relative z-about-paragraph-3">
                  Jag trivs bäst i sammanhang där jag får ta ansvar för hela
                  flödet, från design av databaser till användarvänliga
                  gränssnitt.
                </p>
              </div>
            </div>

            <div className="bg-neutral-900/40 backdrop-blur-md border-l border-neutral-800 rounded-lg p-6 relative z-strengths-box">
              <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-[0.2em] text-orange-500 font-sans drop-shadow-[0_0_5px_rgba(249,115,22,0.5)] relative z-strengths-title">
                Profil och Styrkor
              </h3>
              <ul className="space-y-6 text-sm font-medium relative z-strengths-list">
                <li className="flex gap-3 relative z-strength-item-1">
                  <span className="text-orange-500 drop-shadow-[0_0_5px_rgba(249,115,22,0.8)] relative z-strength-icon-1 mt-1">
                    ▹
                  </span>
                  <span className="relative z-strength-text-1">
                    <strong className="text-neutral-200 italic font-medium relative z-strength-title-1 block mb-1">
                      Lösningsorienterad:
                    </strong>
                    Erfarenhet av att översätta affärskrav till tekniska
                    specifikationer och fungerande produkter.
                  </span>
                </li>
                <li className="flex gap-3 relative z-strength-item-2">
                  <span className="text-orange-500 drop-shadow-[0_0_5px_rgba(249,115,22,0.8)] relative z-strength-icon-2 mt-1">
                    ▹
                  </span>
                  <span className="relative z-strength-text-2">
                    <strong className="text-neutral-200 italic font-medium relative z-strength-title-2 block mb-1">
                      Säkerhetsmedveten:
                    </strong>
                    Vana att implementera säker autentisering genom Auth0 och
                    robust validering med Zod.
                  </span>
                </li>
                <li className="flex gap-3 relative z-strength-item-3">
                  <span className="text-orange-500 drop-shadow-[0_0_5px_rgba(249,115,22,0.8)] relative z-strength-icon-3 mt-1">
                    ▹
                  </span>
                  <span className="relative z-strength-text-3">
                    <strong className="text-neutral-200 italic font-medium relative z-strength-title-3 block mb-1">
                      Kommunikativ utvecklare:
                    </strong>
                    Skicklig på att presentera och diskutera tekniska koncept
                    för både kollegor och kunder.
                  </span>
                </li>
                <li className="flex gap-3 relative z-strength-item-ui">
                  <span className="text-orange-500 drop-shadow-[0_0_5px_rgba(249,115,22,0.8)] relative z-strength-icon-ui mt-1">
                    ▹
                  </span>
                  <span className="relative z-strength-text-ui">
                    <strong className="text-neutral-200 italic font-medium relative z-strength-title-ui block mb-1">
                      Öga för UI & Interaktion:
                    </strong>
                    Stort intresse för att bygga dynamiska och visuellt
                    tilltalande gränssnitt, med fokus på animationer och en
                    stark användarupplevelse.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="scroll-mt-28 max-w-6xl mx-auto px-8 py-20 bg-neutral-900/20 backdrop-blur-sm rounded-[3rem] border border-orange-500/20 shadow-[0_0_25px_rgba(249,115,22,0.05)] relative z-skills-section"
        >
          <h2 className="text-2xl font-bold text-white mb-12 text-center underline decoration-orange-500 underline-offset-8 uppercase tracking-widest font-mono drop-shadow-[0_0_5px_rgba(255,255,255,0.3)] relative z-skills-title">
            Tekniker
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-skills-grid">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="text-center relative z-skill-group">
                <h3 className="text-orange-400 font-bold uppercase tracking-widest text-xs mb-6 font-mono drop-shadow-[0_0_5px_rgba(249,115,22,0.5)] relative z-skill-category">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3 relative z-skill-list">
                  {skillGroup.items.map((item) => (
                    <li
                      key={item}
                      className="text-neutral-300 font-medium text-lg hover:text-orange-400 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] transition-all cursor-default relative z-skill-item"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-28 max-w-4xl mx-auto px-8 py-32 text-center relative z-contact-section"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] relative z-contact-title">
            REDO FÖR NÄSTA UTMANING!
          </h2>
          <p className="text-neutral-400 mb-12 text-lg italic max-w-xl mx-auto font-medium relative z-contact-text">
            Just nu söker jag nya spännande möjligheter inom systemutveckling.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center relative z-contact-buttons">
            <a
              href="mailto:Lucas.Soderlund@hotmail.com"
              className="bg-orange-600 hover:bg-orange-500 text-white px-10 py-5 rounded-full font-bold transition-all hover:shadow-[0_0_25px_rgba(249,115,22,0.8)] text-xs tracking-[0.2em] font-sans relative z-mail-button"
            >
              MAILA MIG
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-s%C3%B6derlund-15841a383/"
              target="_blank"
              rel="noreferrer"
              className="bg-neutral-900 hover:bg-neutral-800 text-white px-10 py-5 rounded-full font-bold transition-all text-xs tracking-[0.2em] border border-orange-500/30 hover:border-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] font-sans backdrop-blur-md relative z-linkedin-button"
            >
              LINKEDIN
            </a>
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 hover:bg-neutral-800 text-white px-10 py-5 rounded-full font-bold transition-all text-xs tracking-[0.2em] border border-orange-500/30 hover:border-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] font-sans backdrop-blur-md relative z-cv-button-contact"
            >
              CV (PDF)
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto p-8 border-t border-orange-500/20 text-center text-neutral-600 text-[10px] tracking-[0.4em] uppercase font-bold relative z-footer">
          Lucas Söderlund // Fullstackutvecklare // 2026
        </footer>
      </main>
    </div>
  );
};

export default App;
