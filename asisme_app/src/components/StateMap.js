import React from 'react'
import { Link } from "react-router-dom";
import USAMap from "react-usa-map";

class StateMap extends React.Component {
    state = {

    }

    mapHandler = (event) => {
        alert(event.target.dataset.name);
      };
      
    render() {
        return (
            <>
            <USAMap onClick={this.mapHandler} />
            </>
        )

    }

}

export default StateMap