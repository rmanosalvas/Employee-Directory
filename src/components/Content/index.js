import React, { Component } from 'react';
// import employees from '../employees.json';

export default class Content extends Component {

    state = {
        employees: []
        // allEmployees: [],
        // isLoading: true,
    };

    componentDidMount() {
        fetch("../employees.json")
        .then(function (response) {
            return response.json();
          })
        .then((response) => {
            this.setState({
                employees: response
                // allEmployees: response,
                // isLoading: false
            })
        })
        .catch((error) => {
            console.log(error)
        });
    }
    
    sortDob = (event) => { 
        const dob = event.target.value;
        if (dob === 'Oldest') {
            this.setState({
                employees: this.state.employees.sort(function (a, b) {
                    var dateA = new Date(a.dob).getTime();
                    var dateB = new Date(b.dob).getTime();
                    return dateA > dateB ? 1 : -1;
                  })
            });
        } else if (dob === 'Youngest') {
            this.setState({
                employees: this.state.employees.sort(function (a, b) {
                    var dateA = new Date(a.dob).getTime();
                    var dateB = new Date(b.dob).getTime();
                    return dateA < dateB ? 1 : -1;
                  })
            }); 
        }
     };

    render () {
        return(
            <div>
                <p>Input search bar here</p>
                <div>
                    <label>Sort by birth date:</label>
                        <select onChange={this.sortDob}>
                            <option>Default</option>
                            <option value="Oldest">Oldest</option>
                            <option value="Youngest">Youngest</option>
                        </select>
                </div>
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
                        {this.state.employees.map(function (employee) {
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

}


