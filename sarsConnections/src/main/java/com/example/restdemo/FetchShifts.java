package com.example.restdemo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FetchShifts extends CrudRepository<Shifts,Integer> {
    
    @Override
    List<Shifts> findAll();
}
