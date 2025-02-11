import { useState } from "react";

const Practice = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Count is : {count} </h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </>
  );
};

export default Practice;
