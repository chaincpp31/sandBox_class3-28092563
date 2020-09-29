import React, { useState } from "react";

function Background(props) {
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  // const [state, setState] = useState()

  const handleClick = () => {
    setBackgroundColor(backgroundColor === "#fff" ? "#f00" : "#fff");
  };
  return (
    <React.Fragment>
      <div onClick={handleClick} style={{ backgroundColor }}>
        {props.children}
        {backgroundColor === "#fff" ? "White" : "Red"}
      </div>
    </React.Fragment>
  );
}
export default Background;
