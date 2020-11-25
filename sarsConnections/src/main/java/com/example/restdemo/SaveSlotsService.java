package com.example.restdemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SaveSlotsService implements SaveSlots {

    @Autowired
    private FetchSlots fetchSlots;

    @Transactional
    public Slots saveSlots(Slots slot){
        Slots slotResponse = fetchSlots.save(slot);
        return slotResponse;
    }
    
}
