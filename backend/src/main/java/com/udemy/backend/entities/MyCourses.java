package com.udemy.backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "MY_COURSES")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MyCourses {

    @Id
    @Column(name = "ID")
    private String id;

    @Column(name = "USER_ID")
    private String userId;

    @ManyToOne
    @JoinColumn(name = "COURSE_ID")
    private Course course;

}

