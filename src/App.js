import React from "react";
import { CounterStateContext, CounterDispatchContext } from "./store";
import { useCounterStore } from "./store";
import { CounterContainer } from "./components/counter-container";
import { CounterOutput } from "./components/counter-output";
import { CounterActions } from "./components/counter-actions";
import "./scss/styles.scss";

export default function App() {
  const [count, actions] = useCounterStore();

  return (
    <CounterStateContext.Provider value={count} >
      <CounterDispatchContext.Provider value={actions} >
        <div className="app">
          <CounterContainer>
            <CounterOutput />
            <CounterActions />
          </CounterContainer>
        </div>
      </CounterDispatchContext.Provider>
    </CounterStateContext.Provider>
  );
}
