package com.example.demo.serviceImpl;

import com.example.demo.service.ProductService;
import com.example.demo.entity.Product;
import com.example.demo.repository.ProductRepository;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product createNewProduct(String name, double cost, int quantity, String image) {
        Product product = new Product();
        product.setName(name);
        product.setCost(cost);
        product.setQuantity(quantity);
        product.setImage(image);
        return product;
    }
}
