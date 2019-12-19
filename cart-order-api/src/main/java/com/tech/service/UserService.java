package com.tech.service;

import com.tech.domain.User;
import com.tech.dto.UserDTO;
import com.tech.exception.BusinessException;
import com.tech.exception.RequestException;
import com.tech.mapper.MapperObject;
import com.tech.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private CustomSequenceService sequenceService;

    public void create(UserDTO dto) {

        if (dto.getName() == null || dto.getEmail() == null)
            throw new RequestException("Error data  json");

        if (repository.findUserByEmail(dto.getEmail()) != null)
            throw new BusinessException("The email was used before that. Only once record is permited");

        User entity = MapperObject.parse(dto, User.class);
        entity.setId(sequenceService.getNextSequence("userSequence"));

        repository.save(entity);
    }

}