import React from 'react'
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import States from './States'

  
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
                <nav className="NavBar">
                    <ul>
                        <li>
                            <span className="Logo"><Link to="/">ASIS-ME</Link></span><br />
                        </li>
                        <li>
                        <Link to="/aboutus/">About</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <Route path="/" exact component={States} />
                    <Route path="/aboutus/" exact component={About} />
                </div>
            </BrowserRouter>
        )
    }
}


export default NavBar