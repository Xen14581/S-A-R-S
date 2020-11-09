package com.example.restdemo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FetchMedications extends CrudRepository<Medications,Integer> {
    
    @Override
    List<Medications> findAll();
}
