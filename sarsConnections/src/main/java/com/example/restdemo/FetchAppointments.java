package com.example.restdemo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FetchAppointments extends CrudRepository<Appointment,Integer> {
    
    @Override
    List<Appointment> findAll();

	Optional<Appointment> findById(Integer id);
}
