import React from "react";
import styled from "@emotion/styled";
import { useCounterState } from "./counter-provider";

const Container = styled.div({
  margin: "0 0 1rem 0",

  "& > span": {
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
  },
});

export const CounterOutput = () => {
  const count = useCounterState();

  return (
    <Container>
      <span>{count.toString()}</span>
    </Container>
  );
};
