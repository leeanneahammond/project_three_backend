import React from "react"

const Url = "https://covidtracking.com/api/states?hash="

class State extends React.Component {
    state = {
        activeState: [],
        isLoading: true,
        error: null
    }

    componentDidMount = () => {
        console.log(this.props.location.state.info)
        const hash = this.props.location.state.info
        fetch(Url+hash)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    activeState: data,
                    isLoading: false
                })
            })
            .catch(error => this.setState({error, isLoading: false}))
    }

    render(){
        console.log(this.state)
        console.log(this.props)
        return(
            <div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>need to give this a margin top, so we can get rid of the 1;s</div>
                {!this.state.isLoading ?                  
                <div className="info">
                    <p>State: <strong> {this.state.activeState.state} </strong></p>
                    <p>Deaths: <strong> {this.state.activeState.death} </strong></p>
                    <p>Positive Results: <strong> {this.state.activeState.positive} </strong></p>
                    <p>Total Tested Results: <strong> {this.state.activeState.totalTestResults} </strong></p>   
                </div> : <h2>Gathering Information...</h2>}
            </div>
        )
    }
}











export default State;