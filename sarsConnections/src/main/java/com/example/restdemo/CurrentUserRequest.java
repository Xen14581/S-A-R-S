package com.example.restdemo;

import java.io.Serializable;

public class CurrentUserRequest implements Serializable{
    
    private String email;


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    public CurrentUserRequest(){
    }

    public CurrentUserRequest(String email){
        this.setEmail(email);
    }
}
