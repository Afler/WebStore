package com.example.demo.serviceImpl;

import com.example.demo.entity.Order;
import com.example.demo.entity.OrderProduct;
import com.example.demo.entity.User;
import com.example.demo.repository.OrderRepository;
import com.example.demo.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Override
    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public Order createNewOrder(Date date, double totalPrice, int status, User user) {
        Order order = new Order();
        order.setDate(date);
        order.setTotalPrice(totalPrice);
        order.setStatus(status);
        order.setUser(user);
        return order;
    }
}
