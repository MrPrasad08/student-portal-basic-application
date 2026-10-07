package com.spring2.studentPortal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring2.studentPortal.model.Student;
import com.spring2.studentPortal.service.StudentService;

//http:localhost:3306/student 

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/student")
public class StudentController {

	// http:localhost:3306/student/msg
	@GetMapping("/msg")
	String hello() {
		return "Welcome to Student Portal....!!";
	}

	@Autowired
	StudentService stuService;

	// http:localhost:3306/student/createStudent
	@PostMapping("/createStudent")
	public Student createStu(@RequestBody Student s) {
		return stuService.createStudent(s);
	}

	// http:localhost:3306/student/getStudent/{id}
	@GetMapping("getStudent/{id}")
	public Student getStudent(@PathVariable Integer id) {
		return stuService.getStudent(id);
	}

	// http:localhost:3306/student/getAllStu
	@GetMapping("/getAllStu")
	public List<Student> getAllStud() {
		return stuService.getAllStudents();
	}

	// http:localhost:3306/student/updateStudent/{id}
	@PutMapping("updateStudent/{id}")
	public Student updateStudent(@PathVariable Integer id, @RequestBody Student s) {

		return stuService.updateStudent(id, s);
	}

	// http:localhost:3306/student/deleteStudent/{id}
	@DeleteMapping("deleteStudent/{id}")
	public String deleteStudent(@PathVariable Integer id) {
		stuService.deleteStudent(id);
		return "Deleted Successfully.....!!";
	}
}
