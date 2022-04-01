package com.example.demo.utils;

import com.example.demo.entity.User;
import org.springframework.security.oauth2.core.user.OAuth2User;

public class OAuthUserConverter {
    public static User oauthUserToEntity(OAuth2User user) {
        return User.builder()
                .username(user.getAttribute("name"))
                .email(user.getAttribute("email"))
                .build();
    }
}
