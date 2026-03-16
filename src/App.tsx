import React from 'react';

// Image imports
import cashcurveImg from './images/cashcurve.png';
import yumyumImg from './images/yumyum.png';
import profileImg from './images/profile.png';

interface Project {
  title: string;
  role: string;
  description: string;
  deepDive: string;
  techChoices: string;
  tags: string[];
  link?: string;
  image?: string; 
  status: 'Live' | 'In Progress';
}

const projects: Project[] = [
  {
    title: "CashCurve",
    role: "Fullstackutvecklare och Arkitekt",
    description: "En komplett lösning för likviditetsprognoser som jag utvecklade under min tid hos CashCurve.",
    deepDive: "Jag ansvarade för arkitektur, integration av PostgreSQL och visualisering av finansiella data. Den största utmaningen var att hantera stora datamängder i realtid och se till att användargränssnittet förblev snabbt och responsivt.",
    techChoices: "Valet föll på TypeScript för att säkerställa typstabilitet genom hela applikationen. Vi använde Docker för att garantera en enhetlig miljö för både utveckling och produktion, vilket minimerade risken för miljöspecifika buggar.",
    tags: ["TypeScript", "Node.js", "PostgreSQL", "Docker", "React 19"],
    link: "https://cashcurve.se",
    image: cashcurveImg, 
    status: 'Live'
  },
  {
    title: "YumYum",
    role: "Frontendutvecklare",
    description: "En modern plattform för matbeställning med fokus på ett tydligt gränssnitt och smidig hantering av API:er.",
    deepDive: "Här låg fokus på att bygga ett intuitivt flöde för användaren att söka och filtrera recept från externa källor. Utmaningen var att strukturera den asynkrona datan på ett logiskt sätt i applikationen.",
    techChoices: "Jag använde Redux Toolkit för att hantera applikationens globala tillstånd och Sass för att skapa en strukturerad och underhållsvänlig styling av komponenterna.",
    tags: ["React", "Redux Toolkit", "API", "Sass"],
    link: "https://yumyum-two.vercel.app/",
    image: yumyumImg, 
    status: 'Live'
  }
];

