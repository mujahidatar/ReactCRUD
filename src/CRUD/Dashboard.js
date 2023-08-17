import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import {Table} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import '../components/external.css'
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function Dashboard(){
    const [emp,setEmp] = useState([]);
    useEffect(()=>{
        fetchData();
    },[])


    const fetchData = ()=>{
        axios.get("http://localhost:3131/employee").then((res)=>{
            console.log(res.data);
            setEmp(res.data);
        })
    }

    const deleteRecord = (id) =>{
        if(window.confirm(`Are you want to delete record with id: ${id}`)){
        axios.delete(`${"http://localhost:3131/employee"}/${id}`);
        alert("Record Deleted");
        fetchData();
        }
    }

    return (
        <div className='div'>
            <h1>This is Dashboard Component</h1>
            {/* <Button variant='outline-success' style={{margin:"10px 0px 20px 0px",fontSize:"larger"}}><i class="fa fa-plus-circle" aria-hidden="true"></i>Add Employee Detail</Button> */}
            <Link to="/add" className='btn btn-outline-success btn-lg mb-4'><i class="fa fa-plus-circle" aria-hidden="true"></i> Add Employee Detail</Link>
            <Table striped bordered hover variant="dark" className='Table'>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Post</th>
                    <th>Salary</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        emp.map((val,index)=>{
                            return <tr key={index}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.post}</td>
                                <td>{val.salary}</td>
                                <td>
                                    <Link to={`/edit/${val.id}`} className='btn btn-outline-success'><i class="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
                                    &nbsp; &nbsp;
                                    <Button onClick={()=>deleteRecord(val.id)} variant="outline-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></Button>
                                    
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
            
        </div>
    )
}
