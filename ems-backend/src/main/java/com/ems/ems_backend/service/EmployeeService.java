package com.ems.ems_backend.service;

import com.ems.ems_backend.dto.EmployeeDto;
import com.ems.ems_backend.entity.Employee;
import java.util.List;

public interface EmployeeService {

    EmployeeDto createEmployee(EmployeeDto employeeDto);
    EmployeeDto getEmployeeById(Long id);
    List< EmployeeDto> getAllEmpolyess();
    String  deleteEmployeeById(Long id);
    EmployeeDto updateEmployee(Long id, EmployeeDto updatedEmployeeDto);
}
