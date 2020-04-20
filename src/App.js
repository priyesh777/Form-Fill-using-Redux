import React, {Component} from 'react';
import './App.css';
import Form from './Form';

class App extends Component {


  render() {
    return (
      <div className="App">
   
        <header className="App-header">
          <h1 className="App-title">Welcome to a sample Redux form</h1>
        </header>
      
        <div className="container">
          <p className="App-intro">
            Personal Info Form
          </p>
          <Form />
        </div>
      </div>
    );
  }
}

export default App;