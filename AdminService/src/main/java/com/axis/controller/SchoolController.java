package com.axis.controller;

import java.util.List;

import javax.ws.rs.GET;

import com.axis.entity.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
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

import com.axis.entity.School;
import com.axis.entity.Student;
import com.axis.service.SchoolService;
import org.springframework.web.client.RestTemplate;

@CrossOrigin("http://localhost:3000")
@RestController
public class SchoolController {
	
	
//	School school;
	
	@Autowired
	SchoolService schoolService;

    @Autowired
    RestTemplate restTemplate;
	
	@PostMapping("/school")
    public ResponseEntity<School> createSchool(@RequestBody School school) {
        School createdSchool = schoolService.createSchool(school);
        return ResponseEntity.ok(createdSchool);
    }

    @GetMapping("/school/{school_id}")
    public ResponseEntity<School> getSchoolById(@PathVariable Long school_id) {
        School school = schoolService.getSchoolById(school_id);
        if (school == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(school);
    }

    @GetMapping("/school")
    public ResponseEntity<List<School>> getAllSchools() {
        List<School> schools = schoolService.getAllSchools();
        return ResponseEntity.ok(schools);
    }
    
    @PutMapping("/school/{school_id}")
    ResponseEntity<School> updateSchoolById(@PathVariable Long school_id, @RequestBody School school){
		return new ResponseEntity<School>(schoolService.updateSchoolById(school_id, school), HttpStatus.OK);
	}

    @DeleteMapping("/school/{school_id}")
    public ResponseEntity<Void> deleteSchoolById(@PathVariable Long school_id) {
        schoolService.deleteSchoolById(school_id);
        return ResponseEntity.noContent().build();
    }
    
    //Performing CRUD operations on other service
    
//    @PostMapping("/school/students")
//    public Student addStudent(@RequestBody Student student){
//    	String url = "http://StudentTeacher/students";
//    	Student studentsList = restTemplate.postForObject(url, student, Student.class);
//    	return studentsList;
//	}
//    
//    @PostMapping("/school/teachers")
//    public Teacher addTeacher(@RequestBody Teacher teacher) {
//    	String url = "http://StudentTeacher/teachers";
//    	Teacher teachersList = restTemplate.postForObject(url, teacher, Teacher.class);
//    	return teachersList;
//    }

//    @PutMapping("/school/students/{id}")
//    public Student updateStudentById(@PathVariable Long id, @RequestBody Student student) {
//    	String url = "http://StudentTeacher/students/"+ id;
//    	Student studentsList = restTemplate.put(url, student);
//    	return studentsList;
//    }
//    
//    @PutMapping("/school/teachers/{id}")
//    public Student updateTeacherById(@PathVariable Long id, @RequestBody Teacher teacher) {
//    	String url = "http://StudentTeacher/students/"+ id;
//    	Student studentsList = restTemplate.put(url, teacher);
//    	return studentsList;
//    }
    
//    @DeleteMapping("/school/students/{id}")
//    public void Student deleteStudentById(@PathVariable Long id) {
//    	String url = "http://StudentTeacher/students/{id}";
//    	Student studentLists = restTemplate.delete(url);
//    	return studentLists;
//    }
//    
//    @DeleteMapping("/school/teachers/{id}")
//    public void Teacher deleteTeacherById(@PathVariable Long id) {
//    	String url = "http://StudentTeacher/teachers/{id}";
//    	Teacher teacherLists = restTemplate.delete(url);
//    	return teacherLists;
//    }
       
    @GetMapping("/school/teachers")
    public List<Teacher> getAllTeacher(){
        String url = "http://StudentTeacher/teachers";
        List<Teacher> teachersList = restTemplate.getForObject(url, List.class);
        return teachersList;
    }
    
    @GetMapping("/school/students")
    public List<Student> getAllStudents(){
    	String url = "http://StudentTeacher/students";
    	List<Student> studentsList = restTemplate.getForObject(url, List.class);
    	return studentsList;    	
    }
    
    @GetMapping("/school/allTeachers/{id}")
    public Teacher getAllTeacherBySchoolId(@PathVariable Long id){
        String url = "http://StudentTeacher/teachers/"+ id;
        Teacher teacher = restTemplate.getForObject(url, Teacher.class);
        return teacher;
    }
    
    @GetMapping("/school/allStudents/{id}")
    public Student getAllStudentsBySchoolId(@PathVariable Long id){
    	String url = "http://StudentTeacher/students/"+ id;
    	Student student = restTemplate.getForObject(url, Student.class);
    	return student;
    }
    
    //to get totalMoneySpent and totalMoneyEarned 
    
    @GetMapping("/school/totalFunds")
    public ResponseEntity<Double> calculateTotalMoney() {
        // Call the API to get the total teacher salary from the MoneyManagementSystem microservice
        ResponseEntity<Double> teacherSalaryResponse = restTemplate.getForEntity("http://StudentTeacher/teachers/salary", Double.class);
        double totalTeacherSalary = teacherSalaryResponse.getBody();

        // Call the API to get the total student fees from the MoneyManagementSystem microservice
        ResponseEntity<Double> studentFeesResponse = restTemplate.getForEntity("http://StudentTeacher/students/fees", Double.class);
        double totalStudentFees = studentFeesResponse.getBody();
        
        // Calculate the total money spent and earned
        double totalMoneySpent = totalTeacherSalary;
        double totalMoneyEarned = totalStudentFees;
        System.out.println("this is totalfund");
        double totalFund = totalMoneyEarned - totalMoneySpent;
        

        // Save the calculated values to the database or perform any other necessary operations
        // Create a MongoDB client that connects to your MongoDB server
//        MongoClient mongoClient = MongoClients.create("mongodb://localhost:27017");
//
//        // Get the database
//        MongoDatabase database = mongoClient.getDatabase("mydatabase");
//
//        // Get the collection
//        MongoCollection<Document> collection = database.getCollection("total_funds");
//
//        // Create a document with the totalMoneyEarned and totalMoneySpent values
//        Document document = new Document()
//                .append("totalMoneyEarned", totalMoneyEarned)
//                .append("totalMoneySpent", totalMoneySpent);
//
//        // Insert the document into the collection
//        collection.insertOne(document);
//        double totalFunds = totalMoneyEarned - totalMoneySpent;
//        System.out.println(totalFunds);
        
        return new ResponseEntity<Double> (totalFund, HttpStatus.OK);
//        return ResponseEntity<Double> (totalMoneyEarned, HttpStatus.OK);
        
    }
    
    @GetMapping("/school/totalMoneySpent")
    public ResponseEntity<Double> calculateTotalMoneySpent(){
        ResponseEntity<Double> teacherSalaryResponse = restTemplate.getForEntity("http://StudentTeacher/teachers/salary", Double.class);
        double totalTeacherSalary = teacherSalaryResponse.getBody();
        
        double totalMoneySpent = totalTeacherSalary;
        
        return new ResponseEntity<Double> (totalMoneySpent, HttpStatus.OK);
    }
    
    @GetMapping("/school/totalMoneyEarned")
    public ResponseEntity<Double> calculateTotalMoneyEarned(){
        ResponseEntity<Double> studentFeesResponse = restTemplate.getForEntity("http://StudentTeacher/students/fees", Double.class);
        double totalStudentFees = studentFeesResponse.getBody();
        
        double totalMoneySpent = totalStudentFees;
        
        return new ResponseEntity<Double> (totalMoneySpent, HttpStatus.OK);
    }
}
