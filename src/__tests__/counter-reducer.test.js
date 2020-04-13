import { counterReducer } from "../store/counter-reducer";

const getInitialState = (initialCount = 0) => {
  return {
    count: initialCount,
  };
};

describe("counterReducer", () => {
  it("should increment the state.count value when passed an action.type of 'increment", () => {
    let { count } = counterReducer(getInitialState(), { type: "increment" });
    expect(count).toEqual(1);
  });
  it("should decrement the state.count value when passed an action.type of 'decrement", () => {
    let { count } = counterReducer(getInitialState(1), { type: "decrement" });
    expect(count).toEqual(0);
  });
  it("should reset the state.count value to zero when passed an action.type of 'reset", () => {
    let { count } = counterReducer(getInitialState(10), { type: "reset" });
    expect(count).toEqual(0);
  });
  it("should throw an error if passed a non valid action.type value", () => {
    expect(() => {
      counterReducer(getInitialState(0), { type: "invalid" });
    }).toThrow();
  });
});
