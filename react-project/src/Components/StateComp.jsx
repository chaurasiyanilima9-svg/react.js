import React, { Component } from "react";

class StateComp extends Component {
    constructor() {
        super();

        this.state = {
        color: "blue"
        };
    }

    changeColor = () => {
        this.setState({
        color: this.state.color === "blue" ? "red" : "blue"
        });
    };

    render() {
        return (
        <div className="container text-center mt-5">
            <h1 className="text-primary">when you click me then my bckground color will be change</h1>

            <button
            className="btn btn-success ms-5 "
            onClick={this.changeColor}
            style={{
                backgroundColor: this.state.color,
                color: "white"
            }}
            >
            Click Me
            </button>
        </div>
        );
    }
}

export default StateComp;
