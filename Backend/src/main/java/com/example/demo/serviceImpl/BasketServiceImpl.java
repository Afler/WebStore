package com.example.demo.serviceImpl;

import com.example.demo.entity.*;
import com.example.demo.repository.BasketRepository;
import com.example.demo.repository.OrderProductRepository;
import com.example.demo.repository.OrderRepository;
import com.example.demo.repository.ProductRepository;
import com.example.demo.service.BasketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BasketServiceImpl implements BasketService {

    private final BasketRepository basketRepository;
    private final OrderProductRepository orderProductRepository;
    private final ProductRepository productRepository;
    private final OrderRepository orderRepository;

    @Autowired
    public BasketServiceImpl(BasketRepository basketRepository,
                             OrderProductRepository orderProductRepository,
                             ProductRepository productRepository,
                             OrderRepository orderRepository) {
        this.basketRepository = basketRepository;
        this.orderProductRepository = orderProductRepository;
        this.productRepository = productRepository;
        this.orderRepository = orderRepository;

    }

    @Override
    public boolean addProductToBasket(User user, Product product, int amount) {
        Product storeProduct = productRepository.findByName(product.getName());
        if (storeProduct.getQuantity() < amount)
            return false;

        product.setQuantity(product.getQuantity() - amount);
        productRepository.save(product);
        Basket basket = basketRepository.findByUser(user);
        List<OrderProduct> orderProducts = basket.getProducts();

        List<Product> products = orderProducts.stream().map(OrderProduct::getProduct).collect(Collectors.toList());
        int index = products.indexOf(product);
        OrderProduct currProduct;
        if (index != -1) {
            currProduct = orderProducts.get(index);
            currProduct.setQuantity(currProduct.getQuantity() + amount);
        } else {
            currProduct = new OrderProduct(product, amount);
            currProduct.setPrice(product.getCost() * amount);
            orderProducts.add(currProduct);
        }
        orderProductRepository.save(currProduct);
        basketRepository.save(basket);
        return true;
    }

    @Override
    public boolean deleteProductFromBasket(User user, Product product, int amount) {
        Product storeProduct = productRepository.findByName(product.getName());
        storeProduct.setQuantity(product.getQuantity() + amount);
        productRepository.save(storeProduct);

        Basket basket = basketRepository.findByUser(user);
        List<OrderProduct> orderProducts = basket.getProducts();

        List<Product> products = orderProducts.stream().map(OrderProduct::getProduct).collect(Collectors.toList());
        int index = products.indexOf(product);
        OrderProduct currProduct = orderProducts.get(index);
        if (currProduct.getQuantity() - amount > 0) {
            currProduct.setQuantity(currProduct.getQuantity() - amount);
            orderProductRepository.save(currProduct);
        } else {
            orderProducts.remove(index);
            orderProductRepository.delete(currProduct);
            basketRepository.save(basket);
        }
        return true;
    }

    @Override
    public boolean basketToOrder(User user) {
        Basket basket = basketRepository.findByUser(user);
        List<OrderProduct> orderProducts = basket.getProducts();
        Order order = new Order();
        order.setUser(user);
        order.setProducts(orderProducts);
        order.setDate(new Date());
        double totalPrice = 0.0;
        for (OrderProduct orderProduct : orderProducts)
            totalPrice += orderProduct.getPrice();
        order.setTotalPrice(totalPrice);
        orderRepository.save(order);
        basket.setProducts(new ArrayList<>());
        basketRepository.save(basket);
        return true;
    }
}
