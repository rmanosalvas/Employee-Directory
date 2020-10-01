import React from 'react';

function Content() {
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
            </table>
        </div>
    );
};

export default Content;


