package com.example.restdemo;

import javax.persistence.*;

@Entity
@Table(name = "slots")
public class Slots {

    @Id
    @Column(name = "d_id")
    Integer d_id;

    @Column(name = "day")
    String day;

    @Column(name = "slot_start")
    String slot_start;

    @Column(name = "slot_end")
    String slot_end;

    public Slots(){
    }
    
    public Slots(Integer d_id, String day, String slot_start, String slot_end){
        super();
        this.d_id = d_id;
        this.day = day;
        this.slot_start = slot_start;
        this.slot_end = slot_end;
    }

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

    public String getSlot_start() {
        return this.slot_start;
    }

    public void setSlot_start(String slot_start) {
        this.slot_start = slot_start;
    }

    public String getSlot_end() {
        return this.slot_end;
    }

    public void setSlot_end(String slot_end) {
        this.slot_end = slot_end;
    }

}
