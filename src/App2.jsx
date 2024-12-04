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

const Title = ({ value }) => {
  return (
    <>
      <h1>{value}</h1>
    </>
  );
};

// const Clicker2 = ({ handleSetValue, valueKey }) => {
//   const handleClick = () => {
//     handleSetValue(valueKey);
//   };
//   return <button onClick={handleClick}>Click 2</button>;
// };
const Clicker2 = ({ handleSetValue }) => {
  return <button onClick={handleSetValue}>Click 2</button>;
};
//
// =================================================================
//

// function App() {
//   const [value, setValue] = useState(10);
//   const [value2, setValue2] = useState(10);

//   const handleSetValue = () => {
//     setValue(value + 1);
//   };
//   const handleSetValue2 = () => {
//     setValue2(value2 + 1);
//   };
//   return (
//     <>
//       <h2>Good</h2>
//       <Title value={value} />
//       <Clicker2 handleSetValue={handleSetValue} />
//       <h2>Bad</h2>
//       <Title value={value2} />
//       <Clicker2 handleSetValue={handleSetValue2} />
//       <Title value={value2 + value} />
//     </>
//   );
// }
function App() {
  const [valueObj, setValueObj] = useState({
    value1: 10,
    value2: 100,
  });

  const handleSetValue = (key) => {
    // setValueObj(valueObj[key] + 1);
    setValueObj({
      ...valueObj,
      [key]: valueObj[key] + 1,
    });
  };

  return (
    <>
      <Title value={valueObj.value1} />
      <Title value={valueObj.value2} />
      <Title value={valueObj.value1 + valueObj.value2} />

      <Clicker2 handleSetValue={() => handleSetValue("value1")} />
      <Clicker2 handleSetValue={() => handleSetValue("value2")} />
      {/* <Clicker2 handleSetValue={handleSetValue} valueKey="value1" />
      <Clicker2 handleSetValue={handleSetValue} valueKey="value2" /> */}
    </>
  );
}

export default App;
