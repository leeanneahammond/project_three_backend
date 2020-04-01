import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";

// import API
import States from "./components/States"


function Index(props) {
  return <h2>Hello, {props.username}</h2>;
}

function About() {
  return (
    <>
      <h2>About</h2>
      <p>
        ljksflkf skjlafsdkjlfasdjklfas djklfads kjlfadskjfads jkllafksjdklfj
        adslkjfads{" "}
      </p>
    </>
  );
}

class App extends React.Component {
  state = {

  }

  render(){
    return (


      <BrowserRouter>
        <div className="App">
          <nav>
            <ul>
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/aboutus/">About</Link>
            </li>
            </ul>
          </nav>
          <div>
          <Route path="/" exact component={Index} />
          <Route path="/aboutus/" exact component={About} />
          </div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <div className="container">
            <States/>
          </div>
        </div>

        
      </BrowserRouter>
    )
  }
}

export default App;
