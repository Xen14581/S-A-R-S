package com.example.restdemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class Controller {

    @Autowired
    FetchUsers fetchUser;
    @Autowired
    SaveUser saveUser;
    @Autowired
    FetchDoctors fetchDoctor;
    @Autowired
    FetchPatients fetchPatient;
    @Autowired
    FetchAppointments fetchAppointments;
    @Autowired
    FetchMedications fetchMedications;
    @Autowired
    FetchNotes fetchNotes;
    @Autowired
    FetchShifts fetchShifts;

    @GetMapping(path = "getUsers")
    Iterable<User> getUsers() {
        return fetchUser.findAll();
    }

    @PostMapping(path = "addUser")
    public User addUser (@RequestBody User u){
        User userResponse = (User) saveUser.saveUser(u);
        return userResponse;
    }

    @GetMapping(path = "getDoctors")
    List<Doctor> getDoctor(){
        return fetchDoctor.findAll();
    }
    @PostMapping(path = "addDoctor")
    public String addDoctor (@RequestBody Doctor d){
                                            d = fetchDoctor.save(d);
                                            return "Saved";
                                         }

    @GetMapping(path = "getPatients")
    List<Patient> getPatient(){
        return fetchPatient.findAll();
    }
    @PostMapping(path = "addPatient")
    public String addPatient (@RequestBody Patient p){
                                                p = fetchPatient.save(p);
                                                return "Saved";
                                            }

    @GetMapping(path = "getAppointments")
    List<Appointment> getAppointments(){
        return fetchAppointments.findAll();
    }
    @PostMapping(path = "addAppointments")
    public String addAppointment (@RequestBody Appointment a){
                                            a = fetchAppointments.save(a);
                                            return "Saved";
                                        }

    @GetMapping(path = "getMedications")
    List<Medications> getMedications(){
        return fetchMedications.findAll();
    }
    @PostMapping(path = "addMedications")
    public String addMedication (@RequestBody Medications m){
                                                m = fetchMedications.save(m);
                                                return "Saved";
                                               }

    @GetMapping(path = "getNotes")
    List<Notes> getNotes(){
        return fetchNotes.findAll();
    }
    @PostMapping(path = "addNotes")
    public String addNotes (@RequestBody Notes n){
                                                n = fetchNotes.save(n);
                                                return "Saved";
                                               }

    @GetMapping(path = "getShifts")
    List<Shifts> getShifts(){
        return fetchShifts.findAll();
    }
    @PostMapping(path = "addShifts")
    public String addShifts (@RequestBody Shifts s){
                                                s = fetchShifts.save(s);
                                                return "Saved";
                                               }
}