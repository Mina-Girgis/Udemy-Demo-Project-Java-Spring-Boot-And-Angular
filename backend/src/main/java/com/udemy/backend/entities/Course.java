package com.udemy.backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "COURSES")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Course {

    @Id
    @Column(name = "ID")
    private String id;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "SUB_TITLE")
    private String subTitle;

    @Column(name = "INSTRUCTOR")
    private String instructor;

    @Column(name = "RATING")
    private String rating;

    @Column(name = "NUMBER_OF_STUDENTS")
    private String numberOfStudents;

    @Column(name = "CATEGORY" ,nullable = false)
    private String category;

    @Column(name = "VIDEO_LINK")
    private String videoLink;

    @Column(name = "RATING_COUNT")
    private String ratingCount;

    @Column(name = "PRICE")
    private String price;

    @Column(name = "IMAGE_URL")
    private String imageUrl;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.EAGER)
    @JoinColumn(name = "COURSE_ID")
    private List<CourseContent> content;
}

