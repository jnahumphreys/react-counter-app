import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { CounterOutput } from "../components/counter-output";

jest.mock("../store", () => ({
  useCounterStateContext: jest.fn().mockReturnValue(0)
}))

// Test render
describe("CounterOutput - test render", () => {
  it("should render without crashing", () => {
    shallow(<CounterOutput />);
  });
});

// Testing output of the render
describe("CounterOutput - render", () => {
  let component;

  beforeAll(() => {
    component = shallow(<CounterOutput />)
  })

  it("should match snapshot", () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  
  it('should output the correct count value passed in by context', () => {
    expect(component.find('.counter-output__count').text()).toEqual("0");
  })
})