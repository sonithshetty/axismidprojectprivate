package com.axis.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.entity.Student;
import com.axis.exception.IdNotFoundException;
import com.axis.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService{
	@Autowired
	StudentRepository studentRepository;

	@Override
	public Student addStudent(Student student) {
		// TODO Auto-generated method stub
		return studentRepository.save(student);
	}

	@Override
	public List<Student> getAllStudents() {
		// TODO Auto-generated method stub
		return studentRepository.findAll();
	}

	@Override
	public Student getStudentById(Long id) {
		// TODO Auto-generated method stub
		Optional<Student> stu = studentRepository.findById(id);
		
		if(stu.isPresent())
			return stu.get();
		else
			throw new IdNotFoundException("No id is present to get the value");
	}

	@Override
	public String deleteStudentById(Long id) {
		// TODO Auto-generated method stub
		Optional<Student> stu = studentRepository.findById(id);
		if(stu.isPresent()) {
			studentRepository.deleteById(id);
			return "Student data deleted";
		}
		else
			throw new IdNotFoundException("No ID present to delete");
	}

	@Override
	public Student updateStudentById(Long id, Student student) {
		// TODO Auto-generated method stub
		Optional<Student> stu = studentRepository.findById(id);
		
		if(stu.isPresent())
			return studentRepository.save(student);
		else
			throw new IdNotFoundException("No ID present to update");
	
	}
	
	public Student getAllStudentsBySchoolId(Long school_id) {
		// TODO Auto-generated method stub
		Optional<Student> stu = studentRepository.findById(school_id);
		
		if(stu.isPresent())
			return stu.get();
		else
			throw new IdNotFoundException("No schoolID is present to get the value");
	}
	
}
