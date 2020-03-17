package com.example.contacts.repositorys;

import com.example.contacts.Models.Contact;

import org.springframework.data.repository.CrudRepository;

/**
 * ContactRepository
 */
public interface ContactRepository extends CrudRepository<Contact, Long> {

    
}