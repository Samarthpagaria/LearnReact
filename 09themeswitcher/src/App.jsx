import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeButton";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkThemeMode = () => {
    setThemeMode("dark");
  };

  // actual change in theme
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  const lightThemeMode = () => {
    setThemeMode("light");
  };
  return (
    <ThemeProvider value={{ themeMode, lightThemeMode, darkThemeMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/*themeButton */}
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            {/* Card*/}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
