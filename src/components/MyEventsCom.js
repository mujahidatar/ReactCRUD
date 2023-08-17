import React, { Component } from 'react'

class MyEventsCom extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count : 0,
             course : this.props.course,
             fees : this.props.fees
        }
    }

    greet = ()=>{
        window.alert("Welcome All to my Event ");
    }

    counter = ()=>{
        this.setState({count:this.state.count+1})
    }

    revCounter = ()=>{
        this.setState({count:this.state.count-1})
    }
    
    render() {
        const { course, fees} = this.props
        const {count} = this.state
        return (
            <div>
                <h2>This is my Event Componant</h2>
                <h2>This Course is {this.props.course} and fees is {this.props.fees} </h2>
                <h3>This Course is {this.state.course} and fees is {this.state.fees} </h3>
                <h4>This Course is {course} and fees is {fees} </h4>
                <h3>Count is: {count}</h3>

                <hr/>

                <button type='button' onClick={this.greet}>Greet</button>
                <button type='button' onClick={this.counter}>Count++</button>
                <button type='button' onClick={this.revCounter}>Count--</button>
            </div>
        )
    }
}

export default MyEventsCom
