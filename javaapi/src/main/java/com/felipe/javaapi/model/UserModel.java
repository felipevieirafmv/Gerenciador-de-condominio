package com.felipe.javaapi.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("user")
public class UserModel {
    @Id
    private String id;
    private String name;
    private String dataNasc;
    private String sex;
    private String cpf;
    private String bloco;
    private String apto;
    private String email;
    private String password;
    private Boolean adm;
    private short vaga;

    public UserModel(String name, String dataNasc, String sex, String cpf, String bloco, String apto, String email, String password, Boolean adm, short vaga)
    {
        this.name = name;
        this.dataNasc = dataNasc;
        this.sex = sex;
        this.cpf = cpf;
        this.bloco = bloco;
        this.apto = apto;
        this.email = email;
        this.password = password;
        this.adm = adm;
        this.vaga = vaga;
    }

    public UserModel(UserModel user)
    {
        this.id = user.getId();
        this.name = user.getName();
        this.dataNasc = user.getDataNasc();
        this.sex = user.getSex();
        this.cpf = user.getCpf();
        this.bloco = user.getBloco();
        this.apto = user.getApto();
        this.email = user.getEmail();
        this.password = user.getPassword();
        this.adm = user.getAdm();
        this.vaga = user.getVaga();
    }

    public UserModel(String id)
    {
        this.id = id;
    }

    public UserModel() { }
}