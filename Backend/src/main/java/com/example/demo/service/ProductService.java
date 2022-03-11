package com.example.demo.service;

import com.example.demo.entity.Product;

import java.util.List;

public interface ProductService {

    List<Product> getProductsByCategory(String category);

    Product saveProduct(Product product);

    Product createNewProduct(String name, double cost, int quantity, String image);

}
