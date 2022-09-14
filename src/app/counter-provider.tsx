import React, { useContext, useEffect, useReducer } from "react";

const counterActionTypes = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
} as const;

interface counterReducerState {
  count: number;
}

interface counterReducerAction {
  type: keyof typeof counterActionTypes;
}

const initialCount = 0;

function counterReducer(
  state: counterReducerState,
  action: counterReducerAction
): counterReducerState {
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

interface counterReducerActions {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

function useLocalStorageCountValue(
  key: string,
  defaultValue: number
): [number, (value: number) => void] {
  const value = localStorage.getItem(key)
    ? Number(localStorage.getItem(key))
    : defaultValue;

  return [
    value,
    (value: number) => localStorage.setItem(key, value.toString()),
  ];
}

function useCounterReducer(): {
  count: number;
  actions: counterReducerActions;
} {
  const [localStorageCountValue, setLocalStorageCountValue] =
    useLocalStorageCountValue("binaryJimCountAppValue", initialCount);

  const [state, dispatch] = useReducer(
    counterReducer,
    localStorageCountValue,
    (count) => ({ count })
  );

  const count = state.count;

  const actions = {
    increment: () => dispatch({ type: counterActionTypes.INCREMENT }),
    decrement: () => dispatch({ type: counterActionTypes.DECREMENT }),
    reset: () => dispatch({ type: counterActionTypes.RESET }),
  };

  useEffect(() => {
    setLocalStorageCountValue(count);
  }, [count, setLocalStorageCountValue]);

  return { count, actions };
}

const CounterReducerStateContext = React.createContext<number>(initialCount);
const CounterReducerActionsContext = React.createContext<counterReducerActions>(
  {
    increment: () => {},
    decrement: () => {},
    reset: () => {},
  }
);

const useCounterState = () => useContext(CounterReducerStateContext);
const useCounterActions = () => useContext(CounterReducerActionsContext);

interface counterProviderProps {
  children: React.ReactNode;
}

function CounterProvider({ children }: counterProviderProps) {
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
