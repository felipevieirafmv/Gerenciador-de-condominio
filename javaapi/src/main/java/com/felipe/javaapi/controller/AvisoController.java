package com.felipe.javaapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.felipe.javaapi.model.AvisoModel;
import com.felipe.javaapi.service.AvisoService;

@RestController
@RequestMapping("/aviso")
public class AvisoController {
    
    @Autowired
    private AvisoService avisoService;

    @GetMapping("")
    public List<AvisoModel> getAllUser()
    {
        List<AvisoModel> listRes = avisoService.findAll();
        return listRes;
    }

    @GetMapping("/{dataAviso}")
    public List<AvisoModel> getAvisoByDate(@PathVariable String dataAviso)
    {
        List<AvisoModel> listRes = avisoService.findByDate(dataAviso);
        return listRes;
    }
    
    @PostMapping("")
    public void newAviso(@RequestBody AvisoModel newAviso) {
        avisoService.save(newAviso);
    }

    // @PutMapping("/{id}")
    // public void putUser(@RequestBody AvisoModel newUser, @PathVariable String id) {
    //     avisoService.save(
    //         (String) id, 
    //         (String) newUser.getName(), 
    //         (String) newUser.getDataNasc(), 
    //         (String) newUser.getSex(), 
    //         (String) newUser.getCpf(), 
    //         (String) newUser.getBloco(),
    //         (String) newUser.getApto(),
    //         (String) newUser.getEmail(),
    //         (String) newUser.getPassword(),
    //         (Boolean) newUser.getAdm(),
    //         (short) newUser.getVaga()
    //     );
    // }

    @DeleteMapping("/{id}")
    public void deleteAviso(@PathVariable String id) {
        avisoService.delete(id);
    }

}
