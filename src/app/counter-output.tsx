import React from "react";
import styled from "@emotion/styled";
import { useCounterState } from "./counter-provider";

const Container = styled.div({
  margin: "0 0 1rem 0",

  display: "block",
  width: "100%",
  maxWidth: "100%",
  textAlign: "center",
  fontSize: "6.25rem",
  color: "#313131",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",

  "@media (prefers-color-scheme: dark)": {
    color: "#b9b9b9",
  },

  "@media screen and (min-width: 48rem)": {
    fontSize: "8rem",
  },
});

function CountValue() {
  const count = useCounterState();

  return <React.Fragment>{count.toString()}</React.Fragment>;
}

export const COUNTER_VALUE_CONTAINER_ID = "counter-value";

export const CounterOutput = () => {
  return (
    <Container
      role="status"
      data-cy="count"
      aria-label="Counter value"
      id={COUNTER_VALUE_CONTAINER_ID}
    >
      <CountValue />
    </Container>
  );
};
