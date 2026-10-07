package com.spring2.studentPortal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring2.studentPortal.model.Student;
import com.spring2.studentPortal.repository.StudentRepo;

@Service
public class StudentServiceImple implements StudentService {

	@Autowired
	StudentRepo stuRepo;

	@Override
	public Student createStudent(Student stu) {
		return stuRepo.save(stu);
	}

	@Override
	public Student updateStudent(Integer id, Student newStu) {
		Student oldStu = stuRepo.findById(id).orElseThrow();

		oldStu.setFirstName(newStu.getFirstName());
		oldStu.setLastName(newStu.getLastName());
		oldStu.setAge(newStu.getAge());
		oldStu.setCity(newStu.getCity());

		return stuRepo.save(oldStu);
	}

	@Override
	public Student getStudent(Integer id) {
		return stuRepo.findById(id).orElseThrow();
	}

	@Override
	public List<Student> getAllStudents() {
		return stuRepo.findAll();
	}

	@Override
	public void deleteStudent(Integer id) {
		stuRepo.deleteById(id);
	}

}
