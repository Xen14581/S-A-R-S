package com.example.restdemo;

import org.springframework.stereotype.Component;

@Component
public interface SaveShifts {
    public Shifts saveShifts(Shifts shifts);
}
