package com.udemy.backend.dtos.addtocart;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

@Builder
public class AddToCartResponse {

    @JsonProperty("Id")
    private String id;

    @JsonProperty("CartId")
    private String cartId;


    @JsonProperty("Message")
    private String message;
}
