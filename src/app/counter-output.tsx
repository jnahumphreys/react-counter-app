import React from "react";
import { useCounterState } from "./counter-provider";

function CountValue() {
  const count = useCounterState();

  return <React.Fragment>{count.toString()}</React.Fragment>;
}

export const COUNTER_VALUE_CONTAINER_ID = "counter-value";

export const CounterOutput = () => {
  return (
    <div
      role="status"
      data-cy="count"
      aria-label="Counter value"
      id={COUNTER_VALUE_CONTAINER_ID}
      className="color-[#313131] dark:color-[#b9b9b9] m-0 mb-4 block w-full max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-center text-[6.25rem] leading-[normal] md:text-[8rem]"
    >
      <CountValue />
    </div>
  );
};
