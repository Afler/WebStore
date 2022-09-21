package com.example.demo.entity;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String name;
//    @OneToMany(mappedBy = "product", cascade = CascadeType.PERSIST)
//    private final List<OrderProduct> product = new ArrayList<>();
    private double cost;
    private String description;
    private int quantity;
    @Lob
    private String image;
    private String category;
}
