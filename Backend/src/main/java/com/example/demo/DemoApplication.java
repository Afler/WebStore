package com.example.demo;

import com.example.demo.entity.Order;
import com.example.demo.entity.OrderProduct;
import com.example.demo.entity.Product;
import com.example.demo.entity.User;
import com.example.demo.repository.OrderRepository;
import com.example.demo.repository.ProductRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.serviceImpl.UserServiceImpl;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.ArrayList;
import java.util.Date;

@SpringBootApplication
public class DemoApplication {

    private static final String[] ALLOWED_CORS_SOURCES = {
            "*"
    };

    @Bean
    BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins(ALLOWED_CORS_SOURCES);
            }
        };
    }

    @Bean
    CommandLineRunner run(OrderRepository orderRepository,
                          UserServiceImpl userService,
                          ProductRepository productRepository) {
        return args -> {
            User user = new User(null, "user1", "pass1", "user1@email.com");
            userService.saveUser(user);
            userService.saveUser(new User(null, "user2", "pass2", "user2@email.com"));

            Product product1 = new Product(null, "Футболка", 490, "Цвет: красный\nМатериал: хлопок 100%\nРазмеры: xs, s, m, l, xl\nВ наличии: 10\n", 10, "https://www.sportkult.ru/res/shop/goods/192466_1430_Polo_Shirt_Pique_Classic_F_0.jpg", "Верхняя одежда");
            Product product2 = new Product(null, "Джинсы", 1990, "Цвет: синий\nМатериал: хлопок 90%, полиэстер10%\nРазмеры: xs, s, m, l, xl\nВ наличии: 20\n", 20, "https://www.partner-moto.ru/media/610/61063.jpg", "Нижняя одежда");

            productRepository.save(product1);
            productRepository.save(product2);

            Order order1 = new Order(null, user, new ArrayList<>(), new Date(), 0, 0);
            Order order2 = new Order(null, user, new ArrayList<>(), new Date(), 0, 0);
            OrderProduct orderProduct1 = new OrderProduct(product1, 1);
            OrderProduct orderProduct2 = new OrderProduct(product2, 2);
            order1.getProducts().add(orderProduct1);
            order1.getProducts().add(orderProduct2);
            orderRepository.save(order1);
            orderRepository.save(order2);

        };
    }

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

}
