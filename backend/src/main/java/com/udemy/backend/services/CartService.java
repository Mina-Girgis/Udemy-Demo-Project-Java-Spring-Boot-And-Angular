package com.udemy.backend.services;

import com.udemy.backend.dtos.addtocart.AddToCartResponse;
import com.udemy.backend.dtos.butnow.BuyNowResponse;
import com.udemy.backend.dtos.getcartitems.CartItemsResponse;
import com.udemy.backend.dtos.getcartitems.GetCartItemsResponse;
import com.udemy.backend.dtos.getcoursebyid.GetCourseResponse;
import com.udemy.backend.dtos.removefromcart.RemoveFromCartResponse;
import com.udemy.backend.entities.Cart;
import com.udemy.backend.entities.CartItem;
import com.udemy.backend.entities.Course;
import com.udemy.backend.entities.MyCourses;
import com.udemy.backend.exceptions.ApiCommonException;
import com.udemy.backend.mappers.CartMapper;
import com.udemy.backend.repositories.CartItemRepository;
import com.udemy.backend.repositories.CartRepository;
import com.udemy.backend.repositories.CourseRepository;
import com.udemy.backend.repositories.MyCourseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static com.udemy.backend.constants.Constants.CART_ITEM_ADDED;
import static com.udemy.backend.constants.Constants.CART_ITEM_REMOVED;
import static com.udemy.backend.constants.Errors.*;

@Service
@RequiredArgsConstructor
public class CartService {

    private final CartRepository cartRepository;
    private final CartItemRepository cartItemRepository;
    private final CourseRepository courseRepository;
    private final CartMapper cartMapper;
    private final MyCourseRepository myCourseRepository;

    @Transactional
    public AddToCartResponse addToCart(String userId, String courseId) {
        Course course = courseRepository.findById(courseId).orElseThrow(()->new ApiCommonException(COURSE_NOT_FOUND_CODE,COURSE_NOT_FOUND_MESSAGE));
        Cart cart = cartRepository.findByUserId(userId).orElseGet(() -> createNewCart(userId));


        Optional<CartItem> cartItem = cartItemRepository.findByCartIdAndCourse_Id(cart.getId(),courseId);
        if(cartItem.isPresent()){
            throw new ApiCommonException(CART_ITEM_ALREADY_EXISTS_CODE,CART_ITEM_ALREADY_EXISTS_MESSAGE);
        }
        CartItem newCartItem =  CartItem.builder()
                .id(UUID.randomUUID().toString())
                .cartId(cart.getId())
                .course(course)
                .build();
        cartItemRepository.save(newCartItem);
        return AddToCartResponse.builder().id(newCartItem.getId()).cartId(cart.getId()).message(CART_ITEM_ADDED).build();
    }

    @Transactional
    public RemoveFromCartResponse removeFromCart(String itemId){
        cartItemRepository.deleteByCartItemId(itemId);
        return RemoveFromCartResponse.builder().message(CART_ITEM_REMOVED).build();
    }

    public GetCartItemsResponse getCartItems(String cardId){
        Cart cart =  cartRepository.findById(cardId).orElseThrow(()-> new ApiCommonException(CART_IS_NOT_EXISTS_CODE,CART_IS_NOT_EXISTS_MESSAGE));
        return cartMapper.mapToGetCartItemsResponse(cart);
    }

    @Transactional
    public BuyNowResponse buyNow(String cardId){
        Cart cart =  cartRepository.findById(cardId).orElseThrow(()-> new ApiCommonException(CART_IS_NOT_EXISTS_CODE,CART_IS_NOT_EXISTS_MESSAGE));
        List<MyCourses> myCourse = cart.getCartItems().stream().map(item-> MyCourses.builder()
                .id(UUID.randomUUID().toString())
                .userId(cart.getUserId())
                .course(item.getCourse())
                .build()).toList();

        myCourseRepository.saveAll(myCourse);
        cart.getCartItems().clear();
        cartRepository.save(cart);
        return BuyNowResponse.builder().message("").build();
    }

    private Cart createNewCart(String userId){
        Cart cart =  Cart.builder()
                .id(UUID.randomUUID().toString())
                .userId(userId)
                .build();
        return cartRepository.save(cart);
    }
}
