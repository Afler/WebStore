package com.example.demo.Service;

import com.example.demo.entity.Product;

public interface ProductService {

    Product saveProduct(Product product);

    Product createNewProduct(String name, double cost, int quantity, String image);

}
