import React from "react";
import {useCounterStateContext} from "../../store";

export const CounterOutput = () => {

  const count = useCounterStateContext();

  return (
    <section className="counter-output">
      <span className="counter-output__count">{count}</span>
    </section>
  );
};
