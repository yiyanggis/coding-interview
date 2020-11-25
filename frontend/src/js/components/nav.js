import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'

import 'bootstrap/dist/css/bootstrap.min.css';

class TopNav extends Component {
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
      	<Nav
		  activeKey="/home"
		  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
		>
		  <Nav.Item>
		    <Nav.Link href="/home">Active</Nav.Link>
		  </Nav.Item>
		  <Nav.Item>
		    <Nav.Link eventKey="link-1">Link</Nav.Link>
		  </Nav.Item>
		  <Nav.Item>
		    <Nav.Link eventKey="link-2">Link</Nav.Link>
		  </Nav.Item>
		  <Nav.Item>
		    <Nav.Link eventKey="disabled" disabled>
		      Disabled
		    </Nav.Link>
		  </Nav.Item>
		</Nav>
    );
  }
}

export default TopNav;