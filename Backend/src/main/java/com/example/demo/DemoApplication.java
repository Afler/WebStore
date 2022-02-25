package com.example.demo;

import com.example.demo.entity.Order;
import com.example.demo.entity.OrderProduct;
import com.example.demo.entity.Product;
import com.example.demo.entity.User;
import com.example.demo.repository.OrderRepository;
import com.example.demo.repository.ProductRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Date;

@SpringBootApplication
public class DemoApplication {

    @Bean
    CommandLineRunner run(OrderRepository orderRepository,
                          UserRepository userRepository,
                          ProductRepository productRepository) {
        return args -> {
            User user = new User(null, "user1", "pass1");
            userRepository.save(user);

            Product product1 = new Product(null, "product1", 100, 10, null);
            Product product2 = new Product(null, "product2", 100, 20, null);
            productRepository.save(product1);
            productRepository.save(product2);

            Order order1 = new Order(null, user, new Date(), 0, 0);
            Order order2 = new Order(null, user, new Date(), 0, 0);
            OrderProduct orderProduct1 = new OrderProduct(order1, product1, 1, 100);
            OrderProduct orderProduct2 = new OrderProduct(order1, product2, 2, 200);
            order1.getProduct().add(orderProduct1);
            order1.getProduct().add(orderProduct2);
            orderRepository.save(order1);
            orderRepository.save(order2);

        };
    }

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

}
