package com.example.demo.service;

import com.example.demo.entity.Product;

import java.util.List;

public interface ProductService {

    Product saveProduct(Product product);

    Product createNewProduct(String name, double cost, int quantity, String image);

    List<Product> getProductsByCategory(String category);

    List<Product> getAllProducts();

    Product getProductById(Long id);

    List<Product> sortProductsByPriceAsc(List<Product> products);

    List<Product> sortProductsByPriceDesc(List<Product> products);

    List<Product> sortProductsByNameAsc(List<Product> products);

    List<Product> sortProductsByNameDesc(List<Product> products);

    List<Product> sortProductsByCountAsc(List<Product> products);

    List<Product> sortProductsByCountDesc(List<Product> products);

}
