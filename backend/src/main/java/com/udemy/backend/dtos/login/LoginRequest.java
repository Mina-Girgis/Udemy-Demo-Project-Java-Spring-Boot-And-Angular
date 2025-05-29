package com.udemy.backend.dtos.login;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.Email;
import lombok.Builder;
import lombok.Data;
import lombok.NonNull;

@Data
@Builder
public class LoginRequest {

    @JsonProperty("Email")
    @NonNull
    private String email;

    @JsonProperty("Password")
    @NonNull
    private String password;
}
