package com.udemy.backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "COURSES_CONTENT")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseContent {

    @Id
    @Column(name = "ID")
    private String id;

    @Column(name = "COURSE_ID")
    private String courseId;

    @Column(name = "TITLE")
    private String title;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.EAGER)
    @JoinColumn(name = "COURSE_CONTENT_ID")
    private List<Lesson> lessons;

}

