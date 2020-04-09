import React from "react";
import { CounterContainer } from "./components/counter-container";
import { CounterOutput } from "./components/counter-output";
import { CounterActions } from "./components/counter-actions";
import "./scss/styles.scss";

export default function App() {
  return (
    <div className="app">
      <CounterContainer>
        <CounterOutput />
        <CounterActions />
      </CounterContainer>
    </div>
  );
}
