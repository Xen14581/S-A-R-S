package com.example.restdemo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FetchUsers extends CrudRepository<User,Integer> {

    @Override
    List<User> findAll();

}
