import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";

// import API
import States from "./components/States"




class App extends React.Component {
  state = {

  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <div className="container">
            <Route path="/" exact component={States} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
