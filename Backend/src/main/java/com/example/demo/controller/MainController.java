package com.example.demo.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {
    @GetMapping(path = "/profile")
    public String loginPage(@AuthenticationPrincipal OAuth2User user) {
        System.out.println("hi");
        return user.toString();
    }
}
