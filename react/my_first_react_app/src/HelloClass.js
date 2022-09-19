import React from "react";
import "./HelloClass.css";
import Card from "react-bootstrap/Card";

class HelloClass extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>{this.props.text}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default HelloClass;
