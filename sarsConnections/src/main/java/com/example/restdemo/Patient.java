package com.example.restdemo;

import javax.persistence.*;

@Entity
@Table(name = "patient")
public class Patient {

    @Id
    @Column(name = "id")
    Integer id;

    @Column(name = "first_name")
    String first_name;

    @Column(name = "last_name")
    String last_name;

    @Column(name = "dob")
    String dob;

    @Column(name = "ph_no")
    String ph_no;

    // @OneToOne
    // private User user;

    public Patient(){
    }

    public Patient(Integer id, String first_name, String last_name, String dob, String ph_no){
        super();
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.ph_no = ph_no;
    }    

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirst_name() {
        return this.first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return this.last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getDob() {
        return this.dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getPh_no() {
        return this.ph_no;
    }

    public void setPh_no(String ph_no) {
        this.ph_no = ph_no;
    }

}
