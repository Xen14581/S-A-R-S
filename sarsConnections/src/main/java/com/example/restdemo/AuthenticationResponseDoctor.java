package com.example.restdemo;

import java.io.Serializable;

public class AuthenticationResponseDoctor implements Serializable{

    private final User user;
    private final String jwt;
    private final Doctor doctor;

    public AuthenticationResponseDoctor(User user, String jwt, Doctor doctor){
        this.user = user;
        this.jwt = jwt;
        this.doctor = doctor;
    }

    public User getUser() {
        return user;
    }

    public String getJwt() {
        return jwt;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    
}
