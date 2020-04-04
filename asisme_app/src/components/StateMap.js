import React from 'react'
import { Redirect } from 'react-router-dom'
import USAMap from "react-usa-map";

class StateMap extends React.Component {
    state = {
        redirect: false
    }

    componentDidMount() {
        fetch("https://covidtracking.com/api/states")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    info: data
                    // .filter(info => !!info.death)
                    .map(info => ({
                        states: info.state,
                        death: info.death,
                        total: info.total,
                        positive: info.positive,
                        hash: info.hash
                    }))
                })
            })
            .catch(err => console.log(err))
    }

    // mapHandler = (event) => {
    //     this.state.info.map(statePicked => {
    //         if(event.target.dataset.name == statePicked.states){
    //             this.setState({stateHash: statePicked.hash}, () => {
    //                 if(this.state.stateHash) {

    //                 }
    //             })
    //         }
    //     })
    //   };

    mapHandler = (event) => {
        this.state.info.map(statePicked => {
            if(event.target.dataset.name == statePicked.states){
                this.setState({stateHash: statePicked.hash,redirect: true})
            }
        })
      };

      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to={{pathname: `/state/${this.state.stateHash}`, state: {info: this.state.stateHash}}} />
        }
    }
      
    render() {
        console.log("StateMap", this.state)
        return (
            <>
            {this.renderRedirect()}
            <USAMap onClick={this.mapHandler} />
            </>
        )

    }

}

export default StateMap