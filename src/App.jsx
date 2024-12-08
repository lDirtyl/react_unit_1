import { useEffect, useState } from "react";
import Timer from "./components/Timer/Timer.jsx";

const App = () => {
  const [click, setClick] = useState(0);
  const [click2, setClick2] = useState(0);
  const [isShow, setIsShow] = useState(false);

  //Mount
  useEffect(() => {
    console.log("effect");
  }, []);

  // Mount + Update
  useEffect(() => {
    console.log("click", click);
  }, [click]);

  // Update
  useEffect(() => {
    if (click2 === 0) return;
    console.log("click2", click2);
  }, [click2]);

  console.log("outsideClick");

  return (
    <div>
      <button onClick={() => setClick(click + 1)}>{click}</button>
      <button onClick={() => setClick2(click2 + 1)}>{click2}</button>
      <br />
      <button onClick={() => setIsShow(!isShow)}>click</button>
      {isShow && <Timer />}
    </div>
  );
};

export default App;
