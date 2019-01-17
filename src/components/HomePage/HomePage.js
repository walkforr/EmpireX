import React from "react";
import Jumbotron from "../Jumbotron/Jumbotron";
import Packages from "../Packages/Packages";

class HomePage extends React.Component {
    
    render() {
        return (
            <div className="main-content">
                <Jumbotron />
                <div className="options">Options</div>
                <Packages />
            </div>
        );
    }
}

export default HomePage;