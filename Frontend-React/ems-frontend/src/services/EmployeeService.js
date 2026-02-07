import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/employees';

// Get all employees
export const listEmployees = () => {
    return axios.get(`${BASE_URL}/AllEmployees`);
};

// Create employee
export const createEmployee = (employee) => {
    return axios.post(`${BASE_URL}/add`, employee);
};

export const getEmployeeById = (id) => {
    return axios.get(`${BASE_URL}/${id}`);
}

export const updateEmployee = (id, employee) => {
    return axios.put(`${BASE_URL}/update/${id}`, employee);
}

export const deleteEmployee = (id) => {
    return axios.delete(`${BASE_URL}/delete/${id}`);
}