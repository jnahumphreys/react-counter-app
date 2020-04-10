import React, {useContext} from "react";

const CounterStateContext = React.createContext();
const CounterDispatchContext = React.createContext();

const useCounterStateContext = () => useContext(CounterStateContext);
const useCounterDispatchContext = () => useContext(CounterDispatchContext);

export { 
  CounterStateContext,
  CounterDispatchContext,
  useCounterStateContext, 
  useCounterDispatchContext 
};