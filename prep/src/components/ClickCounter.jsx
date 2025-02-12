import WithCounter from "./WithCounter";

const ClickCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <>
      <button onClick={incrementCount}> Click Me</button>
      <h2>Count is: {count} </h2>
    </>
  );
};

export default WithCounter(ClickCounter, 5);
