package com.felipe.javaapi.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.felipe.javaapi.model.ReservaModel;

import java.util.List;

public interface ReservaRepository extends MongoRepository<ReservaModel, String> {
    // @Query("{'listUser.id': ?0 }")
    @Query("{'idUser.id': ?0 }")
    List<ReservaModel> findByUserID(String userId);

}