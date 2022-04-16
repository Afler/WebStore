package com.example.demo.serviceImpl;

import com.example.demo.service.ProductService;
import com.example.demo.entity.Product;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Autowired
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

    @Override
    public List<Product> getProductsByCategory(String category) {
        return productRepository.findByCategory(category);
    }

    public Product findByName(String product1) {
       return productRepository.findByName(product1);
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(Long id) {
        Optional<Product> optionalProduct = productRepository.findById(id);
        return optionalProduct.orElse(null);
    }

    @Override
    public List<Product> sortProductsByPriceAsc(List<Product> products) {
        return productRepository.findAll(Sort.by(Sort.Direction.ASC, "cost"));
    }

    @Override
    public List<Product> sortProductsByPriceDesc(List<Product> products) {
        return productRepository.findAll(Sort.by(Sort.Direction.DESC, "cost"));
    }

    @Override
    public List<Product> sortProductsByNameAsc(List<Product> products) {
        return productRepository.findAll(Sort.by(Sort.Direction.ASC, "name"));
    }

    @Override
    public List<Product> sortProductsByNameDesc(List<Product> products) {
        return productRepository.findAll(Sort.by(Sort.Direction.DESC, "name"));
    }

    @Override
    public List<Product> sortProductsByCountAsc(List<Product> products) {
        return productRepository.findAll(Sort.by(Sort.Direction.ASC, "quantity"));
    }

    @Override
    public List<Product> sortProductsByCountDesc(List<Product> products) {
        return productRepository.findAll(Sort.by(Sort.Direction.DESC, "quantity"));
    }
}
