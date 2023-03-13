package com.axis.repository;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.axis.entity.Teacher;

public interface TeacherRepository extends MongoRepository<Teacher, Long>{
//	@Query("{ 'teacher_id' : ?0 }")
//	@Aggregation("{ $lookup : { from : 'teachers', localField : 'teacher_id', foreignField : 'id', as : 'teachers' } }")
//	List<Teacher> findTeacherwithSchoolById(Long school_id);
//    List<Teacher> findBySchoolId(Long school_id);

}
