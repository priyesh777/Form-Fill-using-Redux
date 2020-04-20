import React from "react";
import "./App.css";
import Form from "./Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Badge } from "react-bootstrap";

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <Badge variant="secondary">A Sample Form</Badge>
        </h1>
      </header>
      <Form />
    </div>
  );
};
export default App;
