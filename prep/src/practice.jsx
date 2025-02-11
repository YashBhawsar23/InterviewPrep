const Practice = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sum = numbers.reduce((pre, cur) => pre + cur, 0);
  return (
    <>
      {/* <h1>new Array is {numbers2} </h1> */}
      {console.log(sum)}
    </>
  );
};

export default Practice;
