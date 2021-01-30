import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import "../css/inscription.css";

class Inscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo: "",
      mdp: "",
      imageProfil: "",
    };

    //this.inscrireUtilisateur = this.inscrireUtilisateur.bind(this);
  }

  inscrireUtilisateur() {
    fetch("http://localhost:80/api/utilisateurs/inscription", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    }).catch((err) => console.error(err));
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
            <Col md={{ span: 4, offset: 4 }}>
              <Form.Label>Image de profil</Form.Label>
            </Col>
            <Row>
              <Col md={{ span: 1, offset: 4 }}>
                <Image
                  src={this.state.imageProfil}
                  className="imageProfil"
                  roundedCircle
                />
              </Col>
              <Col md={{ span: 3 }}>
                <Form.File
                  className="input"
                  onChange={(e) =>
                    this.setState({
                      imageProfil: URL.createObjectURL(e.target.files[0]),
                    })
                  }
                />
              </Col>
            </Row>

            <br></br>
            <Col md={{ span: 4, offset: 4 }} xs={12}>
              <Form.Control
                type="button"
                value="Valider"
                onClick={() => this.inscrireUtilisateur()}
              />
            </Col>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Inscription;
