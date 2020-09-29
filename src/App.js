import React, { useState } from "react";
import ContainerLayout from "./component/ContainerLayout";
import Background from "./component/Background";
import FormInput from "./component/FormInput";
import SearchBar from "./component/SearchBar";
import CharacterCount from "./component/CharacterCount";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState("");

  return (
    <div className="App">
      <SearchBar count={count} setCount={setCount} />
      <CharacterCount count={count} />

      <ContainerLayout title="This is a title">content....</ContainerLayout>

      <FormInput value={inputValue} setInputValue={setInputValue} />
      <Background>{inputValue}</Background>
    </div>
  );
}
export default App;
