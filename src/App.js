import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD

=======
// import './App.scss';
>>>>>>> 2e0d04432107bec60083cdfd2fab1e16c8128ce2

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to a sample Redux form</h1>
        </header>

        <div className="container">
          <p className="App-intro">Personal Info Form</p>
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
