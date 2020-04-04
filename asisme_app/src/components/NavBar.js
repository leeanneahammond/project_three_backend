import React from 'react'
import { Route, Link } from "react-router-dom";

  
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
            <div>
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
                    <Route path="/aboutus/" exact component={About} />
                </div>
            </div>
        )
    }
}


export default NavBar