package com.example.restdemo;

import java.io.Serializable;

public class AuthenticationResponse implements Serializable {

    private final User user;
    private final String jwt;

    public AuthenticationResponse(User user, String jwt) {
        this.user = user;
        this.jwt = jwt;
    }

    public String getJwt() {
        return jwt;
    }

    public User getUser() {
        return user;
    }
    
}