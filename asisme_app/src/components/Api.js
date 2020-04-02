import React from "react"
import axios from "axios"



class Api extends React.Component {
    state = {
        total = null,
        death = null,
        positive = null,
        state = null
    }

    getInfo = e => {
        const state = e.target.state.value
        axios.get(`https://covidtracking.com/api/states?state=${state}`)
        .then((res) => {
            
        })
    }

    render() {
        return(
            <div className="api">
                {this.state.state ? <h5>{this.state.state}</h5> : ""}
            </div>
        )
    }
}

export default Api;