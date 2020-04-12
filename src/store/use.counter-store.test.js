import { renderHook, act } from '@testing-library/react-hooks'
import { useCounterStore } from "./use-counter-store";

describe("useCounterStore", () => {

  it("should return an initial count value of zero", () => {
    const {result} = renderHook(() => useCounterStore());
    expect(result.current.count).toBe(0)
  })

  it("should return an 'increment' dispatch function", () => {
    const {result} = renderHook(() => useCounterStore());
    expect(typeof result.current.actions.increment).toBe('function')
    expect(result.current.actions.increment.name).toEqual('increment')
  })

  it("should return an 'decrement' dispatch function", () => {
    const {result} = renderHook(() => useCounterStore());
    expect(typeof result.current.actions.decrement).toBe('function')
    expect(result.current.actions.decrement.name).toEqual('decrement')
  })

  it("should return an 'reset' dispatch function", () => {
    const {result} = renderHook(() => useCounterStore());
    expect(typeof result.current.actions.reset).toBe('function')
    expect(result.current.actions.reset.name).toEqual('reset')
  })
})

describe("useCounterStore - actions", () => {
  it("should increment the count value on call of 'increment' dispatch function", () => {
    let {result} = renderHook(() => useCounterStore());
    
    act(() => {
      result.current.actions.increment()
    })

    expect(result.current.count).toEqual(1)
  })

  it("should decrement the count value on call of 'decrement' dispatch function", () => {
    let {result} = renderHook(() => useCounterStore());
    
    act(() => {
      result.current.actions.decrement()
    })

    expect(result.current.count).toEqual(-1)
  })

  it("should decrement the count value on call of 'reset' dispatch function", () => {
    let {result} = renderHook(() => useCounterStore());
    
    act(() => {
      result.current.actions.increment()
      result.current.actions.reset()
    })

    expect(result.current.count).toEqual(0)
  })
})