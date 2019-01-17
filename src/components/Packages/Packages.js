import React from "react";


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

const Modal = (props) => (
    <div className={props.className} style={{
        transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
    }}>
        <div className="modal-content">
        <h2 onClick={props.close}>X</h2>
        <div className="package">
            <div className="title">{props.title}</div>
            <div className="description">{props.description}</div>
            <div className="puchase">{props.purchaseBtn}</div>
        </div>
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
    description="Web pack"
    purchaseBtn="Paypal"
    title="Web Options"
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
