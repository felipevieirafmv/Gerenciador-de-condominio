package com.felipe.javaapi.dto;

import com.felipe.javaapi.model.ReservaModel;
import com.felipe.javaapi.model.UserModel;

import lombok.Data;
import java.util.List;

@Data
public class ReservaUserDTO {
    private UserModel user;
    private List<UserModel> userList;
    private ReservaModel reserva;
}