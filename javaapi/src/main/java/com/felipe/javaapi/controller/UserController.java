package com.felipe.javaapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.felipe.javaapi.model.UserModel;
import com.felipe.javaapi.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
    
    @Autowired
    private UserService userService;

    @GetMapping("")
    public List<UserModel> getAllUser()
    {
        List<UserModel> listRes = userService.findAll();
        return listRes;
    }

    @GetMapping("/{name}")
    public List<UserModel> getUserByName(@PathVariable String name)
    {
        List<UserModel> listRes = userService.findByName(name);
        return listRes;
    }
    
    @PostMapping("")
    public void newUser(@RequestBody UserModel newUser) {
        userService.save(newUser);
    }

    @PutMapping("/{id}")
    public void putUser(@RequestBody UserModel newUser, @PathVariable String id) {
        userService.save(
            (String) id, 
            (String) newUser.getName(), 
            (String) newUser.getDataNasc(), 
            (String) newUser.getSex(), 
            (String) newUser.getCpf(), 
            (String) newUser.getBloco(),
            (String) newUser.getApto(),
            (String) newUser.getEmail(),
            (String) newUser.getPassword(),
            (Boolean) newUser.getAdm(),
            (short) newUser.getVaga()
        );
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id) {
        userService.delete(id);
    }

}
