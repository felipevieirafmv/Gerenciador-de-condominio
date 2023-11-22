package com.felipe.javaapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.felipe.javaapi.model.ReservaModel;
import com.felipe.javaapi.repository.ReservaRepository;

@Service
public class ReservaService {

    @Autowired
    private ReservaRepository reservaRepository;

    public void save(ReservaModel reservaModel) {
        this.reservaRepository.save(reservaModel);
    }

    public List<ReservaModel> findAll() {
        return this.reservaRepository.findAll();
    }

    public List<ReservaModel> findByUserID(String userId) {
        return this.reservaRepository.findByUserID(userId);
    }

    public void delete(String id) {
        this.reservaRepository.deleteById(id);
    }

}