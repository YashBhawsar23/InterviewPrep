import React, { useState } from "react";

const HoverCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onMouseOver={() => setCount((c) => c + 1)}> Hover Me</button>
      <h2>Count is: {count} </h2>
    </>
  );
};

export default HoverCounter;
