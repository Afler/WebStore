package com.example.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@Table(name = "order_table")
@AllArgsConstructor
@NoArgsConstructor
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @ManyToOne
    @JoinTable(name = "user_orders", joinColumns = @JoinColumn(name = "order_id"))
    private User user;
    @ManyToOne
    private Product product;
    private int quantity;
    private double totalPrice;
}
