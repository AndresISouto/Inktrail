package com.inktrail.inktrail.mappers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Component;

import com.inktrail.inktrail.DTO.BookDTO;
import com.inktrail.inktrail.model.Book;

@Component
public class BookMaper {

  public BookDTO toDTO(Book book) {

    return new BookDTO(
        book.getId(),
        book.getISBN(),
        book.getBookTitle(),
        book.getBookAuthor(),
        book.getYearOfPublication(),
        book.getPrice(),
        book.getStock(),
        book.getPublisher(),
        book.getImageURLS(),
        book.getImageURLM(),
        book.getImageURLL());
  }

  public Page<BookDTO> toDtoPage(Page<Book> bookPage) {
    List<BookDTO> dtoList = bookPage.getContent().stream()
        .map(this::toDTO)
        .collect(Collectors.toList());

    return new PageImpl<>(dtoList, bookPage.getPageable(), bookPage.getTotalElements());
  }

}
