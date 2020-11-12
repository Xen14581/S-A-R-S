package com.example.restdemo;

import org.springframework.stereotype.Component;

@Component
public interface SaveMedications {
    public Medications saveMedications(Medications medications);
}
