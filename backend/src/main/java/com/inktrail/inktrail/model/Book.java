package com.inktrail.inktrail.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "books")
public class Book {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "isbn", unique = true, nullable = false)
  private String ISBN;

  @Column(nullable = false, name = "book_title")
  private String bookTitle;

  @Column(nullable = false, name = "book_author")
  private String bookAuthor;

  @Column(nullable = false, name = "price")
  private Double price;

  @Column(nullable = false, name = "stock")
  private Integer stock;

  @Column(nullable = false, name = "year_of_publication")
  private Integer yearOfPublication;

  @Column(nullable = false, name = "publisher")
  private String publisher;

  @Column(name = "image_urls")
  private String imageURLS;

  @Column(name = "image_urlm")
  private String imageURLM;

  @Column(name = "image_urll")
  private String imageURLL;
}
