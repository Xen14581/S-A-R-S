package com.example.restdemo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FetchSlots extends CrudRepository<Slots,Integer> {
    
    @Override
    List<Slots> findAll();

    @Query(value = "Select distinct s.id, s.day, s.slot_start, s.slot_end from Slots s where s.id = :id and s.day = :day ")
	List<?> findByIdAndDay(Integer id, String day);
}
