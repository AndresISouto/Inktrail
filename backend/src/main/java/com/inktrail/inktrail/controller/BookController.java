package com.inktrail.inktrail.controller;

import com.inktrail.inktrail.DTO.BookDTO;
import com.inktrail.inktrail.service.BookService;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/books")
public class BookController {

  private final BookService bookService;

  public BookController(BookService bookService) {
    this.bookService = bookService;
  }

  @GetMapping
  public ResponseEntity<Page<BookDTO>> getPagedBooks(@RequestParam int page) {
    Page<BookDTO> response = bookService.getAllBooksPaged(page);

    return ResponseEntity.ok(response);
  }

  @GetMapping("/{id}")
  public ResponseEntity<BookDTO> getBookById(@PathVariable Long id) {
    BookDTO response = bookService.getBookById(id);

    return ResponseEntity.ok(response);
  }

  @GetMapping("/search")
  public ResponseEntity<Page<BookDTO>> searchBooks(
      @RequestParam String title,
      @RequestParam int page) {
    Page<BookDTO> response = bookService.searchBooksByTitle(title, page);
    return ResponseEntity.ok(response);
  }

}
