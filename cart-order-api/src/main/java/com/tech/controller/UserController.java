package com.tech.controller;

import javax.ws.rs.Consumes;
import javax.ws.rs.core.MediaType;

import com.tech.dto.UserDTO;
import com.tech.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/users")
public class UserController{

    @Autowired 
    private UserService service;

    @RequestMapping(method = RequestMethod.POST)
	@Consumes(MediaType.APPLICATION_JSON)
	public ResponseEntity<?> createUser(@RequestBody UserDTO dto) {
        service.create(dto);
        return new ResponseEntity<>(HttpStatus.CREATED);
	}


}