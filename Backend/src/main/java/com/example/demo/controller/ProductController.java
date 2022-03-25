package com.example.demo.controller;

import com.example.demo.entity.Product;
import com.example.demo.service.BasketService;
import com.example.demo.serviceImpl.BasketServiceImpl;
import com.example.demo.serviceImpl.ProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/product")
public class ProductController {

    private final ProductServiceImpl productService;

    private final BasketServiceImpl basketService;

    @Autowired
    public ProductController(ProductServiceImpl productService, BasketServiceImpl basketService) {
        this.productService = productService;
        this.basketService = basketService;
    }

    @PostMapping("save")
    public Product saveProduct(@RequestBody Product product) {
        productService.saveProduct(product);
        return product;
    }

    @PostMapping("/addProduct")
    public void addProductToBasket(@AuthenticationPrincipal OAuth2User user, @RequestBody Product product,
                                   @RequestBody int amount) {
        basketService.addProductToBasket(user, product, amount);
    }
}
