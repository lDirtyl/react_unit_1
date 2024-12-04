import { useState } from "react";

function App() {
  //Button
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);

  // let value = 10;
  const handleClick = () => {
    setValue(value + 1);
  };
  const handleClick2 = () => {
    setValue2(value2 + 1);
  };

  return (
    <>
      <h1>{value}</h1>
      <button onClick={handleClick}>Click</button>
      <h1>{value2}</h1>
      <button onClick={handleClick2}>Click</button>
    </>
  );
}

export default App;
