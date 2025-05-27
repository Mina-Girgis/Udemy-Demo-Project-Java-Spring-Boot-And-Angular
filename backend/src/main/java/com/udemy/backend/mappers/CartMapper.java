package com.udemy.backend.mappers;

import com.udemy.backend.dtos.getcartitems.CartItemsResponse;
import com.udemy.backend.dtos.getcartitems.GetCartItemsResponse;
import com.udemy.backend.dtos.getcoursebyid.GetCourseResponse;
import com.udemy.backend.entities.Cart;
import com.udemy.backend.entities.CartItem;
import com.udemy.backend.entities.Course;
import org.springframework.stereotype.Component;

@Component
public class CartMapper {

    public GetCartItemsResponse mapToGetCartItemsResponse(Cart cart) {
        return GetCartItemsResponse.builder()
                .id(cart.getId())
                .cartItems(
                        cart.getCartItems().stream()
                                .map(this::mapToCartItemsResponse)
                                .toList()
                )
                .build();
    }

    private CartItemsResponse mapToCartItemsResponse(CartItem item) {
        return CartItemsResponse.builder()
                .id(item.getId())
                .course(mapToGetCourseResponse(item.getCourse()))
                .build();
    }

    private GetCourseResponse mapToGetCourseResponse(Course course) {
        return GetCourseResponse.builder()
                .id(course.getId())
                .price(course.getPrice())
                .category(course.getCategory())
                .title(course.getTitle())
                .rating(course.getRating())
                .imageUrl(course.getImageUrl())
                .build();
    }
}
