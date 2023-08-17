import React, { Component } from 'react';
import imgData from './constData';

export default class MyImage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <h1>THis is My Image Component</h1>
                <img src={imgData.Luffy} alt='luffy' height={"300px"} width={"500px"}/>
                <img src={imgData.joker} alt='luffy' height={"300px"} width={"500px"}/>
                <img src={imgData.joker2} alt='luffy' height={"300px"} width={"500px"}/>
                <img src={imgData.joker3} alt='luffy' height={"300px"} width={"500px"}/>
                <img src={imgData.NarutoHinata} alt='luffy' height={"300px"} width={"500px"}/>
                <img src={imgData.WP1} alt='luffy' height={"300px"} width={"500px"}/>
                <img src={imgData.WP2} alt='luffy' height={"300px"} width={"500px"}/>
            </div>
        )
    }
}
