package com.example.demo.service;

import com.example.demo.entity.Product;

import java.util.List;

public interface ProductService {

    Product saveProduct(Product product);

    Product createNewProduct(String name, double cost, int quantity, String image);

    List<Product> getProductsByCategory(String category);

    List<Product> getAllProducts();

}
