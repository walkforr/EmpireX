import React from "react";

const sideDrawer = props => {
  let drawerClasses = ["side-drawer"];
  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }
  return (
    <nav className={drawerClasses.join(" ")}>
      <ul>
        <li>
          <a href="/">Categories</a>
          <a href="/">Stores Near Me</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