const skills = [
  { category: "Frontend", items: ["React 19", "TypeScript", "Tailwind CSS", "Sass", "Recharts"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Zod", "Auth0"] },
  { category: "Verktyg", items: ["Docker", "Git", "GitHub Projects", "Vite"] }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 selection:bg-blue-500/30 font-sans">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] -z-10" />

      <nav className="sticky top-0 z-50 bg-[#020617]/80 backdrop-blur-sm border-b border-slate-900">
        <div className="max-w-6xl mx-auto p-6 flex justify-between items-center">
          <div className="text-white font-bold tracking-widest text-xl italic">LS<span className="text-blue-500">.</span></div>
          <div className="flex gap-8 text-xs uppercase tracking-widest font-bold">
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projekt</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">Erfarenhet</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Kompetens</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Kontakt</a>
          </div>
        </div>
      </nav>

      <header className="max-w-6xl mx-auto px-8 py-24 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-blue-500 font-mono mb-4 tracking-[0.3em] uppercase text-sm font-bold italic">Fullstackutvecklare</h2>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-8 tracking-tighter overflow-visible p-1">
            LUCAS
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 overflow-visible p-1">
              SÖDERLUND
            </span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed border-l-2 border-blue-500/30 pl-6 italic font-medium">
            Jag skapar skalbara webbapplikationer med fokus på TypeScript och säkerhet. Med en bakgrund inom pedagogik är jag van att bryta ner komplexa problem och förklara dem på ett enkelt sätt.
          </p>
        </div>

        <div className="w-64 h-64 md:w-80 md:h-80 relative group">
          <div className="absolute inset-0 bg-blue-500 rounded-3xl rotate-6 -z-10" />
          <div className="w-full h-full bg-slate-800 rounded-3xl overflow-hidden border-2 border-slate-700">
            <img src={profileImg} alt="Lucas Söderlund" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-2xl font-bold text-white mb-16 flex items-center gap-4 uppercase tracking-widest font-mono">
          Utvalda Projekt <span className="h-px flex-1 bg-slate-800"></span>
        </h2>
        
        <div className="space-y-40">
          {projects.map((project, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8 order-2 lg:order-1">
                <div>
                  <div className="text-blue-500 font-mono text-xs mb-2 uppercase tracking-widest">{project.role}</div>
                  <h3 className="text-4xl font-bold text-white tracking-tight">{project.title}</h3>
                </div>
                
                <p className="text-lg text-slate-200 leading-relaxed font-medium italic">
                  {project.description}
                </p>
                
                <div className="space-y-4 border-l border-blue-500/30 pl-6">
                  <h4 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                    Utmaning och Lösning
                  </h4>
                  <p className="text-slate-400 leading-relaxed italic">{project.deepDive}</p>
                </div>

                <div className="space-y-4 border-l border-blue-500/30 pl-6">
                  <h4 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                    Tekniska Val
                  </h4>
                  <p className="text-slate-400 leading-relaxed italic">{project.techChoices}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full uppercase font-bold tracking-tighter">#{tag}</span>
                  ))}
                </div>

                {project.link && (
                  <div className="pt-6">
                    <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-white font-bold hover:text-blue-400 transition-colors group tracking-widest text-xs">
                      BESÖK PROJEKTET LIVE <span className="group-hover:translate-x-2 transition-transform">→</span>
                    </a>
                  </div>
                )}
              </div>

              <div className="relative group overflow-hidden rounded-3xl border border-slate-800 shadow-2xl order-1 lg:order-2">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 italic tracking-tight uppercase">Kompetens och Bakgrund</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed text-sm md:text-base font-medium">
              <p>
                Som utvecklare fokuserar jag på att bygga lösningar som inte bara fungerar rent tekniskt utan också skapar tydligt värde för slutanvändaren. 
                Genom att kombinera en stark teknisk grund med min erfarenhet inom pedagogik och ledarskap har jag en unik förmåga att röra mig mellan komplex kod och mänsklig interaktion.
              </p>
              <p>
                Under min period med <span className="text-blue-400 font-bold italic underline">CashCurve</span> arbetade jag med att ta fram och implementera deras plattform för likviditetsprognoser. 
                Där arbetade jag dagligen i en agil miljö med Docker, avancerad validering av data och PostgreSQL.
              </p>
              <p>
                Jag trivs bäst i sammanhang där jag får ta ansvar för hela flödet, från design av databaser till användarvänliga gränssnitt.
              </p>
            </div>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">🛠️</div>
             <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-[0.2em] text-blue-500 font-sans">
               Profil och Styrkor
             </h3>
             <ul className="space-y-4 text-sm font-medium">
               <li className="flex gap-3">
                 <span className="text-blue-500">▹</span>
                 <span><strong className="text-slate-200 italic font-medium">Lösningsorienterad:</strong> Erfarenhet av att översätta affärskrav till tekniska specifikationer och fungerande produkter.</span>
               </li>
               <li className="flex gap-3">
                 <span className="text-blue-500">▹</span>
                 <span><strong className="text-slate-200 italic font-medium">Säkerhetsmedveten:</strong> Vana att implementera säker autentisering genom Auth0 och robust validering med Zod.</span>
               </li>
               <li className="flex gap-3">
                 <span className="text-blue-500">▹</span>
                 <span><strong className="text-slate-200 italic font-medium">Kommunikativ utvecklare:</strong> Skicklig på att presentera och diskutera tekniska koncept för både kollegor och kunder.</span>
               </li>
             </ul>
          </div>
        </div>
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-8 py-20 bg-slate-900/20 rounded-[3rem] border border-slate-800/50">
        <h2 className="text-2xl font-bold text-white mb-12 text-center underline decoration-blue-500 underline-offset-8 uppercase tracking-widest font-mono">Tekniker</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="text-center">
              <h3 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-6 font-mono">{skillGroup.category}</h3>
              <ul className="space-y-3">
                {skillGroup.items.map(item => (
                  <li key={item} className="text-slate-300 font-medium text-lg hover:text-white transition-colors cursor-default">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-4xl mx-auto px-8 py-32 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase">REDO FÖR NÄSTA UTMANING?</h2>
        <p className="text-slate-400 mb-12 text-lg italic max-w-xl mx-auto font-medium">
          Just nu söker jag nya spännande möjligheter inom systemutveckling.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a href="mailto:Lucas.Soderlund@hotmail.com" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-full font-bold transition-all shadow-lg shadow-blue-600/20 text-xs tracking-[0.2em] font-sans">
            MAILA MIG
          </a>
          <a href="https://www.linkedin.com/in/lucas-s%C3%B6derlund-15841a383/" target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-slate-700 text-white px-10 py-5 rounded-full font-bold transition-all text-xs tracking-[0.2em] border border-slate-700 font-sans">
            LINKEDIN
          </a>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto p-8 border-t border-slate-900 text-center text-slate-600 text-[10px] tracking-[0.4em] uppercase font-bold">
        Lucas Söderlund // Fullstackutvecklare // 2026
      </footer>
    </div>
  );
};

export default App;