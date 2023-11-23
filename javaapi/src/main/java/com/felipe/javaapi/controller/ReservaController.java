package com.felipe.javaapi.controller;

import java.util.List;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.felipe.javaapi.DTO.ReservaUserDTO;
import com.felipe.javaapi.model.ReservaModel;
import com.felipe.javaapi.model.UserModel;
import com.felipe.javaapi.service.ReservaService;

@RestController
@RequestMapping("/reserva")
public class ReservaController {

    @Autowired
    private ReservaService reservaService;

    @PostMapping("")
    public void newReserva(@RequestBody ReservaUserDTO newReservaUserDTO) {
        UserModel newUserModel = new UserModel(newReservaUserDTO.getUser().getId());
        Date data = new Date();
        ReservaModel newReserva = new ReservaModel(data, newUserModel);
        reservaService.save(newReserva);
    }

    @GetMapping("")
    public List<ReservaModel> findAllReservaModels() {
        return reservaService.findAll();
    }

    @GetMapping("/user/{userId}")
    public List<ReservaModel> findByUserID(@PathVariable String userId) {
        return reservaService.findByUserID(userId);
    }

    @DeleteMapping("/{id}")
    public void deleteReserva(@PathVariable String id) {
        reservaService.delete(id);
    }
}