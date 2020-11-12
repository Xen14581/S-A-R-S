package com.example.restdemo;

import org.springframework.stereotype.Component;

@Component
public interface SaveAppointment {
    public Appointment saveAppointment(Appointment appointment);
}
