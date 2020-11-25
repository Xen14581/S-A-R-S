package com.example.restdemo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FetchSlots extends CrudRepository<Slots,Integer> {
    
    @Override
    List<Slots> findAll();
}
