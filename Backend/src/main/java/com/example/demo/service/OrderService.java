package com.example.demo.service;

import com.example.demo.entity.Order;
import com.example.demo.entity.OrderProduct;
import com.example.demo.entity.User;

import java.util.Date;
import java.util.List;

public interface OrderService {

    Order saveOrder(Order order);

    Order createNewOrder(Date date, double totalPrice, int status, User user, List<OrderProduct> orderProducts);
}
