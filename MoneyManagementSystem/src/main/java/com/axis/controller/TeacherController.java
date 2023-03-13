package com.axis.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.axis.entity.Teacher;
import com.axis.exception.IdNotFoundException;
import com.axis.repository.TeacherRepository;
import com.axis.service.TeacherService;

@CrossOrigin("http://localhost:3000")
@RestController
public class TeacherController {
	
	@Autowired
	private TeacherService teacherService;
	
	@Autowired
	TeacherRepository teacherRepository;
	
	@PostMapping("/teachers")
	ResponseEntity<Teacher> addTeacher(@RequestBody Teacher teacher)
    {
        return new ResponseEntity<Teacher>(teacherService.addTeacher(teacher), HttpStatus.OK);
    }
	
	@GetMapping("/teachers")
	ResponseEntity<List<Teacher>> getAllTeachers(){
		return new ResponseEntity<List<Teacher>>(teacherService.getAllTeachers(), HttpStatus.OK);
	}
	
	@GetMapping("/teachers/{id}")
	ResponseEntity<Teacher> getTeacherById(@PathVariable Long id){
		return new ResponseEntity<Teacher>(teacherService.getTeacherById(id), HttpStatus.OK);
	}
	
	@PutMapping("/teachers/{id}")
	ResponseEntity<Teacher> updateTeacherById(@PathVariable Long id, @RequestBody Teacher teacher){
		return new ResponseEntity<Teacher>(teacherService.updateTeacherById(id, teacher), HttpStatus.OK);
	}
	
	@DeleteMapping("/teachers/{id}")
	ResponseEntity<String> deleteTeacherById(@PathVariable Long id){
		return new ResponseEntity<String>(teacherService.deleteTeacherById(id), HttpStatus.OK);
	}
	
//	@GetMapping("teachers/school/{id}")
//	ResponseEntity<Teacher> findTeacherBySchoolId(@PathVariable Long id){
//		return new ResponseEntity<Teacher>(teacherService.getTeacherById(id), HttpStatus.OK);
//	}
	
//	@GetMapping("teachers/school/{school_id}")
//	public List<Teacher> getTeacherBySchoolId(@PathVariable Long school_id){
//		return  teacherService.getTeacherBySchoolId(school_id); 
//	}
	
	//api to calculate total salary
	@GetMapping("/teachers/salary")
	public ResponseEntity<Double> getTotalTeacherSalary() {
		// Code to calculate and return the total teacher salary
	    double totalSalary = 0.0;
	    List<Teacher> teachers = teacherRepository.findAll();
	    for (Teacher teacher : teachers) {
	        totalSalary += teacher.getSalaryEarned();
	    }
	    System.out.println(totalSalary);
	    return ResponseEntity.ok(totalSalary);
	}
	
	@GetMapping("allTeachers/{id}")
	ResponseEntity<Teacher> getAllTeacherBySchoolId(@PathVariable Long id){
		return new ResponseEntity<Teacher>(teacherService.getAllTeacherBySchoolId(id), HttpStatus.OK);
	}
	
	
	@ExceptionHandler(IdNotFoundException.class)
    ResponseEntity<String> myException(IdNotFoundException exception)
    {
        return new ResponseEntity<String>(exception.getMessage(), HttpStatus.NOT_FOUND);
    }
}
