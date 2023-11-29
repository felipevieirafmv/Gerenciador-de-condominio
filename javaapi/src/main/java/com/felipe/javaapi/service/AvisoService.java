package com.felipe.javaapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.felipe.javaapi.model.AvisoModel;
import com.felipe.javaapi.repository.AvisoRepository;

@Service
public class AvisoService {
    
    @Autowired
    private AvisoRepository avisoRepository;

    public AvisoModel save(AvisoModel avisoModel)
    {
        return this.avisoRepository.save(avisoModel);
    }

    public void save(String id, String dataAviso, String dataCriado, String titulo, String info)
    {
        this.avisoRepository.save(new AvisoModel(id, dataAviso, dataCriado, titulo, info));
    }

    public List<AvisoModel> findAll()
    {
        return (List<AvisoModel>) this.avisoRepository.findAll();
    }

    public List<AvisoModel> findByDate(String dataAviso)
    {
        return (List<AvisoModel>) this.avisoRepository.findByDate(dataAviso);
    }

    public void delete(String id)
    {
        this.avisoRepository.deleteById(id);
    }
}
