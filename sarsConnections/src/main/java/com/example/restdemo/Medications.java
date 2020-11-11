package com.example.restdemo;

import javax.persistence.*;

@Entity
@Table(name = "medications")
public class Medications {

    @Id
    @Column(name = "a_id")
    Integer a_id;
    
    @Column(name = "med_name")
    String med_name;

    @Column(name = "med_str")
    String med_str;

    @Column(name = "med_dosage")
    String med_dosage;

    // @ManyToOne()
    // @Id @JoinColumn(name = "a_id")
    // private Appointment appointment;

    public Medications(){
    }

    public Medications(String med_name, String med_str, String med_dosage){
        super();
        this.med_name = med_name;
        this.med_str = med_str;
        this.med_dosage = med_dosage;
    }

    public String getMed_name() {
        return this.med_name;
    }

    public void setMed_name(String med_name) {
        this.med_name = med_name;
    }

    public String getMed_str() {
        return this.med_str;
    }

    public void setMed_str(String med_str) {
        this.med_str = med_str;
    }

    public String getMed_dosage() {
        return this.med_dosage;
    }

    public void setMed_dosage(String med_dosage) {
        this.med_dosage = med_dosage;
    }

}
