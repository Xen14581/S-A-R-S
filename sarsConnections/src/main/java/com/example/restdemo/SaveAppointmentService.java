package com.example.restdemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SaveAppointmentService implements SaveAppointment {

    @Autowired
    private FetchAppointments fetchAppointments;

    @Transactional
    public Appointment saveAppointment(Appointment appointment){
        Appointment appointmentResponse = fetchAppointments.save(appointment);
        return appointmentResponse;
    }
    
}
