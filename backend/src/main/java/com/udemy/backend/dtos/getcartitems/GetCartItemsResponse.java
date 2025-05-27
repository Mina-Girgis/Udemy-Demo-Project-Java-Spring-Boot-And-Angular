package com.udemy.backend.dtos.getcartitems;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.udemy.backend.dtos.getcoursebyid.GetCourseResponse;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class GetCartItemsResponse {

    @JsonProperty("Id")
    private String id;

    @JsonProperty("UserId")
    private String userId;

    @JsonProperty("CartItems")
    private List<CartItemsResponse> cartItems;

}


