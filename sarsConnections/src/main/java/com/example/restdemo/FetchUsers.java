package com.example.restdemo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FetchUsers extends CrudRepository<User,Integer> {

    @Override
    List<User> findAll();
    Optional<User> findByEmail(String email);

}
