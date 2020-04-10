import React from "react";
import { useCounterStateContext, useCounterDispatchContext } from "../../store";
import { Button } from "../button";

export const CounterActions = () => {
  const count = useCounterStateContext();
  const { increment, decrement, reset } = useCounterDispatchContext();

  return (
    <footer className="counter-actions">
      <Button
        classes="counter-actions__action counter-actions__action--decrement"
        disabled={count <= 0}
        onClick={decrement}
      >
        -
      </Button>

      <Button
        classes="counter-actions__action counter-actions__action--increment"
        onClick={increment}
      >
        +
      </Button>

      <Button
        classes="counter-actions__action counter-actions__action--reset"
        appearance="danger"
        disabled={!count > 0}
        onClick={reset}
      >
        Reset
      </Button>
    </footer>
  );
};
