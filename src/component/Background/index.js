import React, { useState } from "react";
// import "./main.css";
import style from "./main.module.css";

function Background(props) {
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  // const [state, setState] = useState()

  const handleClick = () => {
    setBackgroundColor(backgroundColor === "#fff" ? "#f00" : "#fff");
  };
  return (
    <React.Fragment>
      {/* "background-container" */}
      <div
        className={style.container}
        onClick={handleClick}
        style={{ backgroundColor }}
      >
        {props.children}
        {backgroundColor === "#fff" ? "White" : "Red"}
      </div>
    </React.Fragment>
  );
}
export default Background;
