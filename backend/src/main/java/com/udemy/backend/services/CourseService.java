package com.udemy.backend.services;

import com.udemy.backend.dtos.createcourse.request.CreateCourseRequest;
import com.udemy.backend.dtos.createcourse.response.CreateCourseResponse;
import com.udemy.backend.dtos.getcoursebyid.GetCourseResponse;
import com.udemy.backend.entities.Course;
import com.udemy.backend.entities.MyCourses;
import com.udemy.backend.entities.MyFavourite;
import com.udemy.backend.exceptions.ApiCommonException;
import com.udemy.backend.mappers.CourseMapper;
import com.udemy.backend.repositories.CourseRepository;
import com.udemy.backend.repositories.MyCourseRepository;
import com.udemy.backend.repositories.MyFavCourseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

import static com.udemy.backend.constants.Errors.COURSE_NOT_FOUND_CODE;
import static com.udemy.backend.constants.Errors.COURSE_NOT_FOUND_MESSAGE;

@Service
@RequiredArgsConstructor
public class CourseService {

    private final CourseRepository courseRepository;
    private final MyCourseRepository myCourseRepository;
    private final MyFavCourseRepository myFavCourseRepository;
    private final CourseMapper courseMapper;

    public CreateCourseResponse createCourse(CreateCourseRequest body){
        Course course = courseMapper.mapToCourseEntity(body);
        courseRepository.save(course);
        return CreateCourseResponse.builder()
                .id(course.getId())
                .title(course.getTitle())
                .build();
    }

    public GetCourseResponse getCourseById(String courseId, String userId) {
        Course course = courseRepository.findById(courseId).orElseThrow(() -> new ApiCommonException(COURSE_NOT_FOUND_CODE, COURSE_NOT_FOUND_MESSAGE));
        Set<String> myCourseIds = userId != null ? findMyCourses(userId):Set.of();
        Set<String> myFavCourseIds = userId != null ? getMyFavCoursesIds(userId):Set.of();
        return courseMapper.mapToCourseResponse(course, myCourseIds.contains(course.getId()),true,myFavCourseIds.contains(course.getId()));
    }

    @Transactional
    public List<GetCourseResponse> getCoursesByCategory(String category,String userId) {
        List<Course> courses = courseRepository.findByCategory(category);
        Set<String> myCourseIds = userId != null ? findMyCourses(userId):Set.of();
        return courses.parallelStream()
                .map(course -> courseMapper.mapToCourseResponse(course,myCourseIds.contains(course.getId()),false,false))
                .toList();
    }


    public void deleteAllCourses(){
        courseRepository.deleteAll();
    }

    public List<GetCourseResponse> getMyCourses(String userId) {
        List<MyCourses> myCourses = myCourseRepository.findByUserId(userId);
        return myCourses.parallelStream()
                .map(course -> courseMapper.mapToCourseResponse(course.getCourse(),true,false,null))
                .toList();
    }


    public void addFavCourse(String courseId, String userId){
        Course course = courseRepository.findById(courseId).orElseThrow(() -> new ApiCommonException(COURSE_NOT_FOUND_CODE, COURSE_NOT_FOUND_MESSAGE));
        Optional<MyFavourite> existsFavCourse = myFavCourseRepository.findByUserIdAndCourse_Id(userId,courseId);
        if(existsFavCourse.isPresent()){
            myFavCourseRepository.delete(existsFavCourse.get());
            return;
        }
        MyFavourite myFavouriteCourse = MyFavourite.builder()
                .id(UUID.randomUUID().toString())
                .userId(userId)
                .course(course)
                .build();
        myFavCourseRepository.save(myFavouriteCourse);
    }

    public List<GetCourseResponse> getMyFavCourses(String userId) {
        List<MyFavourite> myCourses = myFavCourseRepository.findByUserId(userId);
        Set<String> myCourseIds = userId != null ? findMyCourses(userId):Set.of();
        return myCourses.parallelStream()
                .map(course -> courseMapper.mapToCourseResponse(course.getCourse(),myCourseIds.contains(course.getId()),false,true))
                .toList();
    }

    private Set<String> findMyCourses(String userId) {
        List<MyCourses> myCourses = myCourseRepository.findByUserId(userId);
        return getMyCoursesIds(myCourses);
    }

    private Set<String> getMyCoursesIds(List<MyCourses> myCourses){
        return myCourses.stream()
                .map(mc -> mc.getCourse().getId())
                .collect(Collectors.toSet());
    }

    private Set<String> getMyFavCoursesIds(String userId){
        List<MyFavourite> myCourses = myFavCourseRepository.findByUserId(userId);
        return myCourses.stream()
                .map(mc -> mc.getCourse().getId())
                .collect(Collectors.toSet());
    }
}
