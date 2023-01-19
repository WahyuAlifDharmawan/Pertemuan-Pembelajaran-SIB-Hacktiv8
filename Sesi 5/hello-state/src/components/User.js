import React from 'react'

export default class User extends React.Component{
    constructor(){ 
        super()
        //mendefinisikan state dalam constructor component
        this.state = { 
            username : 'Wahyu Alif Dharmawan',
            gender : 'Male'
        }
    }

    //Belajar Step ke 2 menggunakan getUsername
    //cara membaca state 
    getUsername() {
        return this.state.username
    }

    //cara memanggil function yang sudah dibuat
    render(){
        return(
            <>
                <h1>Belajar State : {this.getUsername()}</h1>
            </>
        )
    }
}