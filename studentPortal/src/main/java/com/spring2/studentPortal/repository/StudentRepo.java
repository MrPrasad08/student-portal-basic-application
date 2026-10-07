package com.spring2.studentPortal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring2.studentPortal.model.Student;

public interface StudentRepo extends JpaRepository<Student, Integer> {
	
}
