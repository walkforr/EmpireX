import React from "react";
import Modal from "./Modal";

const Package = props => (
  <div className={props.className}>
    <h1>.</h1>
    <div className="title">{props.name}</div>
    <img src={props.img} />
    <div onClick={props.modal} className="button">
      See More
    </div>
  </div>
);

class Packages extends React.Component {
  state = {
    isShowing: false
  };

  openModal = e => {
    e.preventDefault();
    this.setState({ isShowing: true });
  };

  closeModalHandler = e => {
    e.preventDefault();
    this.setState({ isShowing: false });
  };

  render() {
    return (
      <div>


<Modal
    className="modal"
    show={this.state.isShowing}
    close={this.closeModalHandler}
    />
        <div className="packages">
          <Package
            className="package-card web"
            name="Web"
            modal={this.openModal}
          />
          <Package className="package-card mobile" name="Mobile" />
          <Package className="package-card custom" name="Custom" />
        </div>
      </div>
    );
  }
}

export default Packages;
