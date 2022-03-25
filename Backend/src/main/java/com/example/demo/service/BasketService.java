package com.example.demo.service;

import com.example.demo.entity.Product;
import com.example.demo.entity.User;

public interface BasketService {

    boolean addProductToBasket(User user, Product product, int amount);
    boolean deleteProductFromBasket(User user, Product product, int amount);
    boolean basketToOrder(User user);
}
