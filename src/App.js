import { useEffect, useState } from "react";
import "./App.css";
import moonIcon from "./asstes/moon.png";
import sunIcon from "./asstes/sun.png";
import Header from "./components/header/Header";
import Keypad from "./components/keypad/Keypad";

const usedKeyCodes = [
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103,
  104, 105, 8, 13, 190, 187, 189, 191, 56, 111, 106, 107, 109,
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["-", "+", "*", "/"];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem("calculator-mode")) || false
  );
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  // handle keypress and keyclicked
  const handleKeypress = (keycode, key) => {
    if (!keycode) return;
    if (!usedKeyCodes.includes(keycode)) return;

    if (numbers.includes(key)) {
      if (key === "0" && expression.length === 0) return;
      setExpression(expression + key);
    } else if (operators.includes(key)) {
      if (expression.length === 0) return;
      // if already last character is similar to current character then return
      const lastChar = expression.slice(-1);
      if (operators.includes(lastChar)) return;
      if (lastChar === ".") return;
      setExpression(expression + key);
    } else if (key === ".") {
      if (!expression) return;
      const lastChar = expression.slice(-1);
      if (!numbers.includes(lastChar)) return;
      setExpression(expression + key);
    } else if (keycode === 8) {
      // keycode 8 for backspace
      if (!expression) return;
      setExpression(expression.slice(0, -1));
    } else if (keycode === 13) {
      if (!expression) return;
      setResult(calculateResult(expression));
    }

    // calculation result
    function calculateResult(exp) {
      if (!exp) return;
      const lastChar = exp.slice(-1);
      if (!numbers.includes(lastChar)) exp = exp.slice(0, -1);
      setHistory((prev) => [...prev, exp]);
      const answer = eval(exp).toFixed(2);
      return answer;
    }
  };

  // dark mode check when component is mounted
  useEffect(() => {
    localStorage.setItem("calculator-mode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);
  return (
    <div
      className="app_body"
      data-theme={`${isDarkMode ? "dark" : ""}`}
      tabIndex="0"
      onKeyDown={(event) => handleKeypress(event.keyCode, event.key)}
    >
      <div className="app_calculator">
        {/* calculator_navbar_container(toggle btn, img) */}
        <div className="calculator_navbar">
          <div
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="navbar_toggle"
          >
            <div
              className={`navbar_toggle_circle ${isDarkMode ? "active" : ""}`}
            ></div>
          </div>
          {/* navbar image  */}
          <img
            className="navbar_img"
            src={isDarkMode ? moonIcon : sunIcon}
            alt=""
          />
        </div>

        {/* calculator header ( display ) */}
        <Header expression={expression} result={result} history={history} />
        <Keypad handleKeypress={handleKeypress} />
      </div>
    </div>
  );
}

export default App;
