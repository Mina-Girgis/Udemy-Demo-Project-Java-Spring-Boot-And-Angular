package com.udemy.backend.services;

import com.udemy.backend.dtos.createuser.CreateUserRequest;
import com.udemy.backend.dtos.createuser.CreateUserResponse;
import com.udemy.backend.entities.User;
import com.udemy.backend.exceptions.ApiCommonException;
import com.udemy.backend.mappers.UserMapper;
import com.udemy.backend.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

import static com.udemy.backend.constants.Errors.CREATE_USER_EXISTS_CODE;
import static com.udemy.backend.constants.Errors.CREATE_USER_EXISTS_MESSAGE;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public CreateUserResponse createUser(CreateUserRequest body) {
        Optional<User> existsUser = userRepository.findByEmail(body.getEmail());
        if (existsUser.isPresent()) {
            throw new ApiCommonException(CREATE_USER_EXISTS_CODE, CREATE_USER_EXISTS_MESSAGE);
        }
        User user = userMapper.mapToUserEntity(body);
        userRepository.save(user);
        return CreateUserResponse.builder().id(user.getId()).email(user.getEmail()).build();
    }

}
