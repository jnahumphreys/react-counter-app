import { counterActionTypes } from "./counter-action-types";

export const counterReducer = (state, action) => {
  switch (action.type) {
    case counterActionTypes.increment:
      return { count: state.count + 1 };
    case counterActionTypes.decrement:
      return { count: state.count - 1 };
    case counterActionTypes.reset:
      return { count: 0 };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
