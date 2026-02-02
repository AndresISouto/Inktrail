package com.inktrail.inktrail.DTO;

public record BookDTO(
    Long id,
    String ISBN,
    String BookTitle,
    String BookAuthor,
    Integer YearOfPublication,
    Double Price,
    Integer Stock,
    String Publisher,
    String ImageURLS,
    String ImageURLM,
    String ImageURLL) {
}
