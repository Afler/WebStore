package com.example.demo.controller;

import com.example.demo.entity.OrderProduct;
import com.example.demo.entity.Product;
import com.example.demo.entity.User;
import com.example.demo.serviceImpl.BasketServiceImpl;
import com.example.demo.serviceImpl.ProductServiceImpl;
import com.example.demo.serviceImpl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

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

    @PostMapping("/save")
    public Product saveProduct(@RequestBody Product product) {
        productService.saveProduct(product);
        return product;
    }

    @PostMapping("/addProduct")
    public void addProductToBasket(@RequestParam int amount,
                                   @RequestParam String username,
                                   @RequestParam Long productId) {
        User user = userService.findByUsername(username);
        Product product1 = productService.findByName("product1");
        Product product = productService.getProductById(productId);
        if (Objects.isNull(product)) {
            basketService.addProductToBasket(user, product1, amount);
        } else {
            basketService.addProductToBasket(user, product, amount);
        }
    }

    @GetMapping("/getProducts")
    public List<Product> getProducts(@RequestParam Optional<String> sortType, @RequestParam Optional<String> category) {
        List<Product> allProducts = productService.getAllProducts();
        if (sortType.isPresent()) {
            switch (sortType.get()) {
                case "priceAsc":
                    return productService.sortProductsByPriceAsc(allProducts);
                case "priceDesc":
                    return productService.sortProductsByPriceDesc(allProducts);
                case "nameAsc":
                    return productService.sortProductsByNameAsc(allProducts);
                case "nameDesc":
                    return productService.sortProductsByNameDesc(allProducts);
                case "countAsc":
                    return productService.sortProductsByCountAsc(allProducts);
                case "countDesc":
                    return productService.sortProductsByCountDesc(allProducts);
            }
        }
        if (category.isPresent()) {
            return productService.getProductsByCategory(category.get());
        }
        return allProducts;
    }

    @GetMapping("/getBasketProducts")
    public List<OrderProduct> getBasketProducts(@RequestParam String username) {
        User user = userService.findByUsername(username);
        return basketService.getBasketProducts(user);
    }

    @GetMapping("/getProduct")
    public Product getProduct(@RequestParam Long id) {
        return productService.getProductById(id);
    }
}
