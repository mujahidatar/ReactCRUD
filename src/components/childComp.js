import React from 'react'

export default function ChildComp({ count, incrCount, decrCount, cls }) {
    return (
        <div>
            <h1>This is Child Component</h1>
            <h2>THe value of count is: {count}</h2>
            <button type='button' onClick={incrCount} style={cls}>Count++</button>
            <button type='button' onClick={decrCount} style={cls}>Count--</button>
        </div>
    )
}
