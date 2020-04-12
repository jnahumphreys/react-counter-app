import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { CounterContainer } from "./counter-container";

// Test render
describe("CounterContainer - test render", () => {
  it("should render without crashing", () => {
    shallow(<CounterContainer />);
  });
})

// Testing output of the render
describe("CounterContainer - render", () => {
  let component;

  beforeAll(() => {
    component = shallow(<CounterContainer />)
  })

  it("should match snapshot", () => {
    expect(toJson(component)).toMatchSnapshot();
  })

  it("should output any child content passed to the 'children' prop as direct descendants of the 'counter-container' DOM node", () => {
    component.setProps({children: "Test child content"})
    expect(component.find('.counter-container').childAt(0).text()).toEqual("Test child content")
  })
})