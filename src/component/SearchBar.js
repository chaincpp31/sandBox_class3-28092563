import React from "react";

function SearchBar({ count, setCount }) {
  const handleInputChange = (event) => setCount(event.target.value);
  return (
    <form>
      <input type="text" value={count} onChange={handleInputChange} />
    </form>
  );
}
export default SearchBar;
