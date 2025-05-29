package com.udemy.backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "MY_FAVOURITES")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MyFavourite {

    @Id
    @Column(name = "ID")
    private String id;

    @Column(name = "USER_ID")
    private String userId;

    @ManyToOne
    @JoinColumn(name = "COURSE_ID")
    private Course course;

}

