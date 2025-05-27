package com.udemy.backend.dtos.createcourse.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;
import lombok.NonNull;

@Data
@Builder
public class LessonRequest {
    
    @JsonProperty("Title")
    @NonNull
    private String title;

    @JsonProperty("Description")
    private String description;

    @JsonProperty("VideoUrl")
    private String videoUrl;
}
