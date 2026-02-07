import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })
    const navigate = useNavigate();
    function saveEmployee(e) {
        e.preventDefault();

        if (validateform()) {
            createEmployee
            const employee = { firstName, lastName, email };
            console.log(employee);
            createEmployee(employee).then((response) => {
                console.log(response.data);
                navigate('/employees');
            })
        }

    }
    function validateform() {
        let isValid = true;
        const errorsCopy = { ...errors };
        if (firstName.trim() === '') {
            errorsCopy.firstName = 'First name is required';
            isValid = false;
        } else {
            errorsCopy.firstName = '';
        }
        if (lastName.trim() === '') {
            errorsCopy.lastName = 'Last name is required';
            isValid = false;
        } else {
            errorsCopy.lastName = '';
        }
        if (email.trim() === '') {
            errorsCopy.email = 'Email is required';
            isValid = false;
        } else {
            errorsCopy.email = '';
        }
        setErrors(errorsCopy);
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
                                    <input type="text" className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                        placeholder="Enter first name"
                                        value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                    {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Last Name:</label>
                                    <input type="text" className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                        placeholder="Enter last name"
                                        value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                    {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Email:</label>
                                    <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        placeholder="Enter email"
                                        value={email} onChange={(e) => setEmail(e.target.value)} />
                                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
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
