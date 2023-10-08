import React, { useEffect, useRef } from "react";
import "./header.css";

const Header = ({ expression, result, history }) => {
  const resultRef = useRef();
  const expressionRef = useRef();

  // scroll a element into view when component is mounted
  useEffect(() => {
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  // scroll right when component is mounted
  useEffect(() => {
    expressionRef.current.scrollLeft = expressionRef.current.scrollWidth;
  }, [expression]);

  return (
    <div className="header custom-scroll">
      <div className="calculation_history">
        {history && history?.map((item, i) => <p key={i}>{item}</p>)}
      </div>
      <div ref={expressionRef} className="calculation_expression custom-scroll">
        <p>{expression}</p>
      </div>
      <div className="calculation_result">
        <p ref={resultRef}>{result}</p>
      </div>
    </div>
  );
};

export default Header;
