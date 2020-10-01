import React, { Component } from 'react';
import employees from '../employees.json';

class Content extends Component {

    state = {
        employees
    };


    render () {
        return(
            <div>
                <p>Input search bar here</p>
                <table className='table table-striped table-hover'>
                    <thead className='thead-secondary'>
                        <tr>
                            <th>Profile Pic</th>
                            <th>Name</th>
                            <th>DOB</th>
                            <th>Position</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(employee => {
                            return (
                                <tr key={employee.id}>
                                    <td>
                                        {/* <img alt='pic' src={employee.image}></img> */}
                                    </td>
                                    <td>{employee.name}</td>
                                    <td>{employee.dob}</td>
                                    <td>{employee.occupation}</td>
                                    <td>{employee.phone}</td>
                                    <td>{employee.email}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

};

export default Content;


