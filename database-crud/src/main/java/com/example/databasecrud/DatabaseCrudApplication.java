package com.example.databasecrud;

import com.example.databasecrud.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DatabaseCrudApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(DatabaseCrudApplication.class, args);
	}

	@Autowired
	private StudentRepository studentRepository;

	@Override
	public void run(String... args) throws Exception {
//		Student student = new Student();
//		student.setFirstname("Shaswat");
//		student.setLastname("Pradhan");
//		student.setEmailId("Saswat102@gmail.com");
//		studentRepository.save(student);
//
//		Student student1 = new Student();
//		student1.setFirstname("Archita");
//		student1.setLastname("Aparupa Barik");
//		student1.setEmailId("201610110002@cutm.ac.in");
//		studentRepository.save(student1);
	}
}
