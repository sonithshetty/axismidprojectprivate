package com.axis.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.entity.Teacher;
import com.axis.exception.IdNotFoundException;
import com.axis.repository.TeacherRepository;

@Service
public class TeacherServiceImpl implements TeacherService{

	@Autowired
	TeacherRepository teacherRepository;
	
	@Override
	public Teacher addTeacher(Teacher teacher) {
		// TODO Auto-generated method stub
		return teacherRepository.save(teacher);
	}

	@Override
	public List<Teacher> getAllTeachers() {
		// TODO Auto-generated method stub
		return teacherRepository.findAll();
	}

	@Override
	public Teacher getTeacherById(Long id) {
		// TODO Auto-generated method stub
		Optional<Teacher> tea = teacherRepository.findById(id);
		
		if(tea.isPresent())
			return tea.get();
		else
			throw new IdNotFoundException("No id is present to get the value");
	}

	@Override
	public Teacher updateTeacherById(Long id, Teacher teacher) {
		// TODO Auto-generated method stub
		Optional<Teacher> tea = teacherRepository.findById(id);
		
		if(tea.isPresent())
			return teacherRepository.save(teacher);
		else
			throw new IdNotFoundException("No ID is present to update");
		
	}

	@Override
	public String deleteTeacherById(Long id) {
		// TODO Auto-generated method stub
		Optional<Teacher> tea = teacherRepository.findById(id);

		if(tea.isPresent()) {
			teacherRepository.deleteById(id);
			return "Teacher data deleted";
		}
		else
			throw new IdNotFoundException("NO ID present to delete");
	}

	@Override
	public Teacher getAllTeacherBySchoolId(Long school_id) {
		// TODO Auto-generated method stub
		Optional<Teacher> tea = teacherRepository.findById(school_id);
		
		if(tea.isPresent())
			return tea.get();
		else
			throw new IdNotFoundException("No school id is present to get the value");
	}

//	@Override
//	public List<Teacher> getTeacherBySchoolId(Long school_id) {
//		// TODO Auto-generated method stub
//		return (List<Teacher>) teacherRepository.findById(school_id).get();
//	}

//	@Override
//	public List<Teacher> findTeacherwithSchoolById(Long id) {
//		// TODO Auto-generated method stub
//		return (List<Teacher>) teacherRepository.findById(id).get();
//	}
}
