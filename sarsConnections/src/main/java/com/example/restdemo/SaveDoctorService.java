package com.example.restdemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SaveDoctorService implements SaveDoctor {

    @Autowired
    private FetchDoctors fetchDoctors;

    @Transactional
    public Doctor saveDoctor(Doctor doctor){
        Doctor doctorResponse = fetchDoctors.save(doctor);
        return doctorResponse;
    }
    
}
