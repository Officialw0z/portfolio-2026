import React from 'react';

// Image imports - ensure paths are correct
import cashcurveImg from './images/cashcurve.png';
import yumyumImg from './images/yumyum.png';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string; 
  status: 'Live' | 'In Progress';
}

const projects: Project[] = [
  {
    title: "CashCurve",
    description: "Fullstack likviditetsprognos byggd under LIA. Hanterar komplex finansiell data med Recharts och Docker-backend.",
    tags: ["TypeScript", "Node.js", "PostgreSQL", "Docker", "React 19"],
    link: "https://cashcurve.se",
    image: cashcurveImg, 
    status: 'Live'
  },
  {
    title: "YumYum",
    description: "Modern matbeställningsapp som använder externa API:er för recept och smidig state-hantering.",
    tags: ["React", "API", "TypeScript", "Tailwind"],
    link: "https://yumyum-two.vercel.app/",
    image: yumyumImg, 
    status: 'Live'
  },
  {
    title: "Jonkens Kaningård",
    description: "Kommande Fullstack-plattform med blogg och e-handelsfunktioner för kaninuppfödning.",
    tags: ["Next.js", "Fullstack", "Prisma", "Tailwind"],
    status: 'In Progress'
  }
];

const skills = [
  { category: "Frontend", items: ["React 19", "TypeScript", "Tailwind CSS", "TanStack Query", "Recharts"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Zod", "Auth0"] },
  { category: "DevOps & Tools", items: ["Docker", "Git", "GitHub Projects (Agile)", "Vite"] }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 selection:bg-blue-500/30 font-sans">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] -z-10" />

      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-[#020617]/80 backdrop-blur-sm border-b border-slate-900">
        <div className="max-w-6xl mx-auto p-6 flex justify-between items-center">
          <div className="text-white font-bold tracking-widest text-xl italic">LS<span className="text-blue-500">.</span></div>
          <div className="flex gap-8 text-xs uppercase tracking-widest font-bold">
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projekt</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">Om</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Kompetens</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Kontakt</a>
          </div>
        </div>
      </nav>

      <header className="max-w-6xl mx-auto px-8 py-24">
        <h2 className="text-blue-500 font-mono mb-4 tracking-[0.3em] uppercase text-sm font-bold">Fullstack Developer // Junior</h2>
        
        <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-8 tracking-tighter overflow-visible p-1">
          LUCAS
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 overflow-visible p-1">
            SÖDERLUND
          </span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed border-l-2 border-blue-500/30 pl-6">
          Jag bygger skalbara webbapplikationer med fokus på TypeScript och säkerhet. 
          Med en bakgrund inom pedagogik är jag van att bryta ner komplexa problem och förklara dem på ett enkelt sätt.
        </p>
      </header>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-2xl font-bold text-white mb-12 flex items-center gap-4">
          Utvalda Projekt <span className="h-px flex-1 bg-slate-800"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl hover:bg-slate-900/60 transition-all group relative overflow-hidden flex flex-col">
              
              <div className="relative mb-8 rounded-2xl overflow-hidden aspect-video border border-slate-800 group-hover:border-blue-500/30 transition-colors">
                {project.image ? (
                   <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                ) : (
                  <div className="w-full h-full bg-slate-800 flex flex-col items-center justify-center p-6 text-center">
                    <span className="text-5xl mb-3 opacity-30">🐰</span>
                    <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">Utveckling pågår</p>
                  </div>
                )}
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              </div>

              <div className="flex justify-between items-start mb-6">
                <div className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter ${project.status === 'Live' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'}`}>
                  {project.status}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed min-h-[60px]">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono text-slate-500 bg-slate-800/50 px-2 py-1 rounded">#{tag}</span>
                ))}
              </div>
              
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="mt-auto text-white text-sm font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  VISA LIVE <span className="text-blue-500">→</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* About Section - NEW */}
      <section id="about" className="max-w-6xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 italic">Från pedagogik till produktion</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed text-sm md:text-base">
              <p>
                Med en bakgrund inom förskola och skola har jag med mig en unik uppsättning verktyg in i IT-världen. 
                Jag är van vid att leda grupper, hantera snabba förändringar och – kanske viktigast av allt – kommunicera 
                tydligt med människor.
              </p>
              <p>
                Under min LIA på ett nystartat finansbolag fick jag förtroendet att bygga <span className="text-blue-400 font-bold italic underline">CashCurve</span> från grunden. 
                Det gav mig ovärderlig erfarenhet av att arbeta agilt via GitHub Projects, hantera Docker-miljöer 
                och integrera säkra autentiseringslösningar. 
              </p>
              <p>
                Att sitta i direktkontakt med kunden och översätta affärsbehov till teknisk MVP är där jag trivs som bäst. 
                Jag ser mig själv som en brygga mellan kod och användarnytta.
              </p>
            </div>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">💡</div>
             <h3 className="text-white font-bold mb-4 flex items-center gap-2">
               Varför anlita mig?
             </h3>
             <ul className="space-y-4 text-sm">
               <li className="flex gap-3">
                 <span className="text-blue-500">▹</span>
                 <span><strong className="text-slate-200 italic font-medium">Självgående & Initiativrik:</strong> Van vid distansarbete och att driva sprintar framåt på eget ansvar.</span>
               </li>
               <li className="flex gap-3">
                 <span className="text-blue-500">▹</span>
                 <span><strong className="text-slate-200 italic font-medium">Säkerhetsfokus:</strong> Erfarenhet av strikt datavalidering, rate-limiting och Auth0.</span>
               </li>
               <li className="flex gap-3">
                 <span className="text-blue-500">▹</span>
                 <span><strong className="text-slate-200 italic font-medium">Teamspelare:</strong> Min pedagogiska bakgrund gör mig till en lyhörd och hjälpsam kollega.</span>
               </li>
             </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-8 py-20 bg-slate-900/20 rounded-[3rem] border border-slate-800/50">
        <h2 className="text-2xl font-bold text-white mb-12 text-center underline decoration-blue-500 underline-offset-8">Teknisk Kompetens</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="text-center">
              <h3 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-6">{skillGroup.category}</h3>
              <ul className="space-y-3">
                {skillGroup.items.map(item => (
                  <li key={item} className="text-slate-300 font-medium text-lg">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-8 py-32 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Redo för nästa projekt?</h2>
        <p className="text-slate-400 mb-12 text-lg italic">
          Jag tar examen som Fullstack-utvecklare i sommar och är redo för nya utmaningar som IT-konsult. 
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="mailto:Lucas.Soderlund@hotmail.com" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-blue-600/20 text-sm tracking-widest">
            MAILA MIG
          </a>
          <a href="https://www.linkedin.com/in/lucas-s%C3%B6derlund-15841a383/" target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-full font-bold transition-all text-sm tracking-widest">
            LINKEDIN
          </a>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto p-8 border-t border-slate-900 text-center text-slate-600 text-[10px] tracking-[0.3em] uppercase font-bold">
        Lucas Söderlund // 2026 // Norberg
      </footer>
    </div>
  );
};

export default App;