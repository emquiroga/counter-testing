import { useState } from "react";

export const useCounter = () => {
    const [counter, setCounter] = useState(0);
    const handleChangeCounter = (value = 1) => {
      setCounter(counter + value);
    };
    const handleReset = () => {
        setCounter(0);
    }
    return {counter, handleChangeCounter, handleReset}
}
