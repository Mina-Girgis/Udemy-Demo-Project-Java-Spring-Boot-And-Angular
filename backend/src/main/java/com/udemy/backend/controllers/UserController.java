package com.udemy.backend.controllers;

import com.udemy.backend.dtos.createuser.CreateUserRequest;
import com.udemy.backend.dtos.createuser.CreateUserResponse;
import com.udemy.backend.dtos.login.LoginRequest;
import com.udemy.backend.dtos.login.LoginResponse;
import com.udemy.backend.services.UserService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("${app.api.endpoints.user.base-url}")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("${app.api.endpoints.user.apis.create-new-user}")
    public ResponseEntity<CreateUserResponse> createUser(@Valid @RequestBody CreateUserRequest body) {
        CreateUserResponse response = userService.createUser(body);
        return ResponseEntity.status(201).body(response);
    }

    @PostMapping("${app.api.endpoints.user.apis.login}")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest body, HttpServletResponse servletResponse){
        LoginResponse response = userService.login(body);
        ResponseCookie cookies = ResponseCookie.from("jwt", response.getToken())
                .httpOnly(true)
                .secure(false) // true in production with HTTPS
                .path("/")
                .maxAge(7 * 24 * 60 * 60) // 7 days
                .sameSite("None") // allow cross-site cookie
                .build();
        servletResponse.setHeader("Access-Control-Allow-Credentials", "true");
        servletResponse.addHeader(HttpHeaders.SET_COOKIE, cookies.toString());
        return ResponseEntity.status(200).body(response);
    }

}
