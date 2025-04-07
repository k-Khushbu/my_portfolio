import { useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { PiLineVertical } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleTheme: () => void;
  checkedTheme: boolean;
  theme: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  menuOpen,
  setMenuOpen,
  toggleTheme,
  //   checkedTheme,
  theme,
}) => {
  const linkedInLink = "https://www.linkedin.com/in/khushbu-k/";
  const gitHubLink = "https://github.com/k-Khushbu";

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg main-content">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="font-montserrat text-xl font-bold text-white hover:scale-105 transition-all"
          >
            {" "}
            <span
              className={`text-3xl font-bold mb-8 bg-gradient-to-r bg-clip-text text-transparent font-barlow ${
                theme === "light"
                  ? "from-[#15202b] to-cyan-400"
                  : "from-[#f3ebf6] to-cyan-400"
              } `}
            >
              About Me
            </span>{" "}
          </a>
          {/* Mobile view */}
          <div className="flex items-center space-x-4 md:hidden">
            <a href={linkedInLink} target="_blank">
              <FaLinkedin
                className="cursor-pointer hover:scale-110"
                id={theme === "light" ? "text-[#15202b]" : "text-[#f3ebf6]"}
                size={22}
              />
            </a>
            <a href={gitHubLink} target="_blank">
              <FaGithub
                className="cursor-pointer hover:scale-110"
                id={theme === "light" ? "text-[#15202b]" : "text-[#f3ebf6]"}
                size={22}
              />
            </a>
            <button
              className="cursor-pointer"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              <label className="cursor-pointer">
                {theme === "light" ? (
                  <FaMoon
                    id={theme === "light" ? "text-[#15202b]" : "text-[#f3ebf6]"}
                    size={18}
                  />
                ) : (
                  <FaSun
                    id={theme === "light" ? "text-[#15202b]" : "text-[#f3ebf6]"}
                    size={22}
                  />
                )}
              </label>
            </button>
            <PiLineVertical
              id={theme === "light" ? "text-[#15202b]" : "text-[#f3ebf6]"}
              size={22}
            />
            <div
              className="w-7 h-5 relative cursor-pointer z-40"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <FaBars
                className="cursor-pointer transition-all duration-300 hover:scale-110"
                id={theme === "light" ? "text-[#15202b]" : "text-[#f3ebf6]"}
                size={18}
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#skills"
              className={`font-montserrat font-semibold ${
                theme === "light" ? "text-[#15202b]" : "text-[#f3ebf6]"
              } hover:scale-105`}
            >
              Skills
            </a>
            <a
              href="#projects"
              className={`font-montserrat font-semibold ${
                theme === "light" ? "text-[#15202b]" : "text-[#f3ebf6]"
              } hover:scale-105`}
            >
              My Projects
            </a>
            <PiLineVertical size={22} />
            <a href={linkedInLink} target="_blank">
              <FaLinkedin
                size={22}
                className="cursor-pointer hover:scale-110"
                id={theme === "light" ? "text-[#15202b]" : "text-[#f3ebf6]"}
              />
            </a>
            <a href={gitHubLink} target="_blank">
              <FaGithub
                size={22}
                className="cursor-pointer hover:scale-110"
                id={theme === "light" ? "text-[#15202b]" : "text-[#f3ebf6]"}
              />
            </a>

            <button
              className="cursor-pointer hover:scale-110"
              onClick={toggleTheme}
            >
              <label className="cursor-pointer">
                {theme === "light" ? (
                  <FaMoon
                    id={theme === "light" ? "text-[#15202b]" : "text-[#f3ebf6]"}
                    size={18}
                  />
                ) : (
                  <FaSun
                    id={theme === "light" ? "text-[#15202b]" : "text-[#f3ebf6]"}
                    size={22}
                  />
                )}
              </label>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
