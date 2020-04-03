import React from "react"
import { Link } from "react-router-dom";



const StateList = props => (
    <div>
        {props.info.map(info => (
            <ul key={info.states}>
                <li>
                    <Link to={{pathname: `/state/${info.hash}`, state: {info: info.hash}}}>{info.states}</Link>
                </li> 
            </ul>
        ))}   
    </div>
)



export default StateList;