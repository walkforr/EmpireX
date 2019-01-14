import React, { Component } from "react";
import "./App.scss";
import Main from "./Main";

import Backdrop from "./components/Backdrop/Backdrop";
import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";

class App extends Component {
  state = {
    SideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;
    if (this.state.SideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer
          show={this.state.sideDrawerOpen}
        />
        <Main />

        <footer>Copyright | EmpireX 2019</footer>
        {backdrop}
      </div>
    );
  }
}

export default App;
