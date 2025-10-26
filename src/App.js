import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import { Home } from "./Home";
import { BottomBlackElement, TopBlackElement } from "./components/BlackElement";
const Main = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div className="container" onClick={toggleTheme}>
        <TopBlackElement />
      </div>
      <Home />
      <div className="container" onClick={toggleTheme}>
        <BottomBlackElement />
      </div>
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
};

export default App;
