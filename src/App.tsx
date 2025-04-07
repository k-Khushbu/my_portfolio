import { createContext, useCallback, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Skills } from "./components/sections/Skills";
import { Home } from "./components/sections/Home";
import { Projects } from "./components/sections/Projects";
import { MobileNavbar } from "./components/MobileNavbar";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`min-h-screen transition-opacity duration-700`} 
        id={theme}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} toggleTheme={toggleTheme} checkedTheme={theme === "dark"} theme={theme} />
        <MobileNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home theme={theme} />
        <Skills theme={theme} />
        <Projects theme={theme} />
      </div>
      {/* <h1 className="font-barlow">Hello Tailwind css </h1>
      <p className="font-montserrat">
        Hello Tailwind cssHello Tailwind cssHello Tailwind cssHello Tailwind
      </p> */}
    </ThemeContext.Provider>
  );
}

export default App;
