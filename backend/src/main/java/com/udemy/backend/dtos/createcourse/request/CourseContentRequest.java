package com.udemy.backend.dtos.createcourse.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;
import lombok.NonNull;

import java.util.List;

@Data
@Builder
public class CourseContentRequest {

    @JsonProperty("Title")
    @NonNull
    private String title;

    @JsonProperty("Lessons")
    private List<LessonRequest> lessons;
}
