import { useState } from "react";

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}> Click Me</button>
      <h2>Count is: {count} </h2>
    </>
  );
};

export default ClickCounter;
