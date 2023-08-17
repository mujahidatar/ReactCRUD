import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import './external.css'

export default class Fruits extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fruits: [
                { id: 1, name: "Apple" },
                { id: 2, name: "Mango" },
                { id: 3, name: "Banana" },
                { id: 4, name: "Graps" }
            ],
            employee: [
                { id: 101, name: "Akash", post: "Java Developer", salary: 85000, gender: "male" },
                { id: 102, name: "Anjali", post: "Python Developer", salary: 80000, gender: "female" },
                { id: 103, name: "Raja", post: "React Developer", salary: 75000, gender: "male" },
                { id: 104, name: "Rupesh", post: "Angular Developer", salary: 60000, gender: "male" },
                { id: 105, name: "Vishal", post: "MERN Developer", salary: 81000, gender: "male" }
            ]
        }
    }

    render() {
        const {fruits,employee} = this.state
        return (
            <div>
                <hr color='red'/>
                <h2>Fruits</h2>
                <ul>
                { 
                   fruits.map((val,index)=>{
                    return <li key={index}>{val.name}</li>
                    })
                }
                </ul>
                <hr color='red'/>
                <Table striped bordered hover variant="dark" className='Table' >
                <thead>
                    <tr>
                        <th>Id</th><th>Name</th><th>Post</th><th>Salary</th><th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employee.map((val,index)=>{
                            return <tr key={index}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.post}</td>
                                <td>{val.salary}</td>
                                <td>{val.gender}</td>
                            </tr>
                        })
                    }
                </tbody>
                </Table>
            </div>
        )
    }
}
