package com.ems.ems_backend.entity;


import jakarta.persistence.*;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY) //This Will auto increment the id field will
                                                                           // help us to create primary key
    private Long id;
    @Column(name = "first_name", nullable = false)// this will create a column named first_name in the
       // table and mapped to firstName field if you dont provide name it will take the field name as column name (firstName)
    private String firstName;
    @Column(name = "last_name", nullable = false)
    private String lastName;
    @Column(name = "email", nullable = false, unique = true)
    private String email;

}
