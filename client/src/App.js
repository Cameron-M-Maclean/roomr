import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from './homepage/containers/Homepage';

function App() {
  return (
    <>
      <Homepage/>
    </>
  );
}

export default App;