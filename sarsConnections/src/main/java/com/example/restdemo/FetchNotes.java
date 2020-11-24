package com.example.restdemo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FetchNotes extends CrudRepository<Notes,Integer> {
    
    @Override
    List<Notes> findAll();
	Optional<Notes> findById(Integer id);
}
