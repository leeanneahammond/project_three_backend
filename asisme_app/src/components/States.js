import React from "react"
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";


class States extends React.Component {
    render() {
        return(
        <div className="states">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutus/">About</Link></li>
                </ul>
            </nav>

            <footer className="footer">
                <ul>
                    <span>NorthEast</span>
                    <li>Maine</li>
                    <li>New Hampshire</li>
                    <li>Vermont</li>
                    <li>Massachusetts</li>
                    <li>Massachusetts</li>
                    <li>Rhode Island</li>
                    <li>Connecticut</li>
                    <li>New York</li>
                    <li>Pennsylvania</li>
                    <li>New Jersey</li>
                </ul>
                <ul>
                    <span>Midwest</span>
                    <li>Wisconsin</li>
                    <li>Michigan</li>
                    <li>Illinois</li>
                    <li>Indiana</li>
                    <li>Ohio</li>
                    <li>North Dakota</li>
                    <li>South Dakota</li>
                    <li>Nebraska</li>
                    <li>Kansas</li>
                    <li>Minnesota</li>
                    <li>Iowa</li>
                    <li>Missouri</li>
                </ul>
                <ul>
                    <span>West</span>
                    <li>Idaho</li>
                    <li>Montana</li>
                    <li>Wyoming</li>
                    <li>Nevada</li>
                    <li>Utah</li>
                    <li>Colorado</li>
                    <li>Arizona</li>
                    <li>New Mexico</li>
                    <li>Alaska</li>
                    <li>Washington</li>
                    <li>Oregon</li>
                    <li>California</li>
                    <li>Hawaii</li>
                </ul>
                <ul>
                    <span>South</span>
                    <li>Delaware</li>
                    <li>Maryland</li>
                    <li>District of Columbia</li>
                    <li>Virginia</li>
                    <li>West Virginia</li>
                    <li>North Carolina</li>
                    <li>South Carolina</li>
                    <li>Georgia</li>
                    <li>Florida</li>
                    <li>Kentucky</li>
                    <li>Tennessee</li>
                    <li>Mississippi</li>
                    <li>Alabama</li>
                    <li>Oklahoma</li>
                    <li>Texas</li>
                    <li>Arkansas</li>
                    <li>Louisiana</li>
                </ul>
            </footer>

            <div>
                <Route path="/" exact component={Index} />
                <Route path="/aboutus/" exact component={About} />
            </div>
        </div>
        )
    }
}


export default States;