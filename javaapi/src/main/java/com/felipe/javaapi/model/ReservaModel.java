package com.felipe.javaapi.model;

import java.time.LocalDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document("reserva")
public class ReservaModel {
    @Id
    private String id;
    private LocalDate diaReservado;
    @DBRef
    private UserModel idUser;

    public ReservaModel(String id, LocalDate diaReservado, UserModel idUser) {
        this.id = id;
        this.diaReservado = diaReservado;
        this.idUser = idUser;
    }

    public ReservaModel(LocalDate diaReservado, UserModel idUser) {
        this.diaReservado = diaReservado;
        this.idUser = idUser;
    }

    public ReservaModel(LocalDate diaReservado) {
        this.diaReservado = diaReservado;
    }

    public ReservaModel() {
    }
}