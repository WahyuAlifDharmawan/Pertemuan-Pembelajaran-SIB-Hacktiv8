//update state dalam sebuah function
//function increment dan decrement

import React from 'react';

export default class Counter extends React.Component{
    constructor(){
        super()
        this.state ={
            counter : 0
        }
    }

    increment = () => {
        this.setState({
            counter : this.state.counter + 1
        })
    }

    decrement = () => {
        this.setState({
            counter : this.state.counter - 1
        })
    }

    render() {
        return(
            <div>
                <h3>You can count on me : {this.state.counter}</h3>
                <br />
                <button onClick = {this.increment}>+</button>
                <button onClick = {this.decrement}>-</button>
            </div>
        )
    }
}