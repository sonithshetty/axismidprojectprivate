package com.axis.service;

import java.util.List;

import com.axis.entity.Teacher;


public interface TeacherService {
	
	Teacher addTeacher(Teacher teacher);
	List<Teacher> getAllTeachers();
	Teacher getTeacherById(Long id);
	Teacher updateTeacherById(Long id , Teacher teacher);
	String deleteTeacherById(Long id);
	Teacher getAllTeacherBySchoolId(Long school_id);
//	List<Teacher> findTeacherwithSchoolById(Long id);
//	List<Teacher> getTeacherBySchoolId(Long school_id);
}
