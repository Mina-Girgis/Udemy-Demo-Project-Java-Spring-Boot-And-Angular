package com.udemy.backend.dtos.getcartitems;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.udemy.backend.dtos.getcoursebyid.GetCourseResponse;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CartItemsResponse{
    @JsonProperty("Id")
    private String id;

    @JsonProperty("Course")
    private GetCourseResponse course;

}
