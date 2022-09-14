import React from "react";
import styled from "@emotion/styled";
import { useCounterState, useCounterActions } from "./counter-provider";
import { Button } from "./button";

const Container = styled.div({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  width: "100%",
  maxWidth: "20rem",
  margin: "0 auto",
});

const ResetCountButton = styled(Button)({
  backgroundColor: "#bb2c22",
  flexBasis: "100%",
});

function CounterActions() {
  const count = useCounterState();
  const { increment, decrement, reset } = useCounterActions();

  return (
    <Container>
      <Button
        disabled={count <= 0}
        onClick={decrement}
        aria-label="Decrement"
        data-cy="decrement"
      >
        -
      </Button>

      <Button onClick={increment} aria-label="Increment" data-cy="increment">
        +
      </Button>

      <ResetCountButton disabled={!(count > 0)} onClick={reset} data-cy="reset">
        Reset
      </ResetCountButton>
    </Container>
  );
}

export { CounterActions };
