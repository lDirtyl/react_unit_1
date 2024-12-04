import { useState } from "react";
const Clicker = () => {
  const [value2, setValue2] = useState(100);

  const handleClick2 = () => {
    setValue2(value2 + 1);
  };

  return (
    <>
      <h1>{value2}</h1>
      <button onClick={handleClick2}>Click 2</button>
    </>
  );
};

export default Clicker;
