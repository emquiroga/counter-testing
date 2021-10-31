import { useCounter } from "../hooks/useCounter";
import ButtonCounter from "./ButtonCounter";

const Counter = () => {
  const { counter, handleChangeCounter, handleReset } = useCounter();
  return (
    <>
      <h2 role="counter">Counter: {counter} </h2>
      <ButtonCounter name="add" action={handleChangeCounter} />
      <button aria-label="reset" onClick={handleReset}>
        Reset
      </button>
      <button aria-label="rest" onClick={() => handleChangeCounter(-1)}>
        -1
      </button>
    </>
  );
};

export default Counter;
