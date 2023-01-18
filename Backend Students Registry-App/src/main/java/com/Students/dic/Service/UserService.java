package com.Students.dic.Service;

import java.util.List;

import com.Students.dic.Enitiy.Student;
import org.springframework.stereotype.Service;

@Service
public interface UserService {

	public Student createUser(Student student);

	public List<Student> getUser();
	
	public Student getUserById(int regNo);

	public Student UpdateUser(Student student, int regNo);

	public void delete(int regNo);

}
