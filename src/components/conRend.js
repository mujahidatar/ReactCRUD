import React, { Component } from 'react'

export default class ConRend extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogin:true
        }
    }
    
    render() {
        const{isLogin} = this.state;
        if(isLogin){
            return (<b>Admin Login</b>)
        }
        else{
            return (<b>User Login</b>)
        }
        
    }
}
