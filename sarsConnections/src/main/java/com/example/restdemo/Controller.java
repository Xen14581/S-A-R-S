package com.example.restdemo;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Optional;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

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
    SaveDoctor saveDoctor;
    @Autowired
    FetchPatients fetchPatient;
    @Autowired
    SavePatient savePatient;
    @Autowired
    FetchAppointments fetchAppointments;
    @Autowired
    SaveAppointment saveAppointment;
    @Autowired
    FetchMedications fetchMedications;
    @Autowired
    SaveMedications saveMedications;
    @Autowired
    FetchNotes fetchNotes;
    @Autowired
    SaveNote saveNote;
    @Autowired
    FetchSlots fetchSlots;
    @Autowired
    SaveSlots saveSlots;

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

    @PostMapping(path = "addUser")
    public User addUser(@RequestBody User u, @RequestBody MultipartFile image, RedirectAttributes redirectAttributes)
            throws IOException {
        u.setPfp(compressBytes(image.getBytes()));
        User userResponse = (User) saveUser.saveUser(u);
        return userResponse;
    }

    @GetMapping(path = "getDoctors")
    ResponseEntity<?> getDoctor() {
        return ResponseEntity.ok(fetchDoctor.findAll());
    }

    @PostMapping(path = "addDoctor")
    public Doctor addDoctor(@RequestBody Doctor d) {
        Doctor doctorResponse =  saveDoctor.saveDoctor(d);
        return doctorResponse;
    }

    @GetMapping(path = "getPatients")
    ResponseEntity<?> getPatient() {
        return ResponseEntity.ok(fetchPatient.findAll());
    }

    @PostMapping(path = "addPatient")
    public Patient addPatient(@RequestBody Patient p) {
        Patient patientResponse = (Patient) savePatient.savePatient(p);
        return patientResponse;
    }

    @GetMapping(path = "getAppointments")
    ResponseEntity<?> getAppointments() {
        return ResponseEntity.ok(fetchAppointments.findAll());
    }

    @PostMapping(path = "addAppointments")
    public Appointment addAppointment(@RequestBody Appointment a) {
        Appointment appointmentResponse = (Appointment) saveAppointment.saveAppointment(a);
        return appointmentResponse;
    }

    @GetMapping(path = "getMedications")
    ResponseEntity<?> getMedications() {
        return ResponseEntity.ok(fetchMedications.findAll());
    }

    @PostMapping(path = "addMedications")
    public Medications addMedication(@RequestBody Medications m) {
        Medications medicationResponse = (Medications) saveMedications.saveMedications(m);
        return medicationResponse;
    }

    @GetMapping(path = "getNotes")
    ResponseEntity<?> getNotes() {
        return ResponseEntity.ok(fetchNotes.findAll());
    }

    @PostMapping(path = "addNotes")
    public Notes addNotes(@RequestBody Notes n) {
        Notes noteResponse = (Notes) saveNote.saveNote(n);
        return noteResponse;
    }

    @CrossOrigin
    @GetMapping(path = "getSlots/{d_id}/{day}")
    ResponseEntity<?> getSlots(@PathVariable(name = "d_id") Integer d_id, @PathVariable(name = "day") String day) {
        return ResponseEntity.ok(fetchSlots.findAll(d_id, day));
    }

    @PostMapping(path = "addSlots")
    public Slots addSlots(@RequestBody Slots s) {
        Slots slotResponse = (Slots) saveSlots.saveSlots(s);
        return slotResponse;
    }

    @PostMapping(path = "authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest)
            throws Exception {

        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    authenticationRequest.getUsername(), authenticationRequest.getPassword()));
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }

        final MyUserDetails myUserDetails = (MyUserDetails) userDetailsService
                .loadUserByUsername(authenticationRequest.getUsername());

        User user = fetchUser.findByEmail(myUserDetails.getUsername()).get();

        user.setPfp(decompressBytes(user.getPfp()));

        if (user.getJwt() != null) {

            return ResponseEntity.ok(new AuthenticationResponse(user, user.getJwt()));

        } else {

            final String jwt = jwtTokenUtil.generateToken(myUserDetails);

            user.setJwt(jwt);
            fetchUser.save(user);

            return ResponseEntity.ok(new AuthenticationResponse(user, user.getJwt()));
        }
    }

    @GetMapping(path = "getDoctor/{id}")
    public ResponseEntity<Optional<Doctor>> Doctordetails(@PathVariable(value = "id") Integer id) {

        Optional<Doctor> doctor = fetchDoctor.findById(id);
        return ResponseEntity.ok(doctor);

    }

    @GetMapping(path = "getNote/{id}")
    public ResponseEntity<?> Note(@PathVariable(value = "id") Integer id) {
        
        Optional<Notes> note = fetchNotes.findById(id);
        return ResponseEntity.ok(note);
    }

    @GetMapping(path = "getAppointment/{id}")
    public ResponseEntity<?> Appointment(@PathVariable(value = "id") Integer id) {
        
        Optional<Appointment> appointment = fetchAppointments.findById(id);
        return ResponseEntity.ok(appointment);
    }

    @GetMapping(path = "getPatient/{id}")
    public ResponseEntity<Optional<Patient>> Patientdetails(@PathVariable(value = "id") Integer id) {

        Optional<Patient> patient = fetchPatient.findById(id);
        return ResponseEntity.ok(patient);

    }

    public static byte[] compressBytes(byte[] data) {
		Deflater deflater = new Deflater();
		deflater.setInput(data);
        deflater.finish();
        
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
		byte[] buffer = new byte[1024];
		while (!deflater.finished()) {
			int count = deflater.deflate(buffer);
			outputStream.write(buffer, 0, count);
		}
		try {
			outputStream.close();
		} catch (IOException e) {
		}
		return outputStream.toByteArray();
    }
    
    public static byte[] decompressBytes(byte[] data) {
		Inflater inflater = new Inflater();
		inflater.setInput(data);
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
		byte[] buffer = new byte[1024];
		try {
			while (!inflater.finished()) {
				int count = inflater.inflate(buffer);
				outputStream.write(buffer, 0, count);
			}
			outputStream.close();
		} catch (IOException ioe) {
		} catch (DataFormatException e) {
		}
		return outputStream.toByteArray();
    }

}