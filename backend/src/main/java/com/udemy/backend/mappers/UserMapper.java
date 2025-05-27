package com.udemy.backend.mappers;

import com.udemy.backend.dtos.createuser.CreateUserRequest;
import com.udemy.backend.entities.User;
import com.udemy.backend.utils.PasswordUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.UUID;

@RequiredArgsConstructor
@Component
public class UserMapper {


    public User mapToUserEntity(CreateUserRequest body) {
        return User.builder()
                .id(UUID.randomUUID().toString())
                .firstName(body.getFirstName())
                .lastName(body.getLastName())
                .email(body.getEmail())
                .password(PasswordUtil.hashPassword(body.getPassword()))
                .build();
    }
}
