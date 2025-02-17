import React, { useEffect, useState } from "react";

export const Counter = () => {
  const [state, setState] = useState(0);
  useEffect(() => {
    console.log("Counter");
    return () => {
      alert("Ваши данные не сохранились,вы точно хотите выйте?");
    };
  }, []);
  function Plus(prevState) {
    setState(() => {
      return prevState + 1;
    });
  }
  function Minus(prevState) {
    setState(() => {
      console.log();
      
      return prevState - 1;
    });
  }
  return (
    <>
      <div>
        <button onClick={Plus}>+</button>
        <h1>{state}</h1>
        <button onClick={Minus}>-</button>
      </div>
    </>
  );
};

export default Counter;
