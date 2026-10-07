package com.spring2.studentPortal.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.spring2.studentPortal.model.Student;

@Service
public interface StudentService {

	Student createStudent(Student stu);

	Student updateStudent(Integer id, Student s);

	Student getStudent(Integer id);

	List<Student> getAllStudents();

	void deleteStudent(Integer id);
}
