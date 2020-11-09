package com.example.restdemo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FetchNotes extends CrudRepository<Notes,Integer> {
    
    @Override
    List<Notes> findAll();
}
