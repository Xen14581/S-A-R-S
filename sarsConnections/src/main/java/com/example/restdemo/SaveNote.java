package com.example.restdemo;

import org.springframework.stereotype.Component;

@Component
public interface SaveNote {
    public Notes saveNote(Notes note);
}
