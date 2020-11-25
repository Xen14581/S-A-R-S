package com.example.restdemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SaveMedicationsService implements SaveMedications {

    @Autowired
    private FetchMedications fetchMedications;

    @Transactional
    public Medications saveMedications(Medications medications){
        Medications medicationsResponse = fetchMedications.save(medications);
        return medicationsResponse;
    }
}
