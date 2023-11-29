package com.felipe.javaapi.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.felipe.javaapi.model.AvisoModel;

import java.time.LocalDate;
import java.util.List;


public interface AvisoRepository extends MongoRepository<AvisoModel, String> {
    @Query("{'dataAviso': ?0}")
    List<AvisoModel> findByDate(LocalDate dataAviso);
}
