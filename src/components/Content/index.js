import React, { Component } from 'react';
// import employees from '../employees.json';

export default class Content extends Component {

    state = {
        employees: [],
        allEmployees: []
    };

    componentDidMount() {
        fetch('../employees.json')
        .then(function (response) {
            return response.json();
          })
        .then((response) => {
            this.setState({
                employees: response,
                allEmployees: response
            })
        })
        .catch((error) => {
            console.log(error)
        });
    };


    sortPosition = (event) => {
        const position = event.target.value;
        if (position === 'All') {
            this.setState({ employees: this.state.allEmployees });
        } else {
            this.setState({
                employees: this.state.allEmployees.filter(function (employee) {
                    if (employee.team === position) {
                        return true;
                    }
                    return false;
                  }),
            });
        }
    };

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
                    <label>Sort by position:</label>
                    <select onChange={this.sortPosition} id='position'>
                        <option value='All'>All</option>
                        <option value='Senior Dev'>Senior Dev</option>
                        <option value='Front End'>Front End</option>
                        <option value='Back End'>Back End</option>
                        <option value='Full Stack'>Full Stack</option>
                        <option value='Junior'>Junior Dev</option>
                    </select>
                </div>
                <div>
                    <label>Sort by birth date:</label>
                        <select onChange={this.sortDob}>
                            <option>Default</option>
                            <option value='Oldest'>Oldest</option>
                            <option value='Youngest'>Youngest</option>
                        </select>
                </div>
                <table className='table table-striped table-hover'>
                    <thead className='thead-secondary'>
                        <tr>
                            {/* <th>Profile Pic</th> */}
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
                                    <td>{employee.name}</td>
                                    <td>{employee.dob}</td>
                                    <td>{employee.team}</td>
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


