import React, {
  useContext,
  useEffect,
  useReducer,
  useCallback,
  useMemo,
} from "react";

const COUNTER_ACTION_TYPES = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
} as const;

type Count = number;

type CounterReducerState = {
  count: Count;
};

type CounterReducerAction = {
  type: keyof typeof COUNTER_ACTION_TYPES;
};

function counterReducer(
  state: CounterReducerState,
  action: CounterReducerAction
): CounterReducerState {
  switch (action.type) {
    case COUNTER_ACTION_TYPES.INCREMENT:
      return { count: state.count + 1 };
    case COUNTER_ACTION_TYPES.DECREMENT:
      return { count: state.count - 1 };
    case COUNTER_ACTION_TYPES.RESET:
      return { count: 0 };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const LOCAL_STORAGE_KEY = "binaryJimCounterAppValue" as const;

function setLocalStorageCountValue(value: number) {
  localStorage.setItem(LOCAL_STORAGE_KEY, value.toString());
}

function getLocalStorageCountValue() {
  const localStorageValue = localStorage.getItem(LOCAL_STORAGE_KEY);

  return localStorageValue ? Number(localStorageValue) : false;
}

function initCounterReducerState(initialValue: number): CounterReducerState {
  return {
    count: getLocalStorageCountValue() || initialValue,
  };
}

type Increment = () => void;
type Decrement = () => void;
type Reset = () => void;

type CounterReducerActions = {
  increment: Increment;
  decrement: Decrement;
  reset: Reset;
};

const INITIAL_COUNT = 0 as const;

function useCounterReducer(): {
  count: Count;
  increment: Increment;
  decrement: Decrement;
  reset: Reset;
} {
  const [state, dispatch] = useReducer(
    counterReducer,
    INITIAL_COUNT,
    initCounterReducerState
  );

  const count = state.count;

  const increment = useCallback(
    () => dispatch({ type: COUNTER_ACTION_TYPES.INCREMENT }),
    []
  );
  const decrement = useCallback(
    () => dispatch({ type: COUNTER_ACTION_TYPES.DECREMENT }),
    []
  );
  const reset = useCallback(
    () => dispatch({ type: COUNTER_ACTION_TYPES.RESET }),
    []
  );

  useEffect(() => {
    setLocalStorageCountValue(count);
  }, [count]);

  return { count, increment, decrement, reset };
}

const CounterReducerStateContext = React.createContext<Count | undefined>(
  undefined
);

function useCounterState() {
  const counterStateContext = useContext(CounterReducerStateContext);

  if (counterStateContext === undefined) {
    throw new Error(
      "useCounterState must be used within a CounterStateProvider"
    );
  }
  return counterStateContext;
}

const CounterReducerActionsContext = React.createContext<
  CounterReducerActions | undefined
>(undefined);

function useCounterActions() {
  const counterActionsContext = useContext(CounterReducerActionsContext);

  if (counterActionsContext === undefined) {
    throw new Error(
      "useCounterActions must be used within a CounterActionsProvider"
    );
  }
  return counterActionsContext;
}

interface CounterProviderProps {
  children?: React.ReactNode;
}

function CounterProvider({ children }: CounterProviderProps) {
  const { count, increment, decrement, reset } = useCounterReducer();

  const actions = useMemo(
    () => ({ increment, decrement, reset }),
    [increment, decrement, reset]
  );

  return (
    <CounterReducerStateContext.Provider value={count}>
      <CounterReducerActionsContext.Provider value={actions}>
        {children}
      </CounterReducerActionsContext.Provider>
    </CounterReducerStateContext.Provider>
  );
}

export { CounterProvider, useCounterState, useCounterActions };
