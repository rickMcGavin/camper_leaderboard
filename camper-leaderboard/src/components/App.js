import React, { Component } from 'react';
import Header from './Header';
import Table from './Table';
import '../css/App.css';

class App extends Component {
  render() {
    return (
    	<div>
     	<Header /> 
     	<Table />
     	</div>
    )
  }
}

export default App;
