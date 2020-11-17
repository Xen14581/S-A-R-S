package com.example.restdemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SaveUserService implements SaveUser {

    @Autowired
    private FetchUsers fetchUsers;
    @Autowired
    private SecurityConfiguration securityConfiguration;

    @Transactional
    public User saveUser(User user){
        user.setPassword(securityConfiguration.passwordEncoder().encode(user.getPassword()));
        User userResponse = fetchUsers.save(user);
        return userResponse;
    }
    
}
