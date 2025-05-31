package com.udemy.backend.config;

import com.udemy.backend.filters.JwtFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfigurationSource;

@Configuration
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtFilter jwtFilter;
    private final CorsConfigurationSource corsConfigurationSource;

    @Value("${app.api.endpoints.user.base-url}")
    private String userBaseUrl;

    @Value("${app.api.endpoints.user.apis.login}")
    private String userLoginApi;

    @Value("${app.api.endpoints.user.apis.create-new-user}")
    private String userCreateUserApi;

    @Value("${app.api.endpoints.course.base-url}")
    private String courseBaseUrl;

    @Value("${app.api.endpoints.course.apis.get-course-by-id}")
    private String courseGetByIdApi;

    @Value("${app.api.endpoints.course.apis.get-courses-by-category}")
    private String courseGetByCategoryApi;


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable())
                .cors(cors -> cors.configurationSource(corsConfigurationSource)) // enable CORS with config source
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(userBaseUrl + userLoginApi).permitAll()
                        .requestMatchers(userBaseUrl + userCreateUserApi).permitAll()
                        .requestMatchers(courseBaseUrl + courseGetByIdApi).permitAll()
                        .requestMatchers(courseBaseUrl + courseGetByCategoryApi).permitAll()
                        .anyRequest().authenticated()
                )
                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }


}
