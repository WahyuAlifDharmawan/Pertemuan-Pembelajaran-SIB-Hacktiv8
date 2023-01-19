import React from 'react'

export default class Users extends React.Component {
    constructor(){
        super()
        this.state = {
            username: 'user01'
        }
    }
    render(){
        return(
            <h1>{this.state.username}</h1>
        )
    }
}