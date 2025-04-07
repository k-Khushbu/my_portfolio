import { RevealOnScroll } from "../RevealOnScroll";

interface HomeProps {
  theme: string;
}

export const Home: React.FC<HomeProps> = ({ theme }) => {
  // const myName = import.meta.env.VITE_NAME;
  return (
    <section
      id="home"
      className="max-w-5xl mx-auto min-h-screen flex items-center justify-start relative font-montserrat main-content"
    >
      <RevealOnScroll>
        <div className="z-10 px-4">
          <div className="mb-6">
            <span className="font-bold text-2xl">Hi, I'm</span>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right font-barlow">
              Khushbu Katakwar {/* {myName} */}
            </h1>
            <span className="font-medium ">UI Developer | MERN Stack</span>
          </div>
          <p className="text-lg mb-8 max-w-lg mx-auto font-light main-content text-justify">
            I’m a UI developer. I specialize in creating user-focused interfaces
            that seamlessly blend design and functionality. With a detail and a
            passion for delivering intuitive user experiences, I excel at
            transforming design mockups and wireframes into responsive,
            high-performance web applications.
          </p>
          <div className="flex justify-start space-x-4">
            <a
              href="#projects"
              className={`py-3 px-6 rounded font-medium transition relative overflow-hidden ${
                theme === "light"
                  ? "bg-blue-500 hover:bg-[#15202b] text-[#f3ebf6]"
                  : "bg-blue-500 border border-blue-500/50 hover:text-[#15202b] text-[#f3ebf6] hover:bg-[#f3ebf6]"
              } `}
            >
              View Projects
            </a>
            {/* <a
                href="#contact"
                className={`border border-blue-500/50 py-3 px-6 rounded font-medium transition-all duration-200 
              ${
                theme === "light"
                  ? "text-blue-500 hover:bg-[#15202b] hover:text-[#f3ebf6]"
                  : "hover:bg-[#f3ebf6] hover:text-[#15202b] text-[#f3ebf6]"
              }`}
              >
                Contact Me
              </a> */}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
