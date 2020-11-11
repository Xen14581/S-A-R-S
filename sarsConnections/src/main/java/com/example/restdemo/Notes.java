package com.example.restdemo;

import javax.persistence.*;

@Entity
@Table(name = "notes")
public class Notes {

    @Id
    @Column(name = "a_id")
    Integer a_id;

    @Column(name = "note")
    String note;

    // @OneToOne
    // private Appointment appointment;

    public Notes(){
    }

    public Notes(Integer a_id, String note){
        super();
        this.a_id = a_id;
        this.note = note;
    }

    public Integer getA_id() {
        return this.a_id;
    }

    public void setA_id(Integer a_id) {
        this.a_id = a_id;
    }

    public String getNote() {
        return this.note;
    }

    public void setNote(String note) {
        this.note = note;
    }

}
