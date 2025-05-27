package com.udemy.backend.dtos.createuser;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;
import lombok.NonNull;

@Data
@Builder
public class CreateUserResponse {

    @JsonProperty("Id")
    private String id;

    @JsonProperty("Email")
    private String email;
}
