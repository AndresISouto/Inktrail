package com.inktrail.inktrail.repository;

import com.inktrail.inktrail.model.Book;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

  Page<Book> findByBookTitleContainingIgnoreCase(String title, Pageable pageable);
}
