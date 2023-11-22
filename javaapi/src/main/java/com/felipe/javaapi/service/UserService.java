package com.felipe.javaapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.felipe.javaapi.model.UserModel;
import com.felipe.javaapi.repository.UserRepository;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    public UserModel save(UserModel userModel)
    {
        return this.userRepository.save(userModel);
    }

    public void save(String id, String name, String dataNasc, String sex, String cpf, String bloco, String apto, String email, String password, Boolean adm, short vaga)
    {
        this.userRepository.save(new UserModel(id, name, dataNasc, sex, cpf, bloco, apto, email, password, adm, vaga));
    }

    public List<UserModel> findAll()
    {
        return (List<UserModel>) this.userRepository.findAll();
    }

    public List<UserModel> findByName(String name)
    {
        return (List<UserModel>) this.userRepository.findByName(name);
    }

    public void delete(String id)
    {
        this.userRepository.deleteById(id);
    }
}
