package com.example.restdemo;

import org.springframework.stereotype.Component;

@Component
public interface SaveUser {
    public User saveUser(User user);
    // public String saveJwt(String jwt);
}
