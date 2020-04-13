import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import {
  CounterStateContext,
  CounterDispatchContext,
  useCounterStateContext,
  useCounterDispatchContext,
} from "../store";

describe("CounterStateContext", () => {
  it("should receive the correct value passed down from a CounterStateContext.Provider", () => {
    const wrapper = ({ children }) => {
      return (
        <CounterStateContext.Provider value={"test value one"}>
          {children}
        </CounterStateContext.Provider>
      );
    };

    const { result } = renderHook(() => useCounterStateContext(), { wrapper });
    expect(result.current).toEqual("test value one");
  });
});

describe("CounterDispatchContext", () => {
  it("should receive the correct value passed down from a CounterDispatchContext.Provider", () => {
    const wrapper = ({ children }) => {
      return (
        <CounterDispatchContext.Provider value={"test value two"}>
          {children}
        </CounterDispatchContext.Provider>
      );
    };

    const { result } = renderHook(() => useCounterDispatchContext(), {
      wrapper,
    });
    expect(result.current).toEqual("test value two");
  });
});
