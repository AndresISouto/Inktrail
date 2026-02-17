package com.inktrail.inktrail.DTO;

public record UserRegisterRequestDTO(
    String name,
    String email,
    String password) {
}
