import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "../css/Recette.css";

class Recette extends Component {
  render() {
    return (
      <Card style={{ width: "18rem" }} onClick={() => console.log(this.props)}>
        <Card.Img className="img" variant="top" src={this.props.img} />
        <Card.Body>
          <Card.Title>{this.props.nom}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Recette;
