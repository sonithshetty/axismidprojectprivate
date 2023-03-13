package com.axis.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.axis.entity.School;
import org.springframework.stereotype.Repository;

@Repository
public interface SchoolRepository extends MongoRepository<School, Long>{
	
}
