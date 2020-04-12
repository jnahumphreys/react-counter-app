import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { CounterActions } from "../components/counter-actions";
import { useCounterStateContext } from "../store";

jest.mock("../store", () => ({
  useCounterStateContext: jest.fn().mockReturnValue(0),
  useCounterDispatchContext: jest.fn().mockReturnValue({
    increment: jest.fn().mockName('increment'),
    decrement: jest.fn().mockName('decrement'),
    reset: jest.fn().mockName('reset')
  })
}))

// Test render
describe("CounterActions - test render", () => {
  it("should render without crashing", () => {
    shallow(<CounterActions />);
  });
});

// Render
describe("CounterActions - render", () => {

  it("should match snapshot", () => {
    let component = mount(<CounterActions />);
    expect(toJson(component)).toMatchSnapshot();
  });

  describe("with a count of zero", () => {
    let component;

    beforeAll(() => {
      useCounterStateContext.mockReturnValue(0)
      component = mount(<CounterActions />);
    })

    it("should set the decrement button disabled prop to true if count is less than or equal to zero", () => {
      expect(
        component
        .find(".counter-actions__action--decrement")
        .prop("disabled")
      ).toEqual(true)
    })
  
    it("should set the reset button disabled prop to true if count is less than 1", () => {
      expect(
        component
        .find(".counter-actions__action--reset")
        .prop("disabled")
      ).toEqual(true)
    })
  })

  describe("with a count greater than zero", () => {
    let component;

    beforeAll(() => {
      useCounterStateContext.mockReturnValue(1)
      component = mount(<CounterActions />);
    })

    it("should set the decrement button disabled prop to false if count is greater than zero", () => {
      expect(
        component
        .find(".counter-actions__action--decrement")
        .prop("disabled")
      ).toEqual(false)
    })

    it("should set the reset button disabled prop to false if count is greater than zero", () => {
      expect(
        component
        .find(".counter-actions__action--reset")
        .prop("disabled")
      ).toEqual(false)
    })
  })
})

// Interactivity
describe("CounterActions - interactivity", () => {
  let component;

  beforeAll(() => {
    component = mount(<CounterActions />);
  })

  it("should pass the correct dispatch action to the decrement button onClick prop", () => {
    expect(
      component
      .find('.counter-actions__action--decrement')
      .prop("onClick")
      .getMockName()
    ).toEqual("decrement")
  })

  it("should pass the correct dispatch action to the increment button onClick prop", () => {
    expect(
      component
      .find('.counter-actions__action--increment')
      .prop("onClick")
      .getMockName()
    ).toEqual("increment")
  })

  it("should pass the correct dispatch action to the reset button onClick prop", () => {
    expect(
      component
      .find('.counter-actions__action--reset')
      .prop("onClick")
      .getMockName()
    ).toEqual("reset")
  })
})