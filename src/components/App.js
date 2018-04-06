import React, { Component } from 'react';
//import logo from '../assets/logo.svg';
import '../css/App.css';
import '../../node_modules/codemirror/lib/codemirror.css';
import '../../node_modules/codemirror/theme/material.css';
import '../../node_modules/codemirror/mode/javascript/javascript';

import Core from './application/core';


class App extends Component {
  render() {
    return (
       <Core />
    );
  }
}

export default App;
