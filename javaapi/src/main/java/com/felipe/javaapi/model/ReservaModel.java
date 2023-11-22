package com.felipe.javaapi.model;

import java.time.Date;
import java.util.List;
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

    public ReservaModel(String id, Date diaReservado) {
        this.id = id;
        this.diaReservado = diaReservado;
    }

    public ReservaModel() {
    }
}