//package com.axis.service;
//
//import java.util.List;
//
//import org.springframework.data.mongodb.core.MongoTemplate;
//import org.springframework.data.mongodb.core.aggregation.Aggregation;
//import org.springframework.data.mongodb.core.aggregation.AggregationResults;
//import org.springframework.data.mongodb.core.mapping.Document;
//import org.springframework.data.mongodb.core.query.Criteria;
//import org.springframework.stereotype.Service;
//
//
//@Service
//public class TeacherLookupService {
//
//    private final MongoTemplate mongoTemplate;
//
//    public TeacherLookupService(MongoTemplate mongoTemplate) {
//        this.mongoTemplate = mongoTemplate;
//    }
//
//    public List<Document> getTeachersBySchoolId(String id) {
//        Aggregation aggregation = Aggregation.newAggregation(
//            Aggregation.match(Criteria.where("school_id").is(id)),
//            Aggregation.lookup("teachers", "teacher_id", "id", "teachers"),
//            Aggregation.unwind("teachers"),
//            Aggregation.replaceRoot("teachers")
//        );
//        AggregationResults<Document> results = mongoTemplate.aggregate(aggregation, "schools", Document.class);
//        return results.getMappedResults();
//    }
//}
//
