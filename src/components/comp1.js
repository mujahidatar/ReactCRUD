import React from 'react'
import { Outlet } from 'react-router'
export default function Comp1() {
    return (
        <div>
            <h1>This is comp1</h1>
            <Outlet/>
        </div>
    )
}
