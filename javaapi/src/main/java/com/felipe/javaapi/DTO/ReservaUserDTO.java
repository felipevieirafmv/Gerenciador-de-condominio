package com.felipe.javaapi.DTO;

import com.felipe.javaapi.model.ReservaModel;
import com.felipe.javaapi.model.UserModel;

import lombok.Data;

@Data
public class ReservaUserDTO {
    private UserModel user;
    private ReservaModel reserva;
}