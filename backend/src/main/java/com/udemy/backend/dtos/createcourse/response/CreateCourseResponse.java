package com.udemy.backend.dtos.createcourse.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CreateCourseResponse {
    @JsonProperty("Id")
    private String id;

    @JsonProperty("Title")
    private String title;
}
