package com.ems.ems_backend.repository;

import com.ems.ems_backend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long>//1st parameter is the entity type means the class which is mapped to the table
                                                                        // 2nd is the primary key type of that entity(table)
{

}
