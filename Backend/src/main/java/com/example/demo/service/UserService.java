package com.example.demo.service;

import com.example.demo.entity.User;
import org.springframework.security.oauth2.core.user.OAuth2User;

public interface UserService {

    User saveUser(User user);

    User findByUsername(String username);

    void addRoleToUser(String username, String roleName);
}
