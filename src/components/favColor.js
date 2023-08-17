import React, { Component } from 'react'

export default class FavColor extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             color:"red"
        }
    }

    static getDerivedStateFromProps(props,state){
        state.color = props.color
    }
    
    render() {
        const {color} =this.state
        return (
            <div>
                <h2>This favColor Component</h2>
                <p>My Favourite color is <strong>{color}</strong></p>
            </div>
        )
    }
}
