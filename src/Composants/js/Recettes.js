import React, { Component } from "react";
import CarteRecette from "./CarteRecette";
import CardDeck from "react-bootstrap/CardDeck";
import "../css/Contenu.css"

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
    return (
      <div className="divContenu">
        <CardDeck>
          {this.state.recettes.map((recette) => (
            <CarteRecette
              attributs={recette}
            />
          ))}
        </CardDeck>
      </div>
    );
  }
}

export default Contenu;
