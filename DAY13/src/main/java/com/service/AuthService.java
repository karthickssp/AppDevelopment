package com.service;

import com.dto.request.AuthenticationRequest;
import com.dto.request.RegisterRequest;
import com.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
