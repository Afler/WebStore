package com.example.demo.controller;

import com.example.demo.entity.Product;
import com.example.demo.entity.User;
import com.example.demo.serviceImpl.BasketServiceImpl;
import com.example.demo.serviceImpl.ProductServiceImpl;
import com.example.demo.serviceImpl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {

    private final UserServiceImpl userService;
    private final ProductServiceImpl productService;
    private final BasketServiceImpl basketService;

    @Autowired
    public ProductController(UserServiceImpl userService, ProductServiceImpl productService, BasketServiceImpl basketService) {
        this.userService = userService;
        this.productService = productService;
        this.basketService = basketService;
    }

    @PostMapping("save")
    public Product saveProduct(@RequestBody Product product) {
        productService.saveProduct(product);
        return product;
    }

    @PostMapping("/addProduct")
    public void addProductToBasket(@RequestBody Product product,
                                   @RequestParam int amount,
                                   @RequestParam String username) {
        User user = userService.findByUsername(username);
        Product product1 = productService.findByName("product1");
        basketService.addProductToBasket(user, product1, amount);
    }

    @GetMapping("/getProducts")
    public List<Product> getProducts() {
        return productService.getAllProducts();
    }
}
