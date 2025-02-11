const Practice = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numbers2 = numbers.map((num) => num * 2);
  return (
    <>
      {/* <h1>new Array is {numbers2} </h1> */}
      {console.log(numbers2)}
    </>
  );
};

export default Practice;
