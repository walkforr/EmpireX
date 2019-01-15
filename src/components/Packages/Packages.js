import React from 'react';

const Package = (props) => (
    <div className={props.className}>
        <h1>.</h1>
        <div className="title">{props.name}</div>
        <img src={props.img} />
        <div className="button">See More</div>
    </div>
);

class Packages extends React.Component {
    state={
        
    }

    render() {
        return (
            <div className="packages">
              <Package
              className="package-card web"
              name="Web"
              />
              <Package
              className="package-card mobile"
              name="Mobile"
              />
              <Package
              className="package-card custom"
              name="Custom"
              />  
            </div>
        );
    };
};

export default Packages;