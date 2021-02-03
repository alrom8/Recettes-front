import React, { Component } from "react";

class ContenuRecette extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.location.state
  }

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h2>Contenu recette</h2>
      </div>
    );
  }
}

export default ContenuRecette;
