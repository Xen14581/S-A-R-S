package com.example.restdemo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FetchDoctors extends CrudRepository<Doctor,Integer> {
    
    @Override
    List<Doctor> findAll();
}
