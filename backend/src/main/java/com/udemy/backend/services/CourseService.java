package com.udemy.backend.services;

import com.udemy.backend.dtos.createcourse.response.CreateCourseResponse;
import com.udemy.backend.dtos.createcourse.request.CreateCourseRequest;
import com.udemy.backend.dtos.getcoursebyid.GetCourseResponse;
import com.udemy.backend.entities.Course;
import com.udemy.backend.exceptions.ApiCommonException;
import com.udemy.backend.mappers.CourseMapper;
import com.udemy.backend.repositories.CourseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static com.udemy.backend.constants.Errors.COURSE_NOT_FOUND_CODE;
import static com.udemy.backend.constants.Errors.COURSE_NOT_FOUND_MESSAGE;

@Service
@RequiredArgsConstructor
public class CourseService {

    private final CourseRepository courseRepository;
    private final CourseMapper courseMapper;

    public CreateCourseResponse createCourse(CreateCourseRequest body){
        Course course = courseMapper.mapToCourseEntity(body);
        courseRepository.save(course);
        return CreateCourseResponse.builder()
                .id(course.getId())
                .title(course.getTitle())
                .build();
    }

    public GetCourseResponse getCourseById(String courseId){
        Course course = courseRepository.findById(courseId).orElseThrow(() -> new ApiCommonException(COURSE_NOT_FOUND_CODE, COURSE_NOT_FOUND_MESSAGE));
        return courseMapper.mapToCourseResponse(course);
    }

    @Transactional
    public List<GetCourseResponse> getCoursesByCategory(String category){
        List<Course> courses = courseRepository.findByCategory(category);
        return courses.parallelStream().map(courseMapper::mapToCourseResponse).toList();
    }


    public void deleteAllCourses(){
        courseRepository.deleteAll();
    }


}
