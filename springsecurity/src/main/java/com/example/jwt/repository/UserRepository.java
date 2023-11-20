package com.example.jwt.repository;

import com.example.jwt.entities.Role;
import com.example.jwt.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {


    Optional<User> findByEmail(String email);

    User findByRole(Role role);
}
