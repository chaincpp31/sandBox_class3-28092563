import React, { useState } from "react";
import ContainerLayout from "./component/ContainerLayout";
import Background from "./component/Background";
import FormInput from "./component/FormInput";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <ContainerLayout title="This is a title">content....</ContainerLayout>

      <FormInput value={inputValue} setInputValue={setInputValue} />
      <Background>sasd;s;;{inputValue}</Background>
    </div>
  );
}
export default App;
