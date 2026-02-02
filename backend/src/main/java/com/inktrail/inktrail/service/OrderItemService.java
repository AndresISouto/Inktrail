package com.inktrail.inktrail.service;

import com.inktrail.inktrail.model.OrderItem;
import com.inktrail.inktrail.repository.OrderItemRepository;
import org.springframework.stereotype.Service;

@Service
public class OrderItemService {
    
    private final OrderItemRepository orderItemRepository;
    
    public OrderItemService(OrderItemRepository orderItemRepository) {
        this.orderItemRepository = orderItemRepository;
    }
}