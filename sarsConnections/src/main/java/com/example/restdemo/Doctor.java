package com.example.restdemo;

import javax.persistence.*;

@Entity
@Table(name = "doctor")
public class Doctor {
    
    @Id
    Integer id;
    
    @Column(name = "first_name")
    String first_name;

    @Column(name = "last_name")
    String last_name;

    @Column(name = "ph_no")
    String ph_no;

    @Column(name = "specialty")
    String specialty;

    // @OneToOne
    // private User user;

    public Doctor(){
    }

    public Doctor(Integer id, String first_name, String last_name, String ph_no, String specialty){
        super();
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.ph_no = ph_no;
        this.specialty = specialty;
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

    public String getPh_no() {
        return this.ph_no;
    }

    public void setPh_no(String ph_no) {
        this.ph_no = ph_no;
    }

    public String getSpecialty() {
        return this.specialty;
    }

    public void setSpecialty(String specialty) {
        this.specialty = specialty;
    }

}
