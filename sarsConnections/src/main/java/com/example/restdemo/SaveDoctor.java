package com.example.restdemo;

import org.springframework.stereotype.Component;

@Component
public interface SaveDoctor {
    public Doctor saveDoctor(Doctor doctor);
}
