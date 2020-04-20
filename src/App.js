import React from "react";
import "./App.css";
import Form from "./Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Details from "./Details";
import { Nav, Navbar } from "react-bootstrap";

export const App = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">FORM FILL-UP</Navbar.Brand>
        <Nav className="mr-auto" style={{ float: "left" }}>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/details">Detail-List</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Navbar>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Form />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/details">
              <Details />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};
export default App;
