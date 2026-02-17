package com.inktrail.inktrail.dto;

import com.inktrail.inktrail.model.OrderStatus;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderResponse {

  private List<OrderItemResponse> orderItems;
  private Double total;
}
