package com.udemy.backend.dtos.createcourse.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import lombok.Builder;
import lombok.Data;
import lombok.NonNull;

import java.util.List;

@Data
@Builder
public class CreateCourseRequest {
    @JsonProperty("Title")
    @NonNull
    private String title;

    @JsonProperty("SubTitle")
    private String subTitle;

    @JsonProperty("Instructor")
    @NonNull
    private String instructor;

    @JsonProperty("Rating")
    private String rating;

    @JsonProperty("NumberOfStudents")
    private String numberOfStudents;

    @JsonProperty("Category")
    private String category;

    @JsonProperty("VideoLink")
    private String videoLink;

    @JsonProperty("RatingCount")
    private String ratingCount;

    @JsonProperty("Price")
    @NonNull
    private String price;

    @JsonProperty("ImageUrl")
    private String imageUrl;

    @JsonProperty("Content")
    private List<CourseContentRequest> content;
}

