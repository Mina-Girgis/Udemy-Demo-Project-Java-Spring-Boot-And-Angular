package com.udemy.backend.mappers;

import com.udemy.backend.dtos.createcourse.request.CourseContentRequest;
import com.udemy.backend.dtos.createcourse.request.CreateCourseRequest;
import com.udemy.backend.dtos.createcourse.request.LessonRequest;
import com.udemy.backend.dtos.getcoursebyid.CourseContentResponse;
import com.udemy.backend.dtos.getcoursebyid.GetCourseResponse;
import com.udemy.backend.dtos.getcoursebyid.LessonResponse;
import com.udemy.backend.entities.Course;
import com.udemy.backend.entities.CourseContent;
import com.udemy.backend.entities.Lesson;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Set;
import java.util.UUID;

@Component
public class CourseMapper {


    public Course mapToCourseEntity(CreateCourseRequest body){
        return Course.builder()
                .id(UUID.randomUUID().toString())
                .price(body.getPrice())
                .rating(body.getRating())
                .title(body.getTitle())
                .category(body.getCategory())
                .ratingCount(body.getRatingCount())
                .subTitle(body.getSubTitle())
                .category(body.getCategory())
                .videoLink(body.getVideoLink())
                .instructor(body.getInstructor())
                .numberOfStudents(body.getNumberOfStudents())
                .imageUrl(body.getImageUrl())
                .content(mapToCourseContentEntity(body.getContent()))
                .build();
    }

    public GetCourseResponse mapToCourseResponse(Course course, boolean isPurchased, boolean mapContent, boolean isFav){
        return GetCourseResponse.builder()
                .id(course.getId())
                .price(course.getPrice())
                .rating(course.getRating())
                .title(course.getTitle())
                .category(course.getCategory())
                .ratingCount(course.getRatingCount())
                .subTitle(course.getSubTitle())
                .videoLink(course.getVideoLink())
                .instructor(course.getInstructor())
                .numberOfStudents(course.getNumberOfStudents())
                .imageUrl(course.getImageUrl())
                .isPurchased(isPurchased)
                .isFav(isFav)
                .content(mapContent?mapToCourseContentResponse(course.getContent()):null)
                .build();
    }



    private List<CourseContent> mapToCourseContentEntity(List<CourseContentRequest> contentList){
        return contentList.parallelStream().map(content-> CourseContent
                .builder()
                .id(UUID.randomUUID().toString())
                .title(content.getTitle())
                .lessons(mapToLessonEntity(content.getLessons()))
                .build()).toList();
    }
    private List<Lesson> mapToLessonEntity(List<LessonRequest>lessonList){
        return lessonList.parallelStream().map(lesson-> Lesson.builder()
                .id(UUID.randomUUID().toString())
                .title(lesson.getTitle())
                .description(lesson.getDescription())
                .videoUrl(lesson.getVideoUrl())
                .build()).toList();
    }



    private List<CourseContentResponse> mapToCourseContentResponse(List<CourseContent> contentList){
        return contentList.parallelStream().map(content-> CourseContentResponse
                .builder()
                .id(content.getId())
                .title(content.getTitle())
                .lessons(mapToLessonResponse(content.getLessons()))
                .build()).toList();
    }
    private List<LessonResponse> mapToLessonResponse(List<Lesson>lessonList){
        return lessonList.parallelStream().map(lesson-> LessonResponse.builder()
                .id(lesson.getId())
                .title(lesson.getTitle())
                .description(lesson.getDescription())
                .videoUrl(lesson.getVideoUrl())
                .build()).toList();
    }


}
