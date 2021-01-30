import React, { Component } from "react";
import Recette from "./Recette";
import CardDeck from "react-bootstrap/CardDeck";

class Contenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recettes: [],
    };
  }

  componentDidMount() {
    this.getRecettes();
  }

  getRecettes() {
    fetch("http://localhost:80/api/recettes", {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => this.setState({ recettes: data }));
  }

  render() {
    //if(route = "recettes")
    return (
      <div>
        <CardDeck>
          {this.state.recettes.map((recette) => (
            <Recette
              nom={recette["nom"]}
              description={recette["decscription"]}
              img={recette["image"]}
            />
          ))}
        </CardDeck>
      </div>
    );
  }
}

export default Contenu;
