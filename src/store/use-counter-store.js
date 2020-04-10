import { useReducer } from "react";
import { counterActionTypes } from "./counter-action-types";
import { counterReducer } from "./counter-reducer";

export const useCounterStore = () => {
  const initialState = { count: 0 };

  const [state, dispatch] = useReducer(counterReducer, initialState);

  const count = state.count;

  const actions = {
    increment: () => dispatch({ type: counterActionTypes.increment }),
    decrement: () => dispatch({ type: counterActionTypes.decrement }),
    reset: () => dispatch({ type: counterActionTypes.reset }),
  };

  /*
  For later enhancement to add local storage persistance, much like redux "store.subscribe"

  useEffect(() => {
    console.log('Count changed')
  }, [state.count])
  */

  return [count, actions];
};
