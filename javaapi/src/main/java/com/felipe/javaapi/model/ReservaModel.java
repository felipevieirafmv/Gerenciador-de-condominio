package com.felipe.javaapi.model;

import java.util.Date;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document("reserva")
public class ReservaModel {
    @Id
    private String id;
    private Date diaReservado;
    @DBRef
    private UserModel idUser;

    public ReservaModel(String id, Date diaReservado, UserModel idUser) {
        this.id = id;
        this.diaReservado = diaReservado;
        this.idUser = idUser;
    }

    public ReservaModel(Date diaReservado) {
        this.diaReservado = diaReservado;
    }

    public ReservaModel() {
    }
}