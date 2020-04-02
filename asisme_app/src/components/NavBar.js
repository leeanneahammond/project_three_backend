import React from 'react'
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";

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


class NavBar extends React.Component {
    state = {

    }

    render() {
        return (
            <BrowserRouter>
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
            </BrowserRouter>
        )
    }
}


export default NavBar