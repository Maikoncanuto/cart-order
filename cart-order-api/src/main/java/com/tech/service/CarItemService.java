package com.tech.service;

import java.math.BigDecimal;
import java.util.stream.Collectors;

import com.tech.domain.CartItem;
import com.tech.dto.CartItemDTO;
import com.tech.dto.CartOrderDTO;
import com.tech.dto.UserDTO;
import com.tech.exception.ResourceNotFoundException;
import com.tech.mapper.MapperObject;
import com.tech.repository.CartItemRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarItemService {

    @Autowired
    private CartItemRepository repository;

    @Autowired
    private CustomSequenceService sequenceService;

    public void create(CartItemDTO dto) {
        CartItem entity = MapperObject.parse(dto, CartItem.class);
        entity.setId(sequenceService.getNextSequence("carItemSequence"));
        entity.setStatus(Boolean.TRUE);
        repository.save(entity);
    }

    public void update(CartItemDTO dto){
        CartItem entity = repository.findById(dto.getId())
            .orElseThrow(() -> new ResourceNotFoundException("Cart order not found " + dto.getId()));
        repository.save(entity);
    }

    public CartOrderDTO sumCartItem(Integer id){
        CartItem entity = repository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Cart order not found " + id));
    
        BigDecimal value = entity.getItens().stream().map(obj -> {
            BigDecimal big = obj.getItem().getValueItem().multiply(BigDecimal.valueOf(obj.getQuantity()));
            return big;
        }).collect(Collectors.toList()).stream().reduce(BigDecimal.ZERO, BigDecimal::add);
        CartOrderDTO dto = new CartOrderDTO();
        dto.setValue(value);
        dto.setUser(MapperObject.parse(entity.getUser(), UserDTO.class));
        return dto;
    }

    public void closeCartOrder(CartItemDTO dto){
        CartItem entity = repository.findById(dto.getId())
            .orElseThrow(() -> new ResourceNotFoundException("Cart order not found " + dto.getId()));
        entity.setStatus(Boolean.FALSE);
        repository.save(entity);
    }

}