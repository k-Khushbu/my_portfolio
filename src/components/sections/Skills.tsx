import { RevealOnScroll } from "../RevealOnScroll";

interface SkillsProps {
  theme: string;
}

export const Skills: React.FC<SkillsProps> = ({ theme }) => {
  const frontendSkills = ["React", "Vite", "TypeScript", "TailwindCSS", "Bootstrap"];
  const backendSkills = ["Node.js", "MongoDB", "MySQL"];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20 font-montserrat"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center font-barlow">
            {" "}
            Skills
          </h2>

          <div className={`rounded-xl p-8 border ${theme==="light" ? 'border-[#15202b]/10' : 'border-[#f3ebf6]/10'} hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition`}>
            <p className={`mb-5 font-light main-content ${theme==="light" ? 'text-[#15202b]' : 'text-[#f3ebf6]'} `}>
              Passionate developer with expertise in building dynamic and
              user-friendly web applications and writing clean & maintainable
              code.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 main-content font-barlow">
                  {" "}
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 main-content font-barlow">
                  {" "}
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                      hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
