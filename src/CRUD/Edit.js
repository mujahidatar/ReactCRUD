import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Button} from 'react-bootstrap';
import {useNavigate, useParams } from 'react-router';

export default function Edit() {
    const {id} = useParams();
    const Navigate = useNavigate();
    const [emp, setEmp] = useState({
        name: "",
        post: "",
        salary: ""
    })

    useEffect(()=>{
        axios.get(`${"http://localhost:3131/employee"}/${id}`).then((res)=>{
        setEmp({...res.data});
        })
    },[])

    const inpChangeHandler = (event) => {
        setEmp({...emp,[event.target.name]:event.target.value })
    }

    const editData = (event) => {
        event.preventDefault();
        let obj = {
            name:emp.name,
            post:emp.post,
            salary:emp.salary
        }
        axios.put(`${"http://localhost:3131/employee"}/${id}`, obj).then(() => {
            window.alert("Details Updated Successfully");
            Navigate("/")
        })
    }



    const { name, post, salary } = emp;

    return (
        <div>
            <h2>This is Edit component</h2>
            <form onSubmit={editData}>
                <label className='form-label' > Employee Name:</label>
                <input type='text' name='name' className='form-control' onChange={inpChangeHandler} value={name}/>
                <label className='form-label' > Employee Post:</label>
                <input type='text' name='post' className='form-control' onChange={inpChangeHandler} value={post}/>
                <label className='form-label' > Employee Salary:</label>
                <input type='text' name='salary' className='form-control' onChange={inpChangeHandler} value={salary}/>
                <Button type='submit' variant='outline-success' style={{margin:"10px 0px 20px 0px",fontSize:"larger"}}>Update Detail</Button>
            </form>
        </div>
    )
}
