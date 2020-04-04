import React from "react"


class Form extends React.Component {
    state = {
        info: [],
        name: "",
        email: "",
        state: "",
        city: "",
        severity: "",
        request: "",
        supportNumber: ""
    }
    
    componentDidMount() {
        fetch("https://covidtracking.com/api/states")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    info: data
                    .map(info => ({
                        states: info.state,
                        hash: info.hash
                    }))
                })
            })
            .catch(err => console.log(err))
    }

    handleSubmit = (event) => {
        event.preventDefault()
        //send data to server
        fetch(this.props.baseURL + '/requests', {
          method: 'POST',
          body: JSON.stringify({
              name: this.state.name,
              email: this.state.email,
              state: this.state.state,
              city: this.state.city,
              severity: this.state.severity,
              request: this.state.request,
              supportNumber: this.state.supportNumber
        }),
          headers: {
            'Content-Type': 'application/json'
          }
          //server responses with json
        }).then (res => res.json())
          .then (resJson => {
            this.props.handleAddRequest(resJson)
            this.setState({
              name: '',
              email: "",
              state: "",
              city: "",
              severity: "",
              request: "",
              supportNumber: ""
            })
        }).catch (error => console.error({'Error': error}))
      }



    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value})
      }






    render() {
        return(
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="name"></label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    onChange={this.handleChange} 
                    value={this.state.name} 
                    placeholder="NAME"
                />
                
            <label htmlFor="email"></label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    onChange={this.handleChange} 
                    value={this.state.email} 
                    placeholder="EMAIL"
                />
                <br></br>

            <label htmlFor="State"></label>
                <select placeholder="State" id="state" name="state" onChange={this.handleChange} value={this.state.state} >
                    <option value="">State</option>
                    {this.state.info.map((info, index) => (
                        <option key={index} value={info.states}>{info.states}</option>
                    ))}
                </select> 

            <label htmlFor="city"></label>
                <input 
                    type="text" 
                    id="city" 
                    name="city" 
                    onChange={this.handleChange} 
                    value={this.state.city} 
                    placeholder="CITY"
                />  

            <label htmlFor="severity"></label>
                <select onChange={this.handleChange} id="severity" name="severity" value={this.state.severity} >
                    <option value="high">SEVERITY</option>
                     <option value="high">High</option>
                     <option value="medium">Medium</option>
                     <option value="low">Low</option>
                </select>
                <br></br>

            <label htmlFor="request"></label>
                <input 
                    type="text" 
                    id="request" 
                    name="request" 
                    onChange={this.handleChange} 
                    value={this.state.request} 
                    placeholder="REQUEST"
                />    
                <br></br>
                <input type="submit" value="Submit"/>
        </form>
        )
    }
}










export default Form;