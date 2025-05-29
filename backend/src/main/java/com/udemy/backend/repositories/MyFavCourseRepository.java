package com.udemy.backend.repositories;

import com.udemy.backend.entities.MyCourses;
import com.udemy.backend.entities.MyFavourite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MyFavCourseRepository extends JpaRepository<MyFavourite, String> {
    List<MyFavourite> findByUserId(String userId);

    Optional<MyFavourite> findByUserIdAndCourse_Id(String userId, String id);


}