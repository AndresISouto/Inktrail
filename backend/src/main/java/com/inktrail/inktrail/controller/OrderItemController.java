package com.inktrail.inktrail.controller;

import com.inktrail.inktrail.service.OrderItemService;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/order-items")
public class OrderItemController {
    
    private final OrderItemService orderItemService;
    
    public OrderItemController(OrderItemService orderItemService) {
        this.orderItemService = orderItemService;
    }
}