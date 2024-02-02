import { useCounterState, useCounterActions } from "./counter-provider";
import { Button } from "./button";
import { COUNTER_VALUE_CONTAINER_ID } from "./counter-output";

function DecrementCount() {
  const count = useCounterState();
  const { decrement } = useCounterActions();

  return (
    <Button
      disabled={count <= 0}
      onClick={decrement}
      aria-label="Decrement"
      data-cy="decrement"
    >
      -
    </Button>
  );
}

function IncrementCount() {
  const { increment } = useCounterActions();

  return (
    <Button onClick={increment} aria-label="Increment" data-cy="increment">
      +
    </Button>
  );
}

function ResetCount() {
  const count = useCounterState();
  const { reset } = useCounterActions();

  return (
    <Button
      disabled={!(count > 0)}
      onClick={reset}
      data-cy="reset"
      className="basis-full bg-[#bb2c22]"
    >
      Reset
    </Button>
  );
}

function CounterActions() {
  return (
    <div
      aria-label="Counter actions"
      role="toolbar"
      aria-controls={COUNTER_VALUE_CONTAINER_ID}
      className="mx-auto flex w-full max-w-80 flex-wrap justify-between"
    >
      <DecrementCount />
      <IncrementCount />
      <ResetCount />
    </div>
  );
}

export { CounterActions };
