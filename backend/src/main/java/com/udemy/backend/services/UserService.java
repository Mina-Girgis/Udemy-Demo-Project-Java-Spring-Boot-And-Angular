package com.udemy.backend.services;

import com.udemy.backend.dtos.createuser.CreateUserRequest;
import com.udemy.backend.dtos.createuser.CreateUserResponse;
import com.udemy.backend.dtos.login.LoginRequest;
import com.udemy.backend.dtos.login.LoginResponse;
import com.udemy.backend.entities.User;
import com.udemy.backend.exceptions.ApiCommonException;
import com.udemy.backend.mappers.UserMapper;
import com.udemy.backend.repositories.UserRepository;
import com.udemy.backend.utils.JwtUtil;
import com.udemy.backend.utils.PasswordUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Optional;

import static com.udemy.backend.constants.Errors.*;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final JwtUtil jwtUtil;
    @Value("${jwt.secret-key}")
    private String secretKey;

    @Value("${jwt.expiration-ms}")
    private long expirationMs;

    public CreateUserResponse createUser(CreateUserRequest body) {
        Optional<User> existsUser = userRepository.findByEmail(body.getEmail());
        if (existsUser.isPresent()) {
            throw new ApiCommonException(CREATE_USER_EXISTS_CODE, CREATE_USER_EXISTS_MESSAGE);
        }
        User user = userMapper.mapToUserEntity(body);
        userRepository.save(user);
        return CreateUserResponse.builder().id(user.getId()).email(user.getEmail()).build();
    }

    public LoginResponse login(LoginRequest body) {
        Optional<User> user = userRepository.findByEmail(body.getEmail());
        if (user.isEmpty()) {
            throw new ApiCommonException(EMAIL_OR_PASSWORD_NOT_CORRECT_CODE, EMAIL_OR_PASSWORD_NOT_CORRECT_MESSAGE);
        }
        boolean isValid = PasswordUtil.checkPassword(body.getPassword(), user.get().getPassword());
        if(!isValid){
            throw new ApiCommonException(EMAIL_OR_PASSWORD_NOT_CORRECT_CODE, EMAIL_OR_PASSWORD_NOT_CORRECT_MESSAGE);
        }
        String token = jwtUtil.generateToken(user.get().getId());
        return LoginResponse.builder().token(token).build();
    }
}
