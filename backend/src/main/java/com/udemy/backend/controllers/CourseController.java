package com.udemy.backend.controllers;

import com.udemy.backend.dtos.createcourse.response.CreateCourseResponse;
import com.udemy.backend.dtos.createcourse.request.CreateCourseRequest;
import com.udemy.backend.dtos.getcoursebyid.GetCourseResponse;
import com.udemy.backend.services.CourseService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.udemy.backend.constants.Headers.USER_ID;
import static com.udemy.backend.constants.PathVariables.COURSE_ID;
import static com.udemy.backend.constants.RequestParam.CATEGORY;
import static com.udemy.backend.constants.RequestParam.PURCHASED;

@RestController
@RequestMapping("${app.api.endpoints.course.base-url}")
@RequiredArgsConstructor
public class CourseController {

    private final CourseService courseService;


    @PostMapping("${app.api.endpoints.course.apis.create-new-course}")
    public ResponseEntity<CreateCourseResponse> createCourse(@Valid @RequestBody CreateCourseRequest body) {
        CreateCourseResponse response = courseService.createCourse(body);
        return ResponseEntity.status(201).body(response);
    }

    @GetMapping("${app.api.endpoints.course.apis.get-course-by-id}")
    public ResponseEntity<GetCourseResponse> getCourseById(@PathVariable(COURSE_ID) String courseId,@RequestHeader(name = USER_ID, required = false) String userId) {
        GetCourseResponse response = courseService.getCourseById(courseId,userId);
        return ResponseEntity.status(200).body(response);
    }

    @GetMapping("${app.api.endpoints.course.apis.get-courses-by-category}")
    public ResponseEntity<List<GetCourseResponse>> getCoursesByCategory(@RequestParam(name = CATEGORY, required = false) String category,@RequestHeader(name = USER_ID, required = false) String userId){
        List<GetCourseResponse> response = courseService.getCoursesByCategory(category,userId);
        return ResponseEntity.status(200).body(response);
    }

    @GetMapping("${app.api.endpoints.course.apis.get-my-courses}")
    public ResponseEntity<List<GetCourseResponse>> getMyCourses(@RequestHeader(name = USER_ID, required = false) String userId){
        List<GetCourseResponse> response = courseService.getMyCourses(userId);
        return ResponseEntity.status(200).body(response);
    }

    @PostMapping("${app.api.endpoints.course.apis.add-fav-course}")
    public ResponseEntity<List<Void>> addFavCourse(@PathVariable(COURSE_ID) String courseId,@RequestHeader(name = USER_ID, required = false) String userId){
        courseService.addFavCourse(courseId,userId);
        return ResponseEntity.status(204).body(null);
    }


    @GetMapping("${app.api.endpoints.course.apis.get-my-fav}")
    public ResponseEntity<List<GetCourseResponse>> getMyFavCourses(@RequestHeader(name = USER_ID, required = false) String userId){
        List<GetCourseResponse> response = courseService.getMyFavCourses(userId);
        return ResponseEntity.status(200).body(response);
    }



    @DeleteMapping("${app.api.endpoints.course.apis.delete-all-courses}")
    public ResponseEntity<Void>deleteAllCourses(){
        courseService.deleteAllCourses();
        return ResponseEntity.status(204).body(null);
    }


}
