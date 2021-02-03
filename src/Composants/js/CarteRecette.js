import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "../css/Recette.css";
import {Link} from "react-router-dom";

class CarteRecette extends Component {
  afficherDetailsRecette() {
    //rediriger vers le contenu de la recette;
  }

  render() {
    return (
      

        <div>
          <Link to={{state:this.props.attributs, pathname:"/recettes/" + this.props.attributs._id}}>
            <Card
              style={{ width: "18rem" }}
              onClick={() => this.afficherDetailsRecette()}
            >
              <Card.Img
                className="img"
                variant="top"
                src={this.props.attributs.image}
              />
              <Card.Body>
                <Card.Title>{this.props.attributs.nom}</Card.Title>
                <Card.Text>{this.props.attributs.description}</Card.Text>
              </Card.Body>
            </Card>
          </ Link>
        </div>
    );
  }
}

export default CarteRecette;
