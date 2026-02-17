package com.inktrail.inktrail.service;

import com.inktrail.inktrail.dto.CreateOrderRequest;
import com.inktrail.inktrail.model.Book;
import com.inktrail.inktrail.model.Order;
import com.inktrail.inktrail.model.OrderItem;
import com.inktrail.inktrail.model.OrderStatus;
import com.inktrail.inktrail.model.User;
import com.inktrail.inktrail.repository.BookRepository;
import com.inktrail.inktrail.repository.OrderRepository;
import com.inktrail.inktrail.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

  private final OrderRepository orderRepository;
  private final UserRepository userRepository;
  private final BookRepository bookRepository;

  public OrderService(OrderRepository orderRepository, UserRepository userRepository, BookRepository bookRepository) {
    this.orderRepository = orderRepository;
    this.userRepository = userRepository;
    this.bookRepository = bookRepository;
  }

  @Transactional
  public Order createOrder(CreateOrderRequest request) {
    User user = userRepository.findById(request.getUserId())
        .orElseThrow(() -> new RuntimeException("User not found with id: " + request.getUserId()));

    Book book = bookRepository.findById(request.getBookId())
        .orElseThrow(() -> new RuntimeException("Book not found with id: " + request.getBookId()));

    // if (book.getStock() < 1) {
    // throw new RuntimeException("Book out of stock");
    // }

    book.setStock(book.getStock() - 1);

    Optional<Order> existingOrder = orderRepository.findPendingOrderByUserAndBookId(user, OrderStatus.PENDING,
        book.getId());

    if (existingOrder.isPresent()) {
      Order order = existingOrder.get();
      boolean bookFound = false;
      for (OrderItem item : order.getOrderItems()) {
        if (item.getBook().getId().equals(book.getId())) {
          item.setQuantity(item.getQuantity() + 1);
          bookFound = true;
          break;
        }
      }
      if (!bookFound) {
        OrderItem orderItem = OrderItem.builder()
            .order(order)
            .book(book)
            .quantity(1)
            .priceAtTime(book.getPrice())
            .build();
        order.getOrderItems().add(orderItem);
      }
      return orderRepository.save(order);
    }

    Order order = Order.builder()
        .user(user)
        .orderDate(LocalDate.now())
        .status(OrderStatus.PENDING)
        .orderItems(new ArrayList<>())
        .build();

    OrderItem orderItem = OrderItem.builder()
        .order(order)
        .book(book)
        .quantity(1)
        .priceAtTime(book.getPrice())
        .build();

    order.getOrderItems().add(orderItem);

    return orderRepository.save(order);
  }

  @Transactional(readOnly = true)
  public List<Order> getOrdersByUserId(Long userId) {
    User user = userRepository.findById(userId)
        .orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
    return orderRepository.findByUser(user);
  }
}
