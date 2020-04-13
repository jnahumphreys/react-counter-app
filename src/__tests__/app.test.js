import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import App from "../App";

jest.mock("../store", () => ({
  ...jest.requireActual("../store"),
  useCounterStore: jest.fn().mockReturnValue({
    count: "test count",
    actions: "test actions",
  }),
}));

// Test render
describe("App - test render", () => {
  it("should render without crashing", () => {
    shallow(<App />);
  });
});

// Testing output of the render
describe("App - render", () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it("should match snapshot", () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it("should pass the correct count value via the 'CounterStateContext.Provider'", () => {
    expect(component.find("ContextProvider").at(0).prop("value")).toEqual(
      "test count"
    );
  });

  it("should pass the correct actions values via the 'CounterDispatchContext.Provider'", () => {
    expect(component.find("ContextProvider").at(1).prop("value")).toEqual(
      "test actions"
    );
  });
});
