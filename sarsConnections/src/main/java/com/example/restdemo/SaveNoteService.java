package com.example.restdemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SaveNoteService implements SaveNote {

    @Autowired
    private FetchNotes fetchNotes;

    @Transactional
    public Notes saveNote(Notes note){
        Notes noteResponse = fetchNotes.save(note);
        return noteResponse;
    }
    
}
