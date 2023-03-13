package com.axis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.axis.entity.Student;
import com.axis.repository.StudentRepository;
import com.axis.service.StudentService;

@CrossOrigin("http://localhost:3000")
@RestController
public class StudentController {
	
	@Autowired
	private StudentService studentService;
	
	@Autowired
	StudentRepository studentRepository;
	
	@PostMapping("/students")
	ResponseEntity<Student> addStudent(@RequestBody Student student){
		return new ResponseEntity<Student>(studentService.addStudent(student), HttpStatus.OK);
	}
	
	@GetMapping("/students")
	ResponseEntity<List<Student>> getAllStudents(){
		return new ResponseEntity<List<Student>>(studentService.getAllStudents(), HttpStatus.OK);
	}
	
	@GetMapping("/students/{id}")
	ResponseEntity<Student> getStudentById(@PathVariable Long id){
		return new ResponseEntity<Student>(studentService.getStudentById(id), HttpStatus.OK);
	}
	
	@PutMapping("/students/{id}")
	ResponseEntity<Student> updateStudentById(@PathVariable Long id, @RequestBody Student student){
		return new ResponseEntity<Student>(studentService.updateStudentById(id, student), HttpStatus.OK);
	}
	
	@DeleteMapping("/students/{id}")
	ResponseEntity<String> deleteStudentById(@PathVariable Long id){
		return new ResponseEntity<String>(studentService.deleteStudentById(id), HttpStatus.OK);
	}
	
	@GetMapping("/students/fees")
	public ResponseEntity<Double> getTotalStudentFees() {
	    double totalFees = 0.0;
	    List<Student> students = studentRepository.findAll();
	    for (Student student : students) {
	        totalFees += student.getFees();
	    }
	    System.out.println(totalFees);
	    return ResponseEntity.ok(totalFees);
	}
	
	@GetMapping("/allStudents/{id}")
	ResponseEntity<Student> getAllStudentsBySchoolId(@PathVariable Long id){
		return new ResponseEntity<Student>(studentService.getAllStudentsBySchoolId(id), HttpStatus.OK);
	}
}
