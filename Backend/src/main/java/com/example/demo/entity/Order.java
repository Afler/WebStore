package com.example.demo.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "order_table")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    @ManyToOne
    @JoinTable(name = "user_orders", joinColumns = @JoinColumn(name = "order_id"))
    private User user;
    @ManyToOne
    private Product product;
    private int quantity;
    private double totalPrice;
}
