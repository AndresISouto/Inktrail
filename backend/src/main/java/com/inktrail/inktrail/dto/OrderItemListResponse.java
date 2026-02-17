package com.inktrail.inktrail.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderItemListResponse {

    private List<OrderItemResponse> orderItems;
    private Double total;
}
