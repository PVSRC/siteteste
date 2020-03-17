package com.example.contacts.Controllers;

import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Optional;

import com.example.contacts.Models.Contact;
import com.example.contacts.repositorys.ContactRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * ContactController
 */
@RestController
@RequestMapping("/contacts")
public class ContactController {

    private final ContactRepository repository;

    ContactController(final ContactRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public Iterable<Contact> getMethodName() {
        return this.repository.findAll();
    }

    @PostMapping
    public Contact postContact(@RequestBody final Contact entity) {
        return this.repository.save(entity);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Contact> putContacts(@PathVariable final Long id, @RequestBody final Contact entity) {
        return this.repository.findById(id).map(contact -> {
            contact.setName(entity.getName());
            contact.setEmail(entity.getEmail());
            contact.setPhone(entity.getPhone());
            this.repository.save(entity);
            return ResponseEntity.ok().body(contact);
        }).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity <Contact> getContact(@PathVariable Long id) {
        return this.repository.findById(id)
                    .map(contact ->{
                        return ResponseEntity.ok().body(contact);
                    }).orElse(ResponseEntity.notFound().build());
    }
    
    @DeleteMapping(value ="/{id}")
    public ResponseEntity <?> deleteContact(@PathVariable final Long id) {
        return this.repository.findById(id).map(contact -> {
            this.repository.delete(contact);
            return ResponseEntity.noContent().build();
        }).orElse(ResponseEntity.notFound().build());
    }
}