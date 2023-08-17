import React, { Component } from 'react'
import ChildComp from './childComp'


export default class ParentComp extends Component {
    cls={
        width:"100px", height:"50px",backgroundColor:"black",color:"white",fontSize:"large",marginLeft:"5px"
    }
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

     incrCount = ()=>{
        this.setState((prevState)=>({count:prevState.count+1}))
     }
     decrCount = ()=>{
        this.setState((prevState)=>({count:prevState.count-1}))
     }
    
    render() {
        const {count} = this.state
        return (
            <div>
                <h1>This is Parent Component</h1>
                <h2>The value of count is: {count}</h2>
                <button type='button' onClick={this.incrCount} style={this.cls}>Count++</button>
                <button type='button' onClick={this.decrCount} style={this.cls}>Count--</button>
                <hr color='red'/>
                <ChildComp count={count} incrCount={this.incrCount} decrCount={this.decrCount} cls={this.cls}/>
            </div>
        )
    }
}
