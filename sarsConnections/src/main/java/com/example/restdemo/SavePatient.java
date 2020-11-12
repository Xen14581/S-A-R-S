package com.example.restdemo;

import org.springframework.stereotype.Component;

@Component
public interface SavePatient {
    public Patient savePatient(Patient patient);
}
