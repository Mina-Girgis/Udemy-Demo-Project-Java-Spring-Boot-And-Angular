package com.udemy.backend.dtos.getcoursebyid;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public  class CourseContentResponse {

    @JsonProperty("Id")
    private String id;

    @JsonProperty("Title")
    private String title;

    @JsonProperty("Lessons")
    private List<LessonResponse> lessons;
}
