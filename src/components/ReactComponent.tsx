import * as React from "react";
import { useEffect } from "react";

export interface ReactComponentProps {
  counter: number;
  onReset(): void;
  onIncrement(): void;
  onDecrement(): void;
}

export const ReactComponent = (props: ReactComponentProps) => {
  const { counter, onReset, onIncrement, onDecrement } = props;

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <>
      <button onClick={() => onIncrement()}>Increment from react</button>
      <button onClick={() => onDecrement()}>Decrement from react</button>
      <br />
      <span>Hellow from react, counter: {counter}</span>{" "}
      <button onClick={() => onReset()}> Reset from react </button>
    </>
  );
};
