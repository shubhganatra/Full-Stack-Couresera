import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isloggedIn: false
        }
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
    }
    
    login () {
        this.setState({
            isloggedIn: true
        })
    }
    logout () {
        this.setState({
            isloggedIn: false
        })
    }
    render() {

        return(
            this.state.isloggedIn ?
            (<div>
                <div>Welcome Shubh!</div>
                <button onClick={this.logout}>Log Out</button>
            </div>):
            (<div>
                <div>Welcome Guest!</div>
                <button onClick={this.login}>Log In</button>
            </div>)
        )
        // let message
        // if (this.state.isloggedIn) {
        //     message=<div><div>Welcome Shubh!</div><button onClick={this.logout}>Log Out</button></div>
        // } 
        // else {
        //     message=<div><div>Welcome Guest!</div><button onClick={this.login}>Log In</button></div>
        // }
        // return message
        // if(this.state.isloggedIn) {
        //     return(
        //         <div>
        //             <div>Welcome Shubh!</div>
        //             <button onClick={this.logout}>Log Out</button>
        //         </div>
        //     )
        // }
        // else {
        //     return(
        //         <div>
        //             <div>Welcome Guest!</div>
        //             <button onClick={this.login}>Log In</button>
        //         </div> 
        //     ) 
        // }
        // return (
        //     <div>
        //         <div>Welcome Shubh!</div>
        //         <div>Welcome Guest!</div>
        //     </div>
        // )
    }
}

export default UserGreeting
