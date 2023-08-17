import React from 'react'

const FcComp = (props)=> {
    return (
        <div style={{backgroundColor:"aqua",textAlign:"center"}}>
        <h1>this is second function componant</h1>
        <h1>My name is <u>{props.name}</u> and I am a <em>{props.job}</em></h1>
    </div>
    )
}

export default FcComp
