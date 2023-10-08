import { useState } from "react";
import "./App.css";
import moonIcon from "./asstes/moon.png";
import sunIcon from "./asstes/sun.png";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="app_body">
      <div className="app_calculator">
        {/* calculator_navbar_container(toggle btn, img) */}
        <div className="calculator_navbar">
          <div
            onClick={() => setIsDarkMode(~isDarkMode)}
            className="navbar_toggle"
          >
            <div
              className={`navbar_toggle_circle ${
                isDarkMode ? "active" : ""
              }`}
            ></div>
          </div>
          {/* navbar image  */}
          <img
            className="navbar_img"
            src={isDarkMode ? moonIcon : sunIcon}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default App;
