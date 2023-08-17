import React, { useState } from 'react'
import axios from 'axios'
import {Button} from 'react-bootstrap';
import {useNavigate } from 'react-router';

export default function Add() {
    const Navigate = useNavigate();
    const [emp, setEmp] = useState({
        name: "",
        post: "",
        salary: ""
    })

    const inpChangeHandler = (event) => {
        setEmp({...emp,[event.target.name]:event.target.value })
    }

    const addData = (event) => {
        event.preventDefault();
        let obj = {
            name:emp.name,
            post:emp.post,
            salary:emp.salary
        }
        axios.post("http://localhost:3131/employee", obj).then(() => {
            window.alert("Details Added Successfully");
            Navigate("/")
        })
    }



    const { name, post, salary } = emp;

    return (
        <div>
            <h2>This is Add component</h2>
            <form onSubmit={addData}>
                <label className='form-label' >Enter Employee Name:</label>
                <input type='text' name='name' className='form-control' onChange={inpChangeHandler} value={name}/>
                <label className='form-label' >Enter Employee Post:</label>
                <input type='text' name='post' className='form-control' onChange={inpChangeHandler} value={post}/>
                <label className='form-label' >Enter Employee Salary:</label>
                <input type='text' name='salary' className='form-control' onChange={inpChangeHandler} value={salary}/>
                <Button type='submit' variant='outline-success' style={{margin:"10px 0px 20px 0px",fontSize:"larger"}}>Add Detail</Button>
            </form>
        </div>
    )
}
