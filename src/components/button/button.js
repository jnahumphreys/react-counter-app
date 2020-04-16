import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

export const Button = (props) => {
  const buttonClasses = classnames("btn", props.classes, {
    [`btn--${props.appearance}`]: true,
  });

  return (
    <button
      id={props.id}
      className={buttonClasses}
      onClick={props.onClick}
      disabled={props.disabled}
      {...props.additionalAttrs}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  /*
  Allows the passing of a unique ID to the root DOM node ID attribute
  */
  id: PropTypes.string,
  /*
  Allows the passing of multiple CSS classNames to the root DOM node class attribute
  */
  classes: PropTypes.string,
  /*
  Determines the style of the Button component, defaults to "default"
  */
  appearance: PropTypes.oneOf(["default", "danger"]),
  /*
  Sets a callback function onClick of the Button, returns event object
  */
  onClick: PropTypes.func,
  /*
  Toggles the disabled attribute value, defaults to "false"
  */
  disabled: PropTypes.bool,
  /*
  Allows the passing of content within the Button (typically the label)
  */
  children: PropTypes.node,
  /*
  Allows the passing of additional DOM attributes to the button DOM node
  */
  additionalAttrs: PropTypes.object,
};

Button.defaultProps = {
  appearance: "default",
  disabled: false,
};
