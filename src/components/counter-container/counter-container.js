import React from "react";
import PropTypes from "prop-types";

export const CounterContainer = (props) => {
  return <div className="counter-container">{props.children}</div>;
};

CounterContainer.propTypes = {
  children: PropTypes.node,
};
