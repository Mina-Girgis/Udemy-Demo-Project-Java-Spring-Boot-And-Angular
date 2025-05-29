package com.udemy.backend.dtos.getcoursebyid;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class GetCourseResponse {

    @JsonProperty("Id")
    private String id;

    @JsonProperty("Title")
    private String title;

    @JsonProperty("SubTitle")
    private String subTitle;

    @JsonProperty("Instructor")
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
    private String price;

    @JsonProperty("ImageUrl")
    private String imageUrl;

    @JsonProperty("IsPurchased")
    private Boolean isPurchased;

    @JsonProperty("IsFav")
    private Boolean isFav;

    @JsonProperty("Content")
    private List<CourseContentResponse> content;

}



