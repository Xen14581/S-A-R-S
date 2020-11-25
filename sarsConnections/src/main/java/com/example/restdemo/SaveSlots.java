package com.example.restdemo;

import org.springframework.stereotype.Component;

@Component
public interface SaveSlots {
    public Slots saveSlots(Slots slots);
}
