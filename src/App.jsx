import { useState } from "react";

// const Clicker = () => {
//   const [value2, setValue2] = useState(100);

//   const handleClick2 = () => {
//     setValue2(value2 + 1);
//   };

//   return (
//     <>
//       <h1>{value2}</h1>
//       <button onClick={handleClick2}>Click 2</button>
//     </>
//   );
// };
const Clicker2 = ({ value, handleSetValue }) => {
  // const handleClick = () => {
  //   handleSetValue(1000);
  // };
  return (
    <>
      <h1>{value}</h1>
      <button onClick={handleSetValue}>Click 2</button>
    </>
  );
};
//
// =================================================================
//

function App() {
  const [value, setValue] = useState(10);
  const handleSetValue = () => {
    setValue(value + 1);
  };
  return (
    <>
      <Clicker2 value={value} handleSetValue={handleSetValue} />
      <Clicker2 value={value} handleSetValue={handleSetValue} />
    </>
  );
}

export default App;
