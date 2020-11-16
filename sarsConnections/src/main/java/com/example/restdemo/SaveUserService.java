package com.example.restdemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SaveUserService implements SaveUser {

    @Autowired
    private FetchUsers fetchUsers;

    @Transactional
    public User saveUser(User user){
        User userResponse = fetchUsers.save(user);
        return userResponse;
    }

    
    
}
