package com.felipe.javaapi.controller;

import java.util.List;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.felipe.javaapi.dto.ReservaUserDTO;
import com.felipe.javaapi.model.ReservaModel;
import com.felipe.javaapi.model.UserModel;
import com.felipe.javaapi.service.ReservaService;
import com.felipe.javaapi.service.UserService;

@RestController
@RequestMapping("/reserva")
public class ReservaController {

    @Autowired
    private UserService userService;
    @Autowired
    private ReservaService reservaService;

    @PostMapping("")
    public void newUser(@RequestBody ReservaUserDTO newReservaUserDTO) {
        ReservaModel newReservaModel = new ReservaModel(newReservaUserDTO.getReserva().getDiaReservado());

        UserModel userResp = userService
                .save(new UserModel(newReservaUserDTO.getUser().getName()));
        newReservaModel.setIdUser(new UserModel(userResp.getId()));
        reservaService.save(newReservaModel);
    }

    @PostMapping("/array")
    public void newUserArray(@RequestBody ReservaUserDTO newReservaUserDTO) {
        List<UserModel> idsUsers = new ArrayList<UserModel>();

        for (UserModel test : newReservaUserDTO.getUserList()) {
            UserModel userResp = userService.save(new UserModel(test.getName()));
            idsUsers.add(new UserModel(userResp.getId()));
        }

        ReservaModel newReservaModel = new ReservaModel(newReservaUserDTO.getReserva().getName());

        newReservaModel.setListUser(idsUsers);
        reservaService.save(newReservaModel);
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