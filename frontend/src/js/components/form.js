import React, { Component } from "react";
import ReactDOM from "react-dom";
import TopNav from "./nav"

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
      <div>
          <TopNav/>
          <form>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <p value={this.state.value}>{this.state.value}</p>
          </form>
      </div>
    );
  }
}

export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;