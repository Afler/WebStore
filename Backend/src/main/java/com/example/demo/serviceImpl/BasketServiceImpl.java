package com.example.demo.serviceImpl;

import com.example.demo.entity.Product;
import com.example.demo.repository.BasketRepository;
import com.example.demo.service.BasketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Service
public class BasketServiceImpl implements BasketService {

    private final BasketRepository basketRepository;

    @Autowired
    public BasketServiceImpl(BasketRepository basketRepository) {
        this.basketRepository = basketRepository;
    }

    @Override
    public boolean addProductToBasket(OAuth2User user, Product product, int amount) {
        user.getName();
        return true;
    }
}
