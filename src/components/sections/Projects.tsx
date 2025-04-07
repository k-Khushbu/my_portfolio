// import { projectsData } from "../../data/projectsData";
import { useSelector } from "react-redux";
import { RevealOnScroll } from "../RevealOnScroll";
import { RootState } from "../../store";
interface ProjectsProps {
  theme: string;
}
export const Projects: React.FC<ProjectsProps> = ({ theme }) => {
  const projectsData = useSelector((state: RootState) => state.projects.projects);
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 font-montserrat main-content"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center font-barlow">
            {" "}
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData?.map((data, index) => (
              <div key={index} className={`p-6 rounded-xl border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ${theme==="light" ? 'border-[#15202b]/10' : 'border-[#f3ebf6]/10'}`}>
                <h3 className="text-xl font-bold mb-2 main-content">
                  {data.title}
                </h3>
                <p className="mb-4">{data.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {data.technologies.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={data.link}
                    target="_blank"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
