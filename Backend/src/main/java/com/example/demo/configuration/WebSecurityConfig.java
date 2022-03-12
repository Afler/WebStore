package com.example.demo.configuration;

import org.springframework.boot.autoconfigure.security.oauth2.resource.PrincipalExtractor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().disable();
        http.authorizeRequests()
                .anyRequest().permitAll()
                .and()
                .antMatcher("/login").authorizeRequests()
                .and()
                .oauth2Login()
                .defaultSuccessUrl("/profile");
    }

    @Bean
    public PrincipalExtractor principalExtractor() {
        return map -> (String) map.get("email");
    }
}
