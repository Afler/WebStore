package com.example.demo;

import com.example.demo.entity.Order;
import com.example.demo.entity.Product;
import com.example.demo.entity.User;
import com.example.demo.repository.OrderRepository;
import com.example.demo.repository.ProductRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DemoApplication {

    @Bean
    CommandLineRunner run(OrderRepository orderRepository,
                          UserRepository userRepository,
                          ProductRepository productRepository) {
        return args -> {
            User user = new User(null, "user1", "pass1");
            userRepository.save(user);

            Product product1 = new Product(null, "product1", 100, 12, null);
            Product product2 = new Product(null, "product2", 100, 12, null);
            productRepository.save(product1);
            productRepository.save(product2);

            Order order1 = new Order(null, user, product1, 1, 100);
            Order order2 = new Order(null, user, product2, 2, 200);
            orderRepository.save(order1);
            orderRepository.save(order2);

        };
    }

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

}
