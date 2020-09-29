import React from "react";

function FormInput({ inputValue, setInputValue }) {
  // const [inputValue, setInputValue] = useState("")
  const handleClearChange = () => setInputValue("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleClearChange}>Clear</button>
      <div>{inputValue}</div>
    </div>
  );
}
export default FormInput;
