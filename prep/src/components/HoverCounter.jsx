import WithCounter from "./WithCounter";

const HoverCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <>
      <button onMouseOver={incrementCount}> Hover Me</button>
      <h2>Count is: {count} </h2>
    </>
  );
};

export default WithCounter(HoverCounter, 10);
