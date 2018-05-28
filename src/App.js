import React, { Component } from 'react';
import logo from './cloud.png';
import './App.css';
import ServiceProvider from './ServiceProvider';
import './grid.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Coca-PT</h1><h2>Performance API</h2>
        </header>
        <div className="row">
          <ServiceProvider spname="AWS" spicon="./cloud.png" />
          <ServiceProvider spname="Exoscale" spicon="./cloud.png" />
          <ServiceProvider spname="GCE" spicon="./cloud.png" />
          <ServiceProvider spname="Switchengines" spicon="./cloud.png" />
        </div>
      </div>
    );
  }
}

export default App;
