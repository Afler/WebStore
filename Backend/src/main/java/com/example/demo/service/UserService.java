package com.example.demo.service;

import com.example.demo.entity.User;

public interface UserService {

    User saveUser(User user);

    User createNewUser(String username, String password);
}
