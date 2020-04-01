import React from 'react';
import './App.css';

// import API
import States from "./components/States"



class App extends React.Component {
  state = {

  }

  render(){
    return (
      <div className="container">
        <States/>
      </div>
    )
  }
}

export default App;
