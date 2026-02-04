package com.inktrail.inktrail.service;

import java.util.NoSuchElementException;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.inktrail.inktrail.DTO.BookDTO;
import com.inktrail.inktrail.mappers.BookMaper;
import com.inktrail.inktrail.model.Book;
import com.inktrail.inktrail.repository.BookRepository;

@Service
public class BookService {

  private final BookRepository bookRepository;
  private final BookMaper bookMapper;

  public BookService(BookRepository bookRepository, BookMaper bookMapper) {
    this.bookRepository = bookRepository;
    this.bookMapper = bookMapper;
  }

  public Page<BookDTO> getAllBooksPaged(int page) {
    Pageable pageable = PageRequest.of(page, 12);

    Page<Book> pagedBooks = bookRepository.findAll(pageable);
    Page<BookDTO> dto = bookMapper.toDtoPage(pagedBooks);

    return dto;
  }

  public BookDTO getBookById(Long id) {
    Book book = bookRepository.findById(id)
        .orElseThrow(() -> new NoSuchElementException("can not find a book with that id"));
    BookDTO dto = bookMapper.toDTO(book);
    return dto;
  }
}
