package com.example.restdemo;

// import java.util.HashSet;
// import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "appointment")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "a_id")
    Integer a_id;

    @Column(name = "a_datetime")
    String a_datetime;

    @Column(name = "d_id")
    Integer d_id;

    @Column(name = "p_id")
    Integer p_id;

    public Integer getA_id() {
        return this.a_id;
    }

    public void setA_id(Integer a_id) {
        this.a_id = a_id;
    }

    public String getA_datetime() {
        return this.a_datetime;
    }

    public void setA_datetime(String a_datetime) {
        this.a_datetime = a_datetime;
    }

    public Integer getD_id() {
        return this.d_id;
    }

    public void setD_id(Integer d_id) {
        this.d_id = d_id;
    }

    public Integer getP_id() {
        return this.p_id;
    }

    public void setP_id(Integer p_id) {
        this.p_id = p_id;
    }

}
