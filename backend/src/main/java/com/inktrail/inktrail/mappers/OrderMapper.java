package com.inktrail.inktrail.mappers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.inktrail.inktrail.dto.OrderItemResponse;
import com.inktrail.inktrail.dto.OrderResponse;
import com.inktrail.inktrail.model.Order;
import com.inktrail.inktrail.model.OrderItem;

@Component
public class OrderMapper {

  public OrderResponse toDTO(Order order) {
    List<OrderItemResponse> itemResponses = order.getOrderItems().stream()
        .map(this::toItemDTO)
        .collect(Collectors.toList());

    Double total = itemResponses.stream()
        .mapToDouble(OrderItemResponse::getSubtotal)
        .sum();

    return OrderResponse.builder()
        .orderItems(itemResponses)
        .total(total)
        .build();
  }

  public OrderItemResponse toItemDTO(OrderItem orderItem) {
    return OrderItemResponse.builder()
        .id(orderItem.getId())
        .bookId(orderItem.getBook().getId())
        .bookTitle(orderItem.getBook().getBookTitle())
        .bookAuthor(orderItem.getBook().getBookAuthor())
        .quantity(orderItem.getQuantity())
        .priceAtTime(orderItem.getPriceAtTime())
        .subtotal(orderItem.getQuantity() * orderItem.getPriceAtTime())
        .build();
  }
}
