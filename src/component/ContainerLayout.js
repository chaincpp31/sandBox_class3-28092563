import React from "react";

function ContainerLayout(prop) {
  return (
    <div>
      {prop.title}
      <div>{prop.children}</div>
    </div>
  );
}
export default ContainerLayout;
