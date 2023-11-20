package com.example.jwt;

import com.example.jwt.entities.Role;
import com.example.jwt.entities.User;
import com.example.jwt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class SpringsecurityApplication implements CommandLineRunner {

	@Autowired
	private UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(SpringsecurityApplication.class, args);
	}

	public void run(String... args){
		User adminAccount = userRepository.findByRole(Role.ADMIN);
		if(null == adminAccount){
			User user = new User();

			user.setEmail("saswatpradhan102@gmail.com");
			user.setFirstname("saswat");
			user.setLastname("pradhan");
			user.setRole(Role.ADMIN);
			user.setPassword(new BCryptPasswordEncoder().encode("Archita"));
			userRepository.save(user);
		}
	}

}
