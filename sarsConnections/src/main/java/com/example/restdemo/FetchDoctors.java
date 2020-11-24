package com.example.restdemo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FetchDoctors extends CrudRepository<Doctor,Integer> {
    
    @Override
    List<Doctor> findAll();
    Optional<Doctor> findById(Integer id);
}
