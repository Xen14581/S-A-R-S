package com.example.restdemo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FetchPatients extends CrudRepository<Patient,Integer> {
    
    @Override
    List<Patient> findAll();
    Optional<Patient> findById(Integer id);
}
