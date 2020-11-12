package com.example.restdemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SavePatientService implements SavePatient {

    @Autowired
    private FetchPatients fetchPatients;

    @Transactional
    public Patient savePatient(Patient patient){
        Patient patientResponse = fetchPatients.save(patient);
        return patientResponse;
    }
    
}
