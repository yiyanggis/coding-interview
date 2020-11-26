import React, { Component } from "react";
import ReactDOM from "react-dom";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
      question: ""
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

  componentDidMount() {
    fetch("http://localhost:3000/code/question/1")
    .then(res => res.json())
    .then((data)=>{
      if(data.error){
        this.setState({
          question:data.question
        })
      }
      else{
        this.setState({
          question:data.question
        })
      }
      
    })
  }

  render() {
    return (
      <form>
        <p>question: </p>
        <p>{this.state.question}</p>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <p value={this.state.value}>{this.state.value}</p>
      </form>
    );
  }
}

export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;