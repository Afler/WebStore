package com.example.demo.service;

import com.example.demo.entity.Product;
import org.springframework.security.oauth2.core.user.OAuth2User;

public interface BasketService {

    boolean addProductToBasket(OAuth2User user, Product product, int amount);
}
