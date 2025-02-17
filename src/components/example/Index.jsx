import React, { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "decrement":
      return { count: state.count + 1 };

    case "increament":
      return state.count > 0
        ? {
            count: state.count - 1,
          }
        : state;
    default:
      return state;
  }
}
export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <div>
        <button onClick={() => dispatch({ type: "decrement" })}>+</button>
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({ type: "increament" })}>-</button>
      </div>
    </>
  );
};

export default Counter;
