package com.example.demo.controller;

import com.example.demo.entity.Product;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.BasketService;
import com.example.demo.serviceImpl.BasketServiceImpl;
import com.example.demo.serviceImpl.ProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import com.example.demo.entity.User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/product")
public class ProductController {

    UserRepository userRepository;

    private final ProductServiceImpl productService;

    private final BasketServiceImpl basketService;

    public ProductController(ProductServiceImpl productService, BasketServiceImpl basketService, UserRepository userRepository) {
        this.productService = productService;
        this.basketService = basketService;
        this.userRepository = userRepository;
    }

    @PostMapping("save")
    public Product saveProduct(@RequestBody Product product) {
        productService.saveProduct(product);
        return product;
    }

    @PostMapping("/addProduct")
    public void addProductToBasket(@AuthenticationPrincipal OAuth2User oAuthUser, @RequestBody Product product,
                                   @RequestBody int amount) {
        String userEmail = oAuthUser.getAttribute("email");
        User user = userRepository.findByEmail(userEmail);
        basketService.addProductToBasket(user, product, amount);
    }
}
