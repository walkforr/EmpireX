import React from "react";

const drawerToggleButton = props => (
  <button className="toggle-button" onClick={props.onClick}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
);

export default drawerToggleButton;
