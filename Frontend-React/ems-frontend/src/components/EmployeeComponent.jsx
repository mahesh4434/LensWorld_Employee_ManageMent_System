import React, { useState } from 'react'

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');


    function saveEmployee(e) {
        e.preventDefault();
        const employee = { firstName, lastName, email };
        console.log(employee);
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2 className="text-center mt-3">Add Employee</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">First Name:</label>
                                    <input type="text" className="form-control"
                                        placeholder="Enter first name"
                                        value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Last Name:</label>
                                    <input type="text" className="form-control"
                                        placeholder="Enter last name"
                                        value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Email:</label>
                                    <input type="email" className="form-control"
                                        placeholder="Enter email"
                                        value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <button className="btn btn-success mt-2" onClick={saveEmployee}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeComponent
