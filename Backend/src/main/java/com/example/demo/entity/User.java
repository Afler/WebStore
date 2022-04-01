package com.example.demo.entity;

import com.example.demo.dto.NewUserDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.EAGER;

@Entity
@Builder
@Data
@Table(name = "user_table")
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String username;
    private String password;
    @ManyToMany(fetch = EAGER)
    private List<Role> roles = new ArrayList<>();
    private String email;
    @OneToMany(mappedBy = "user")
    private final List<Order> orders = new ArrayList<>();
    @OneToOne
    @JoinColumn(name = "basket_id", referencedColumnName = "id")
    private Basket basket;

    public User(Long id, String username, String password, String email) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public User(NewUserDTO userDTO) {
        this.username = userDTO.getUsername();
        this.password = userDTO.getPassword();
        this.email = userDTO.getEmail();
    }
}
