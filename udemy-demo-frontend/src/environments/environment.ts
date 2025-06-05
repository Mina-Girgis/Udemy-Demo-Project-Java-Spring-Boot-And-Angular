export const environment = {
  api: {
  endpoints: {
    user:{
        createNewUser:"user",
        getUserById: (userId: string) => `user/${userId}`,
        login:"user/login",
    },
    course:{
        createNewCourse:"course",
        getCourseById: (courseId: string) => `course/${courseId}`,
        getCoursesByCategory:"courses",
        deleteAllCourses:"courses",
        getMyCourses:"courses/my-learning",
        getMyFav:"courses/favourites",
        addFavCourse: (courseId: string) => `courses/${courseId}/favourites`,
    },
    cart:{
        getCart:"carts/",
        addToCart: (courseId: string) => `carts/course/${courseId}`,
        removeFromCart: (itemId: string) => `carts/${itemId}`,
        buyNow:"carts/buy",
    }, 
   }
 },
};