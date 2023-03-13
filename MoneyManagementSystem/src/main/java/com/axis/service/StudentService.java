package com.axis.service;

import java.util.List;

import com.axis.entity.Student;


public interface StudentService {
	Student addStudent(Student student);
	List<Student>  getAllStudents();
	Student getStudentById(Long id);
	Student updateStudentById(Long id, Student student);
	String deleteStudentById(Long id);
	Student getAllStudentsBySchoolId(Long school_id);
}
