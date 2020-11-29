package com.example.restdemo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FetchMedications extends CrudRepository<Medications,Integer> {
    
    @Query("Select med From Medications med Where med.a_id = :a_id")
    List<Medications> findByA_id(Integer a_id);
}
