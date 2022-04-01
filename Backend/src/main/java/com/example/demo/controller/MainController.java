package com.example.demo.controller;

import com.example.demo.service.UserService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    UserService userService;

    public MainController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(path = "/profile")
    public String loginPage(@AuthenticationPrincipal OAuth2User user) {
        userService.createNewUser(user);
        return user.toString();
    }
}
