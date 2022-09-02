import React, { useContext, useReducer } from "react";

const counterActionTypes = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
};

function counterReducer(state, action) {
  switch (action.type) {
    case counterActionTypes.INCREMENT:
      return { count: state.count + 1 };
    case counterActionTypes.DECREMENT:
      return { count: state.count - 1 };
    case counterActionTypes.RESET:
      return { count: 0 };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function useCounterReducer() {
  const initialState = { count: 0 };

  const [state, dispatch] = useReducer(counterReducer, initialState);

  const count = state.count;

  const actions = {
    increment: () => dispatch({ type: counterActionTypes.INCREMENT }),
    decrement: () => dispatch({ type: counterActionTypes.DECREMENT }),
    reset: () => dispatch({ type: counterActionTypes.RESET }),
  };

  /*
  For later enhancement to add local storage persistance, much like redux "store.subscribe"

  useEffect(() => {
    console.log('Count changed')
  }, [state.count])
  */

  return { count, actions };
}

const CounterReducerStateContext = React.createContext();
const CounterReducerActionsContext = React.createContext();

const useCounterState = () => useContext(CounterReducerStateContext);
const useCounterActions = () => useContext(CounterReducerActionsContext);

function CounterProvider({ children }) {
  const { count, actions } = useCounterReducer();

  return (
    <CounterReducerStateContext.Provider value={count}>
      <CounterReducerActionsContext.Provider value={actions}>
        {children}
      </CounterReducerActionsContext.Provider>
    </CounterReducerStateContext.Provider>
  );
}

export { CounterProvider, useCounterState, useCounterActions };
