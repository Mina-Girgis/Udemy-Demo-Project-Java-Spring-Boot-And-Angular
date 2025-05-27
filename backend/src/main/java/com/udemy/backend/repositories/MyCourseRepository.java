package com.udemy.backend.repositories;

import com.udemy.backend.entities.Course;
import com.udemy.backend.entities.MyCourses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MyCourseRepository extends JpaRepository<MyCourses, String> {



}