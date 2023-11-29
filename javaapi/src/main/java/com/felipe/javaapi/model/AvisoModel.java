package com.felipe.javaapi.model;

import java.time.LocalDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document("aviso")
public class AvisoModel {
    @Id
    private String id;
    private LocalDate dataAviso;
    private LocalDate dataCriado;
    private String titulo;
    private String info;

    public AvisoModel(String id, LocalDate dataAviso, LocalDate dataCriado, String titulo, String info) {
        this.id = id;
        this.dataAviso = dataAviso;
        this.dataCriado = dataCriado;
        this.titulo = titulo;
        this.info = info;
    }

    public AvisoModel(LocalDate dataAviso) {
        this.dataAviso = dataAviso;
    }

    public AvisoModel() {
    }
}