import { useState } from "react";

import Clicker from "./components/Clicker/Clicker.jsx";
import Clicker2 from "./components/Clicker2/Clicker2.jsx";

function App() {
  //Button
  const [value, setValue] = useState(10);

  // let value = 10;
  const handleClick = () => {
    setValue(value + 1);
  };

  return (
    <>
      <Clicker2 />
      <Clicker />
    </>
  );
}

export default App;
