import  { useState } from "react";

const TopScreen = () => {
  const [inputValue, setInputValue] = useState(3);

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="top-screen" style={{ flex: 1 }}>
      <input
        type="number"
        id="numberInput"
        value={inputValue}
        onChange={handleInputChange}
        min="0" // Add a minimum value if needed
        step="1" // Set the step for increment/decrement
      />
    </div>
  );
};

export default TopScreen;
