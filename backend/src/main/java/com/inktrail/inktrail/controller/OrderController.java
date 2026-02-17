package com.inktrail.inktrail.controller;

import com.inktrail.inktrail.dto.CreateOrderRequest;
import com.inktrail.inktrail.dto.OrderItemListResponse;
import com.inktrail.inktrail.dto.OrderItemResponse;
import com.inktrail.inktrail.mappers.OrderMapper;
import com.inktrail.inktrail.model.Order;
import com.inktrail.inktrail.service.OrderService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/orders")
public class OrderController {

  private final OrderService orderService;
  private final OrderMapper orderMapper;

  public OrderController(OrderService orderService, OrderMapper orderMapper) {
    this.orderService = orderService;
    this.orderMapper = orderMapper;
  }

  @PostMapping
  public ResponseEntity<String> createOrder(@Valid @RequestBody CreateOrderRequest request) {
    Order order = orderService.createOrder(request);
    return ResponseEntity.ok("todo ok");
  }

  @GetMapping("/user/{userId}")
  public ResponseEntity<OrderItemListResponse> getOrdersByUserId(@PathVariable Long userId) {
    List<OrderItemResponse> items = orderService.getOrdersByUserId(userId).stream()
        .flatMap(order -> order.getOrderItems().stream())
        .map(orderMapper::toItemDTO)
        .toList();

    Double total = items.stream().mapToDouble(OrderItemResponse::getSubtotal).sum();

    OrderItemListResponse response = OrderItemListResponse.builder()
        .orderItems(items)
        .total(total)
        .build();

    return ResponseEntity.ok(response);
  }
}
