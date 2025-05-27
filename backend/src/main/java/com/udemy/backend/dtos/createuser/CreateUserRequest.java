package com.udemy.backend.dtos.createuser;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;
import lombok.NonNull;

@Data
@Builder
public class CreateUserRequest {

    @JsonProperty("FirstName")
    @NonNull
    private String firstName;

    @JsonProperty("LastName")
    @NonNull
    private String lastName;

    @JsonProperty("Email")
    @NonNull
    private String email;

    @JsonProperty("Password")
    @NonNull
    private String password;
}
