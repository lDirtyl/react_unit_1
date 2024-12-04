import { useState } from "react";

const Clicker2 = () => {
  const [value, setValue] = useState(10);

  // let value = 10;
  const handleClick = () => {
    setValue(value + 1);
  };

  return (
    <>
      <h1>{value}</h1>
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default Clicker2;
