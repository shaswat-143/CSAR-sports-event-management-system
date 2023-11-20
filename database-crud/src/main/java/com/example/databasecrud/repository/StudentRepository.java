package com.example.databasecrud.repository;

import com.example.databasecrud.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
    //all crud database methods
}
