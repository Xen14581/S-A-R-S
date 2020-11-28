package com.example.restdemo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FetchSlots extends CrudRepository<Slots,Integer> {
    
    @Query("Select slot From Slots slot where slot.d_id = :d_id And slot.day = :day")
    List<Slots> findAll(Integer d_id, String day);

}
