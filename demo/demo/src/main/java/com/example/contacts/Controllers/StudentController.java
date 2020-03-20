package com.example.contacts.Controllers;

import com.example.contacts.Models.Student;
import com.example.contacts.repositorys.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
/**
 * StudentController
 */
@RestController
@CrossOrigin
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private final StudentRepository repository;

    StudentController(final StudentRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public Iterable<Student> getMethodName() {
        return this.repository.findAll();
    }

    @PostMapping
    public Student postStudent(@RequestBody final Student entity) {
        return this.repository.save(entity);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Student> putStudents(@PathVariable final Long id, @RequestBody final Student entity) {
        return this.repository.findById(id).map(student -> {
            student.setName(entity.getName());
            student.setSenha(entity.getSenha());
            this.repository.save(entity);
            return ResponseEntity.ok().body(student);
        }).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity <Student> getStudent(@PathVariable Long id) {
        return this.repository.findById(id)
                    .map(student ->{
                        return ResponseEntity.ok().body(student);
                    }).orElse(ResponseEntity.notFound().build());
    }
    
    @DeleteMapping(value ="/{id}")
    public ResponseEntity <?> deleteStudent(@PathVariable final Long id) {
        return this.repository.findById(id).map(student -> {
            this.repository.delete(student);
            return ResponseEntity.noContent().build();
        }).orElse(ResponseEntity.notFound().build());
    }
}