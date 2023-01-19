import React, { Component } from 'react'

export class ReactDemo extends Component {
    constructor(){
        super()
        this.state = {
            username : ''
        }
    }
    loggingIn(){
        this.setState({
            username : 'riza'
        })
    }
    loggingOut(){
        this.setState({
            username : 'riza'
        })
    }

    render(){
        <div>
            <Login onClick={this.loggingIn} />
            <Logout onClick={this.loggingOut} />
        </div>
    }
}
