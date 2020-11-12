package com.example.restdemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SaveShiftsService implements SaveShifts {

    @Autowired
    private FetchShifts fetchShifts;

    @Transactional
    public Shifts saveShifts(Shifts shift){
        Shifts shiftResponse = fetchShifts.save(shift);
        return shiftResponse;
    }
    
}
