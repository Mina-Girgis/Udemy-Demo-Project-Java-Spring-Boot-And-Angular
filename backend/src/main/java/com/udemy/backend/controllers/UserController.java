package com.udemy.backend.controllers;

import com.udemy.backend.dtos.createuser.CreateUserRequest;
import com.udemy.backend.dtos.createuser.CreateUserResponse;
import com.udemy.backend.services.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
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

}
