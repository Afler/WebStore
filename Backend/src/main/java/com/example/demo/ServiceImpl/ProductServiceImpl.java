package com.example.demo.ServiceImpl;

import com.example.demo.Service.ProductService;
import com.example.demo.entity.Product;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

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
