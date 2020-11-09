package com.example.restdemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class Controller{

    @Autowired
    FetchUsers fetchUser;
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
    List<User> getUsers(){
        return fetchUser.findAll();
    }
    @PostMapping(path = "addUser")
    public @ResponseBody String addUser (@RequestParam String firstname, @RequestParam String lastname,
                                         @RequestParam String dob, @RequestParam String email, 
                                         @RequestParam String ph_no, @RequestParam String password, String role){
                                             User newUser = new User();
                                             newUser.first_name = firstname;
                                             newUser.last_name = lastname;
                                             newUser.dob = dob;
                                             newUser.email = email;
                                             newUser.ph_no = ph_no;
                                             newUser.password = password;
                                             newUser.role = role;
                                             return "Saved";
                                         }

    @GetMapping(path = "getDoctors")
    List<Doctor> getDoctor(){
        return fetchDoctor.findAll();
    }
    @PostMapping(path = "addDoctor")
    public @ResponseBody String addDoctor (@RequestParam Integer id, @RequestParam String firstname, @RequestParam String lastname,
                                           @RequestParam String ph_no, @RequestParam String specialty){
                                             Doctor newDoctor = new Doctor();
                                             newDoctor.id = id;
                                             newDoctor.first_name = firstname;
                                             newDoctor.last_name = lastname;
                                             newDoctor.ph_no = ph_no;
                                             newDoctor.specialty = specialty;
                                             return "Saved";
                                         }

    @GetMapping(path = "getPatients")
    List<Patient> getPatient(){
        return fetchPatient.findAll();
    }
    @PostMapping(path = "addPatient")
    public @ResponseBody String addPatient (@RequestParam Integer id, @RequestParam String firstname, @RequestParam String lastname,
                                            @RequestParam String dob, @RequestParam String ph_no){
                                                Patient newPatient = new Patient();
                                                newPatient.id = id;
                                                newPatient.first_name = firstname;
                                                newPatient.last_name = lastname;
                                                newPatient.dob = dob;
                                                newPatient.ph_no = ph_no;
                                                return "Saved";
                                            }

    @GetMapping(path = "getAppointments")
    List<Appointment> getAppointments(){
        return fetchAppointments.findAll();
    }
    @PostMapping(path = "addAppointments")
    public @ResponseBody String addAppointment (@RequestParam String datetime, @RequestParam Integer d_id, @RequestParam Integer p_id){
                                            Appointment newAppointment = new Appointment();
                                            newAppointment.a_datetime = datetime;
                                            newAppointment.d_id = d_id;
                                            newAppointment.p_id = p_id;
                                            return "Saved";
                                        }

    @GetMapping(path = "getMedications")
    List<Medications> getMedications(){
        return fetchMedications.findAll();
    }
    @PostMapping(path = "addMedications")
    public @ResponseBody String addMedication (@RequestParam Integer a_id, @RequestParam String med_name,
                                               @RequestParam String med_str, @RequestParam String med_dosage){
                                                   Medications newMedication = new Medications();
                                                   newMedication.a_id = a_id;
                                                   newMedication.med_name = med_name;
                                                   newMedication.med_str = med_str;
                                                   newMedication.med_dosage = med_dosage;
                                                   return "Saved";
                                               }

    @GetMapping(path = "getNotes")
    List<Notes> getNotes(){
        return fetchNotes.findAll();
    }
    @PostMapping(path = "addNotes")
    public @ResponseBody String addNotes (@RequestParam Integer a_id, @RequestParam String note){
                                                   Notes newNote = new Notes();
                                                   newNote.a_id = a_id;
                                                   newNote.note = note;
                                                   return "Saved";
                                               }

    @GetMapping(path = "getShifts")
    List<Shifts> getShifts(){
        return fetchShifts.findAll();
    }
    @PostMapping(path = "addShifts")
    public @ResponseBody String addShifts (@RequestParam Integer d_id, @RequestParam String day,
                                               @RequestParam String shift_start, @RequestParam String shift_end){
                                                   Shifts newShift = new Shifts();
                                                   newShift.d_id = d_id;
                                                   newShift.day = day;
                                                   newShift.shift_start = shift_start;
                                                   newShift.shift_end = shift_end;
                                                   return "Saved";
                                               }
}