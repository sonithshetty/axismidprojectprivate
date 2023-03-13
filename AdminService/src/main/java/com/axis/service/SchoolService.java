package com.axis.service;

import java.util.List;

import com.axis.entity.School;

public interface SchoolService {
	School createSchool(School school);
    School getSchoolById(Long school_id);
    List<School> getAllSchools();
	School updateSchoolById(Long school_id, School school);
    void deleteSchoolById(Long school_id);
    School updatetotalEarnings(Long school_id);
}
