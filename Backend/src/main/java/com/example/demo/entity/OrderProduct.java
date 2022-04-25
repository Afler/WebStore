package com.example.demo.entity;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "order_products")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class OrderProduct implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "order_id", referencedColumnName = "id")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    private Product product;
    private int quantity;
    private double price;

    public OrderProduct(Product product, int quantity) {
        this.product = product;
        this.quantity = quantity;
    }
}
