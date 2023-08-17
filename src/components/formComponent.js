import React, { Component } from 'react';
import './external.css';

export default class FormComponent extends Component {
    render() {
        return (
            <div>
                <h1>This is Form Componant</h1>
                <form className='myForm'>
                    <div>
                        <label> Enter Name</label>
                        <input type='text' name='fname'/>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
