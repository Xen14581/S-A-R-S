package com.example.restdemo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FetchAppointments extends CrudRepository<Appointment,Integer> {
    
    @Override
    List<Appointment> findAll();
}
