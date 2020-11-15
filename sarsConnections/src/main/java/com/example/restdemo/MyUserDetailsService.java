package com.example.restdemo;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    FetchUsers fetchUsers;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return new User("foo", "foo", new ArrayList<>());
        // Optional<User> user = fetchUsers.findByEmail(email);
        // user.orElseThrow(() -> new UsernameNotFoundException("Not found" + email));
        // return user.map(MyUserDetails::new).get();
    }
}