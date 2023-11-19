import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  const [darkmode, setDarkmode] = useState(false);

  function handleClick() {
    setDarkmode((prev) => !prev);
  }
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: darkmode ? "#282d35" : "#fff",
      }}
    >
      <Header darkmode={darkmode} toggleDarkMode={handleClick} />
      <MainContent darkmode={darkmode} />
    </div>
  );
}

export default App;
