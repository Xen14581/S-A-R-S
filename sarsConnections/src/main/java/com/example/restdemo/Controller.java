package com.example.restdemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
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

    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    MyUserDetailsService userDetailsService;
    @Autowired
    JwtUtil jwtTokenUtil;
    
    @GetMapping("/")
    public String home() {
        return ("<h1>Welcome</h1>");
    }

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
    public Doctor addDoctor (@RequestBody Doctor d){
        Doctor doctorResponse = (Doctor) fetchDoctor.save(d);
        return doctorResponse;
    }

    @GetMapping(path = "getPatients")
    List<Patient> getPatient(){
        return fetchPatient.findAll();
    }
    @PostMapping(path = "addPatient")
    public Patient addPatient (@RequestBody Patient p){
        Patient patientResponse = (Patient) fetchPatient.save(p);
        return patientResponse;
    }

    @GetMapping(path = "getAppointments")
    List<Appointment> getAppointments(){
        return fetchAppointments.findAll();
    }
    @PostMapping(path = "addAppointments")
    public Appointment addAppointment (@RequestBody Appointment a){
        Appointment appointmentResponse = (Appointment) fetchAppointments.save(a);
        return appointmentResponse;
    }

    @GetMapping(path = "getMedications")
    List<Medications> getMedications(){
        return fetchMedications.findAll();
    }
    @PostMapping(path = "addMedications")
    public Medications addMedication (@RequestBody Medications m){
        Medications medicationResponse = (Medications) fetchMedications.save(m);
        return medicationResponse;
    }

    @GetMapping(path = "getNotes")
    List<Notes> getNotes(){
        return fetchNotes.findAll();
    }
    @PostMapping(path = "addNotes")
    public Notes addNotes (@RequestBody Notes n){
        Notes noteResponse = (Notes) fetchNotes.save(n);
        return noteResponse;
    }

    @GetMapping(path = "getShifts")
    List<Shifts> getShifts(){
        return fetchShifts.findAll();
    }
    @PostMapping(path = "addShifts")
    public Shifts addShifts (@RequestBody Shifts s){
        Shifts shiftResponse = (Shifts) fetchShifts.save(s);
        return shiftResponse;
    }

    @PostMapping(path = "authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {

		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
			);
		}
		catch (BadCredentialsException e) {
			throw new Exception("Incorrect username or password", e);
		}


        final MyUserDetails myUserDetails = (MyUserDetails) userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
        
        User user = fetchUser.findByEmail(myUserDetails.getUsername()).get();

        if (user.getJwt() != null){

            return ResponseEntity.ok(new AuthenticationResponse(user, user.getJwt()));

        } else {

            final String jwt = jwtTokenUtil.generateToken(myUserDetails);
            
            user.setJwt(jwt);
            fetchUser.save(user);

            return ResponseEntity.ok(new AuthenticationResponse(user, user.getJwt()));
        }
	}

}