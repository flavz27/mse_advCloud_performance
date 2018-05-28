import React, { Component } from 'react';
import './App.css';
import logo from './cloud.png';
import spname from './App.js'

class ServiceProvider extends Component {
  render() {
    return (
      <div className="serviceProviderSelection col-sm-3">
        <h3>{this.props.spname}</h3>
        <img src={this.props.spicon} className="spIcon"/>
      </div>
    );
  }
}

export default ServiceProvider;
