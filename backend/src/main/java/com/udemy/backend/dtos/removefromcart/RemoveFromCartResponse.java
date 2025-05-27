package com.udemy.backend.dtos.removefromcart;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

@Builder
public class RemoveFromCartResponse {
    @JsonProperty("Message")
    private String message;
}
