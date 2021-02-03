import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Connexion from "./Composants/js/Connexion";
import Inscription from "./Composants/js/Inscription";
import Recettes from "./Composants/js/Recettes";
import ContenuRecette from "./Composants/js/ContenuRecette";


function App() {
  return (
      <div className="App">
        <BrowserRouter>
        <div>
          <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            sticky="top"
          >
            <Navbar.Brand href="#home">Appli recettes</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/recettes">Recettes</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="/connexion">Se connecter</Nav.Link>
                <Nav.Link href="/inscription">Créer un compte</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/recettes" exact component={Recettes} />
            <Route path="/connexion" component={Connexion} />
            <Route path="/inscription" component={Inscription} />
            <Route path="/recettes/:id" component={ContenuRecette} />
          </Switch>
        </div>
      </BrowserRouter>
      </div>
      
  );
}

export default App;
