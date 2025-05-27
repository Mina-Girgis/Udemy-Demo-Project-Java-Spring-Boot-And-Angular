package com.udemy.backend.dtos.butnow;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BuyNowResponse {
    //TODO details will be added later
    @JsonProperty("Message")
    private String message;

}
