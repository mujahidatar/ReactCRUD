import React, { Component } from 'react'

class ClComp extends Component {
    render() {
        return (
            <div style={{backgroundColor:"beige",textAlign:"center"}}>
                <h1>this is second class componant</h1>
                <h1>My name is <u>{this.props.name}</u> and I am a <em>{this.props.job}</em></h1>
            </div>
        )
    }
}

export default ClComp
