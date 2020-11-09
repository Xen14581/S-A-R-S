package com.example.restdemo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FetchPatients extends CrudRepository<Patient,Integer> {
    
    @Override
    List<Patient> findAll();
}
