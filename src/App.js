import React from "react";
import Form from "./Form";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Details from "./Details";
import { Nav, Navbar } from "react-bootstrap";
import Home from "./Home";

export const App = () => {
  return (
    <>
      <ToastContainer />

      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <strong>TEST FORM</strong>
        </Navbar.Brand>
        <Nav className="mr-auto" style={{ float: "right" }}>
          <Nav.Link href="/">HOME</Nav.Link>
          <Nav.Link href="/details">USERS</Nav.Link>
          <Nav.Link href="/about">ABOUT</Nav.Link>
        </Nav>
      </Navbar>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/register">
            <Form />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
export default App;
