import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { Button } from "../components/button";

const handleOnClick = jest.fn();

// Test render
describe("Button - test render", () => {
  it("should render without crashing", () => {
    shallow(<Button>Test button</Button>);
  });
});

// Testing output of the render
describe("Button - render", () => {
  describe("With default props", () => {
    let component;

    beforeAll(() => {
      component = shallow(<Button>Test button</Button>);
    });

    it("Should match snapshot", () => {
      expect(toJson(component)).toMatchSnapshot();
    });

    it("Should render as a 'default' appearance button by default", () => {
      expect(component.find("button.btn.btn--default").exists()).toEqual(true);
    });

    it("should not be disabled by default", () => {
      expect(component.find("button.btn").prop("disabled")).toEqual(false);
    });
  });

  describe("With prop values set", () => {
    let component;

    beforeAll(() => {
      component = shallow(
        <Button
          id="test-button-id"
          classes="test-button-class"
          onClick={handleOnClick}
          additionalAttrs={{
            name: "test-button-name",
            type: "button",
          }}
        >
          Button label
        </Button>
      );
    });

    it("should output a value passed to the 'ID' prop to the 'button' DOM node", () => {
      expect(component.find("button.btn").prop("id")).toEqual("test-button-id");
    });

    it("should output values passed to the 'classes' prop to the 'button' DOM node classNames", () => {
      expect(component.find("button.btn.test-button-class").exists()).toEqual(
        true
      );
    });

    it.each`
      appearance
      ${"default"}
      ${"danger"}
    `(
      "should set the button appearance to '$appearance' when passed a value of '$appearance' to the 'appearance' prop",
      ({ appearance }) => {
        component.setProps({ appearance: appearance });
        expect(
          component.find("button.btn").hasClass(`btn--${appearance}`)
        ).toEqual(true);
      }
    );

    it("should output the callback function passed to the 'onClick' prop to the 'button' onclick evernt attribute", () => {
      expect(component.find("button.btn").prop("onClick")).toBe(handleOnClick);
    });

    it.each`
      disabledValue
      ${true}
      ${false}
    `(
      "should set the button disabled attribute to $disabledValue if passed a value of $disabledValue to the 'disabled' prop",
      ({ disabledValue }) => {
        component.setProps({ disabled: disabledValue });
        expect(component.find("button.btn").prop("disabled")).toEqual(
          disabledValue
        );
      }
    );

    it("should output the values passed to the 'additionalAttrs' prop to the button DOM node attributes", () => {
      expect(component.find("button.btn").prop("name")).toEqual(
        "test-button-name"
      );
      expect(component.find("button.btn").prop("type")).toEqual("button");
    });

    it("should pass child prop content as direct descendants of the button DOM node", () => {
      expect(component.find("button.btn").childAt(0).text()).toEqual(
        "Button label"
      );
    });
  });

  // Interactivity
  describe("Button - interactivity", () => {
    describe("Non disabled state", () => {
      let component;

      beforeAll(() => {
        component = mount(
          <Button disabled={false} onClick={handleOnClick}>
            Button label
          </Button>
        );
      });

      it("should fire the callback function passed to the 'onClick' prop, onclick of the button", () => {
        component.simulate("click");

        expect(handleOnClick).toHaveBeenCalledTimes(1);
      });
    });

    describe("Disabled state", () => {
      let component;

      beforeAll(() => {
        component = mount(
          <Button disabled={true} onClick={handleOnClick}>
            Button label
          </Button>
        );
      });

      it("should not fire the callback function passed to the 'onClick' prop, when the button is disabled and clicked", () => {
        component.simulate("click");

        expect(handleOnClick).toHaveBeenCalledTimes(0);
      });
    });
  });
});
