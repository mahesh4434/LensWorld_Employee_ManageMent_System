import React, { useEffect, useState } from 'react';
import { createEmployee, getEmployeeById, updateEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const { id } = useParams();
    const navigate = useNavigate();

    // Fetch employee for update
    useEffect(() => {
        if (id) {
            getEmployeeById(id)
                .then((response) => {
                    setFirstName(response.data.firstName);
                    setLastName(response.data.lastName);
                    setEmail(response.data.email);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [id]);

    // Save or Update employee
    function saveOrUpdateEmployee(e) {
        e.preventDefault();

        const employee = { firstName, lastName, email };

        if (validateForm()) {
            if (id) {
                updateEmployee(id, employee)
                    .then(() => {
                        navigate('/employees');
                    })
                    .catch(error => {
                        console.log(error);
                    });
            } else {
                createEmployee(employee)
                    .then(() => {
                        navigate('/employees');
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    }

    // Validation
    function validateForm() {
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
        return isValid;
    }

    // Page title
    function pageTitle() {
        return (
            <h2 className="text-center mt-3">
                {id ? 'Update Employee' : 'Add Employee'}
            </h2>
        );
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        {pageTitle()}
                        <div className="card-body">
                            <form onSubmit={saveOrUpdateEmployee}>

                                <div className="form-group mb-2">
                                    <label className="form-label">First Name</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                        placeholder="Enter first name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    {errors.firstName && (
                                        <div className="invalid-feedback">{errors.firstName}</div>
                                    )}
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Last Name</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                        placeholder="Enter last name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    {errors.lastName && (
                                        <div className="invalid-feedback">{errors.lastName}</div>
                                    )}
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {errors.email && (
                                        <div className="invalid-feedback">{errors.email}</div>
                                    )}
                                </div>

                                <button type="submit" className="btn btn-success mt-3 w-100">
                                    {id ? 'Update' : 'Submit'}
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeComponent;
