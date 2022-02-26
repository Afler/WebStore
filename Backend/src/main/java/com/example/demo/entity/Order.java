package com.example.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

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
    @OneToMany(mappedBy = "order", cascade = CascadeType.PERSIST)
    private final List<OrderProduct> product = new ArrayList<>();
    private Date date;
    private double totalPrice;
    private int status;

}
