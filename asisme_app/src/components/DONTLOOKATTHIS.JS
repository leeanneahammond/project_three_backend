// componentDidMount = async() => {
//     console.log(this.props.location.state.info)

//     const hash = this.props.location.state.info
//     const req = await fetch
//     (`https://covidtracking.com/api/states?hash=${hash}`)
    
//     const res = await req.json()
//     console.log(res)
// }




// const hash = this.props.location.state.hash
// fetch(`https://covidtracking.com/api/states?hash=${hash}`)




// componentDidMount = async() => {
//     console.log(this.props.location.state.info)
//     const hash = this.props.location.state.info
//     fetch(Url+hash)
//         .then(res => res.json())
//         .then(data => {
//             this.setState({
//                 activeState: data
//             })
//         })
//         .catch(err => console.log(err))
// }