package com.simplilearn.firstsession.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.simplilearn.firstsession.model.Book;


public interface BookRepository extends CrudRepository<Book, Integer> {
	
	
	List<Book> findByTitle(String title);

	List<Book> findByTitleLike(String title);
	
	List<Book> findByAuthor(String author);
	
}
