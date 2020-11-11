package com.example.restdemo;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class DBAdd {
    EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("Users");
    EntityManager entityManager = entityManagerFactory.createEntityManager();
    
}
