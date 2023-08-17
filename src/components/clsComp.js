import React, { Component } from "react";
class ClsComp extends Component{

    constructor(){
        super();
        this.state={
            count:0,
            val : 10
        }

        setInterval(()=>{this.setState({count:this.state.count+1,val:this.state.val+10})},2000)
    }





    render(){
        return(
        <div style={{textAlign:"center",color:"white", backgroundColor:"red",textShadow:"5px 3px 5px black"}}> <h1>This is Class Component</h1>
        <h2>My name is <u>{this.props.name}</u> and I am a <em>{this.props.job}</em></h2>
        <h2>value of count is: {this.state.count} and Value is: {this.state.val} </h2>
        </div>
        )
    }
}

export default ClsComp;