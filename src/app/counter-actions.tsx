import { memo } from "react";
import styled from "@emotion/styled";
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

const ResetCountButton = memo(
  styled(Button)({
    backgroundColor: "#bb2c22",
    flexBasis: "100%",
  }),
);

function ResetCount() {
  const count = useCounterState();
  const { reset } = useCounterActions();

  return (
    <ResetCountButton disabled={!(count > 0)} onClick={reset} data-cy="reset">
      Reset
    </ResetCountButton>
  );
}

const Container = styled.div({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  width: "100%",
  maxWidth: "20rem",
  margin: "0 auto",
});

function CounterActions() {
  return (
    <Container
      aria-label="Counter actions"
      role="toolbar"
      aria-controls={COUNTER_VALUE_CONTAINER_ID}
    >
      <DecrementCount />
      <IncrementCount />
      <ResetCount />
    </Container>
  );
}

export { CounterActions };
