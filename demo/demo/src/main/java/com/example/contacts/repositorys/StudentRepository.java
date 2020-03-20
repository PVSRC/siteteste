package com.example.contacts.repositorys;

import com.example.contacts.Models.Student;

import org.springframework.data.repository.CrudRepository;

/**
 * StudentRepository
 */
public interface StudentRepository extends CrudRepository<Student, Long> {

}