import React from "react";
import { Button } from "../button";

export const CounterActions = () => {
  return (
    <footer className="counter-actions">
      <Button classes="counter-actions__action counter-actions__action--decrement">
        -
      </Button>

      <Button classes="counter-actions__action counter-actions__action--increment">
        +
      </Button>

      <Button
        classes="counter-actions__action counter-actions__action--reset"
        appearance="danger"
        disabled={true}
      >
        Reset
      </Button>
    </footer>
  );
};
