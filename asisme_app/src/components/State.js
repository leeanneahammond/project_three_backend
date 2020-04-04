import React from "react"
import Form from "./Form"

const Url = "https://covidtracking.com/api/states?hash="

let baseURL = process.env.REACT_APP_BASEURL

if (process.env.NODE_ENV === "development") {
    baseURL = "http://localhost:3003"
} else {
    baseURL = ""
}

console.log("current base URL: " + baseURL)

fetch(baseURL + "/requests")
    .then(data => {
        return data.json()})
        .then(parsedData => console.log(parsedData),
            err => console.log(err))






class State extends React.Component {
    state = {
        activeState: [],
        isLoading: true,
        error: null,
        requests: [],
        request: null
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


     //show
  getRequest = requests => {
    this.setState({requests})
  }


    getRequest = () => {
        fetch(baseURL + "/requests")
            .then(data => {
                return data.json()},
                err => console.log(err))
            .then(parsedData => this.setState({requests: parsedData}),
            err=> console.log(err))
    }
    
    
    handleAddRequest = (request) => {
        const copyRequest = [...this.state.requests]
        copyRequest.unshift(request)
        this.setState({
          requests: copyRequest,
          name: '',
          email: '',
          state: '',
          city: '',
          severity: '',
          request: '',
          supportNumber: ''
        })
      }

//lifecycle method
componentDidMount () {
    this.getRequest()
  }

    render(){
        console.log(this.requests)
        console.log(this.state)
        console.log(this.props)
        return(
            <div>
                <Form
                baseURL={baseURL}
                handleAddRequest={this.handleAddRequest}
                />

                <div className="form">
                    {!this.state.isLoading ?                  
                    <div className="info">
                        <p>State: <strong> {this.state.activeState.state} </strong></p>
                        <p>Deaths: <strong> {this.state.activeState.death} </strong></p>
                        <p>Positive Results: <strong> {this.state.activeState.positive} </strong></p>
                        <p>Total Tested Results: <strong> {this.state.activeState.totalTestResults} </strong></p>   
                    </div> : <h2>Gathering Information...</h2>}
                </div>

                {/* <div className="main-request">
                    {this.state.requests.map(requests => (
                        <ul key={requests._id}>
                            <div className="request" key={requests._id}>
                               <p>{requests.name} <strong> {requests.email} </strong> <strong>{requests.SupportNumber}</strong></p> 
                               <p>{requests.city} <strong> {requests.severity} </strong></p> 
                               <p>{requests.request}</p>
                            </div>
                        </ul>
                    ))}  
                </div> */}

                

            </div>
        )
    }
}











export default State;