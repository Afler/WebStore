package com.example.demo.controller;

import com.example.demo.service.UserService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class MainController {

    UserService userService;

    public MainController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(path = "/profile")
    public ModelAndView loginPage(@AuthenticationPrincipal OAuth2User user) {
        userService.createNewUser(user);
        return new ModelAndView("redirect:" + "http://localhost:4200");
    }
}
