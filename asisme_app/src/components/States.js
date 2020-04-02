import React from "react"
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";

function Index(props) {
    return <h2>Hello, {props.username}</h2>;
  }

class States extends React.Component {






    render() {
        return(
    <div className="container">
        <div className="states">
            <footer className="footer">
                <ul>
                    <span>NorthEast</span>
                    <li>ME</li>
                    <li>NH</li>
                    <li>VT</li>
                    <li>MA</li>
                    <li>RI</li>
                    <li>CT</li>
                    <li>NY</li>
                    <li>PA</li>
                    <li>NJ</li>
                </ul>
                <ul>
                    <span>Midwest</span>
                    <li>WI</li>
                    <li>MI</li>
                    <li>IL</li>
                    <li>IN</li>
                    <li>OH</li>
                    <li>ND</li>
                    <li>SD</li>
                    <li>NE</li>
                    <li>KA</li>
                    <li>MN</li>
                    <li>IA</li>
                    <li>MO</li>
                </ul>
                <ul>
                    <span>West</span>
                    <li>ID</li>
                    <li>MT</li>
                    <li>WY</li>
                    <li>NV</li>
                    <li>UT</li>
                    <li>CO</li>
                    <li>AZ</li>
                    <li>NM</li>
                    <li>AK</li>
                    <li>WA</li>
                    <li>OR</li>
                    <li>CA</li>
                    <li>HI</li>
                </ul>
                <ul>
                    <span>South</span>
                    <li>DE</li>
                    <li>MD</li>
                    <li>DC</li>
                    <li>VA</li>
                    <li>WV</li>
                    <li>NC</li>
                    <li>SC</li>
                    <li>GA</li>
                    <li>FL</li>
                    <li>KY</li>
                    <li>TN</li>
                    <li>MS</li>
                    <li>AL</li>
                    <li>OK</li>
                    <li>TX</li>
                    <li>AR</li>
                    <li>LA</li>
                </ul>
            </footer>
        </div>
            <div>
                <Route path="/" exact component={Index} />
            </div>
        </div>
        )
    }
}


export default States;