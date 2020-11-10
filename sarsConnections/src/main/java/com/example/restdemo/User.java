package com.example.restdemo;

import javax.persistence.*;

import org.springframework.http.ResponseEntity;

@Entity
@Table(name = "mp_user")
public class User{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    Integer id;

    @Column(name = "first_name")
    String first_name;

    @Column(name = "last_name")
    String last_name;
    
    @Column(name="gender")
    String gender;

    @Column(name = "dob")
    String dob;

    @Column(name = "email")
    String email;

    @Column(name = "ph_no")
    String ph_no;

    @Column(name = "password")
    String password;

    @Column(name = "role")
    String role;
    public User(){
        
    }
        public User( String first_name,String last_name,String gender, String dob, String email,
             String ph_no, String password, String role) {
        super();     
                this.first_name=first_name;
                this.last_name=last_name;
                this.gender=gender;
                this.dob = dob;
                this.email=email;
                this.ph_no=ph_no;
                this.password=password;
                this.role=role;    
     }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
   
    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPh_no() {
        return ph_no;
    }

    public void setPh_no(String ph_no) {
        this.ph_no = ph_no;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
    // create a function to connect to jdbc using the u1 object

}