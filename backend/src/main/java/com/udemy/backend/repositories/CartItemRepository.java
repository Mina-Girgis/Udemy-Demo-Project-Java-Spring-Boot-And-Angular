package com.udemy.backend.repositories;

import com.udemy.backend.entities.Cart;
import com.udemy.backend.entities.CartItem;
import com.udemy.backend.entities.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, String> {
    Optional<CartItem> findByCartIdAndCourse_Id(String cartId, String id);

    @Transactional
    @Modifying
    @Query("delete from CartItem c where c.id = ?1")
    int deleteByCartItemId(String cartItemId);


}