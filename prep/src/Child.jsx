import React, { useCallback, useEffect, useState } from "react";

const Child = (props) => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []);

  return (
    <>
      <h1>Count: {count} </h1>
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default Child;
