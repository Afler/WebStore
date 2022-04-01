package com.example.demo.serviceImpl;

import com.example.demo.entity.OrderProduct;
import com.example.demo.entity.User;
import com.example.demo.repository.OrderProductRepository;
import com.example.demo.service.OrderProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderProductServiceImpl implements OrderProductService {

    private final OrderProductRepository orderProductRepository;

    @Autowired
    public OrderProductServiceImpl(OrderProductRepository orderProductRepository) {
        this.orderProductRepository = orderProductRepository;
    }
}
