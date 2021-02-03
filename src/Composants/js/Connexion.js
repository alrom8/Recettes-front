import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import {Redirect} from "react-router-dom";

class Connexion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo: "",
      mdp: "",
      connecté:false
    };
  }

  connexion() {
    fetch("http://localhost:80/api/utilisateurs/connexion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status)
        }else{
          window.location("/")
        }
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div>
        <Container>
          <Form>
            <Col md={{ span: 4, offset: 4 }} xs={12}>
              <Form.Label>Pseudo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez votre pseudo"
                onChange={(e) => {
                  this.setState({ pseudo: e.target.value });
                }}
              />
            </Col>
            <br></br>
            <Col md={{ span: 4, offset: 4 }} xs={12}>
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="Entrez votre mot de passe"
                onChange={(e) => {
                  this.setState({ mdp: e.target.value });
                }}
              />
            </Col>
            <br></br>
            <Col md={{ span: 4, offset: 4 }} xs={12}>
              <Form.Control
                type="button"
                value="Connexion"
                onClick={() => this.connexion()
                  .then(()=>{
                    if(this.state.connecté===true){
                      return(<Redirect to="" />)
                    }
                  })}
              />
            </Col>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Connexion;
