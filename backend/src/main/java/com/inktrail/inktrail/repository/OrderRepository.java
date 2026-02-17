package com.inktrail.inktrail.repository;

import com.inktrail.inktrail.model.Order;
import com.inktrail.inktrail.model.OrderStatus;
import com.inktrail.inktrail.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    List<Order> findByUser(User user);

    @Query("SELECT o FROM Order o JOIN o.orderItems oi WHERE o.user = :user AND o.status = :status AND oi.book.id = :bookId")
    Optional<Order> findPendingOrderByUserAndBookId(@Param("user") User user, @Param("status") OrderStatus status, @Param("bookId") Long bookId);
}