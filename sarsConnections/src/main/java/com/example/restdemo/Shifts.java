package com.example.restdemo;

import javax.persistence.*;

@Entity
@Table(name = "shifts")
public class Shifts {

    @Id
    @Column(name = "d_id")
    Integer d_id;

    @Column(name = "day")
    String day;

    @Column(name = "shift_start")
    String shift_start;

    @Column(name = "shift_end")
    String shift_end;

    public Integer getD_id() {
        return this.d_id;
    }

    public void setD_id(Integer d_id) {
        this.d_id = d_id;
    }

    public String getDay() {
        return this.day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public String getShift_start() {
        return this.shift_start;
    }

    public void setShift_start(String shift_start) {
        this.shift_start = shift_start;
    }

    public String getShift_end() {
        return this.shift_end;
    }

    public void setShift_end(String shift_end) {
        this.shift_end = shift_end;
    }

}
