package com.example.jwt.service;

import com.example.jwt.dto.JwtAuthenticationResponse;
import com.example.jwt.dto.RefreshTokenRequest;
import com.example.jwt.dto.SignUpRequest;
import com.example.jwt.dto.SigninRequest;
import com.example.jwt.entities.User;

public interface AuthenticationService {

    User signup(SignUpRequest signUpRequest);
    JwtAuthenticationResponse signin(SigninRequest signinRequest);

    JwtAuthenticationResponse refreshToken(RefreshTokenRequest refreshTokenRequest);
}
