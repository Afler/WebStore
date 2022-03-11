package com.example.demo.serviceImpl;

import com.example.demo.entity.Order;
import com.example.demo.entity.OrderProduct;
import com.example.demo.entity.User;
import com.example.demo.repository.OrderRepository;
import com.example.demo.service.OrderService;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {


    private final OrderRepository orderRepository;

    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public Order createNewOrder(Date date, double totalPrice, int status, User user, List<OrderProduct> orderProducts) {
        Order order = new Order();
        order.setDate(date);
        order.setTotalPrice(totalPrice);
        order.setStatus(status);
        order.setUser(user);
        order.setProducts(orderProducts);
        return order;
    }
}
