import React, { useState } from "react";

function StateToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div style={{textAlign: "center"}}>

      <h2>{darkMode ? "Dark Mode" : "Light Mode"}</h2>

      <button onClick={toggleMode} style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#222",
        padding: "10px",
      }}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default StateToggle;
